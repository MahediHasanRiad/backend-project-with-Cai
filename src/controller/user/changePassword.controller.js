import { User } from "../../model/user.model.js";
import { apiError } from "../../utils/apiError.js";
import { apiResponse } from "../../utils/apiResponse.js";
import { asyncHandler } from "../../utils/asyncHandler.js";

const changePassword = asyncHandler(async (req, res) => {
  const { oldPassword, newPassword } = req.body;

  if (!oldPassword || !newPassword)
    throw apiError(400, "Old password and new password required !");

  /**
   * find user
   */
  const user = await User.findById(req.user._id);

  if (!user) throw new apiError(400, "user not found");

  /**
   * old password validation
   */
  const validatePassword = user.isPasswordCorrect(oldPassword);

  if (!validatePassword) throw apiError(400, "Old Password is Invalid");

  /**
   * update new password
   */
  user.password = newPassword;

  user.save({ validateBeforeSave: false });

  return res
    .status(200)
    .json(new apiResponse(200, user, "password change successfully !"));
});

export { changePassword };
