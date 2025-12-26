import { User } from "../../model/user.model";
import { apiError } from "../../utils/apiError";
import { asyncHandler } from "../../utils/asyncHandler";
import { generateAccessAndRefereshTokens } from "../../utils/generateToken";
import { apiResponse } from "../../utils/apiResponse";

const loginUser = asyncHandler(async (req, res) => {
    
  /**
   * get { userName, email, password }
   * verify email and password
   * find user exist or not => {email or username}
   * validate password
   * access and refresh Token
   * set Token in cookies
   */

  const { userName, email, password } = req.body;

  if (!userName || !email || !password) {
    throw new apiError(400, "All field are required !!!");
  }

  // find user by {userName or email}
  const user = await User.findOne({
    $or: [{ userName }, { email }],
  });

  if (!user) {
    throw new apiError(400, "User not found !!!");
  }

  // check password currect
  const passwordVarify = await user.isPasswordCorrect(password);

  if (!passwordVarify) {
    throw new apiError(400, "Password are not Currect !!!");
  }

  // generate token
  const { accessToken, refreshToken } = await generateAccessAndRefereshTokens(
    user._id
  );

  // does not send file - list
  const logedIn = await User.findById(user._id).select(
    "-password -refreshToken"
  );

  // security for cookie
  const option = {
    httpOnly: true,
    secure: true,
  };

  return res
    .status(200)
    .cookie("accessToken", accessToken, option)
    .cookie("refreshToken", refreshToken)
    .json(
      new apiResponse(
        200,
        { user: logedIn, accessToken, refreshToken },
        "User LogIn successfully"
      )
    );
});

export { loginUser };
