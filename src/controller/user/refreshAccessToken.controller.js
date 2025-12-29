import jwt from "jsonwebtoken";
import { apiError } from "../../utils/apiError.js";
import { asyncHandler } from "../../utils/asyncHandler.js";
import { User } from "../../model/user.model.js";
import { generateAccessAndRefereshTokens } from "../../utils/generateToken.js";
import { apiResponse } from "../../utils/apiResponse.js";

const refreshAccessToken = asyncHandler(async (req, res) => {
  /**
   * get refresh token from cookie or body
   */
  const incommingRefreshToken = req.cookies?.refreshToken || req.body?.refreshToken;

  if (!incommingRefreshToken)
    throw new apiError(400, "Refresh token undefine !");

  /**
   * decode refresh token
   */
  const decoded = jwt.verify(
    incommingRefreshToken,
    process.env.REFRESH_TOKEN_SECRET
  );
  if (!decoded) throw new apiError(401, "invalid refresh token !");

  /** find user */
  const user = await User.findById(decoded._id);
  if (!user) throw new apiError(400, "user not found !");

  /**
   * compare user.refreshToken === incommingRefreshtToken
   */
  if (incommingRefreshToken !== user.refreshToken)
    throw new apiError(400, "refresh token in expired or used");

  /**
   * generate new accessToken
   */
  const { accessToken, refreshToken } = await generateAccessAndRefereshTokens(
    user._id
  );

  const options = {
    httpOnly: true,
    secure: true,
  };

  return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .json(new apiResponse(200, accessToken, "access token Refreshed !"));
});

export { refreshAccessToken };
