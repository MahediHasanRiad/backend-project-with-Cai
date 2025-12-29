import { User } from "../../model/user.model.js";
import { apiError } from "../../utils/apiError.js";
import { apiResponse } from "../../utils/apiResponse.js";
import { asyncHandler } from "../../utils/asyncHandler.js";

const getCurrentUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id).select("-password");

  if (!user) throw new apiError(400, "user not found !");

  return res.status(200).json(new apiResponse(200, user, "Show User"));
});

export { getCurrentUser };
