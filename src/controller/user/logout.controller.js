import { User } from "../../model/user.model";
import { apiResponse } from "../../utils/apiResponse";
import { asyncHandler } from "../../utils/asyncHandler";

const logout = asyncHandler( async (req, res) => {
  await User.findByIdAndUpdate(
    req.user._id,
    {
      $set: {
        refreshToken: 1, // remove refresh token from database
      },
    },
    {
      new: true,
    }
  );

  const options = {
    httpOnly: true,
    secure: true,
  };

  return res
    .status(200)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json(new apiResponse(200, {}, "LogOut successfully !"));
});

export { logout };
