import { User } from "../../model/user.model.js";
import { apiError } from "../../utils/apiError.js";
import { apiResponse } from "../../utils/apiResponse.js";
import { asyncHandler } from "../../utils/asyncHandler.js";

const updateDetails = asyncHandler(async (req, res) => {
  const { userName, fullName, email } = req.body;

  if (!userName && !fullName && !email)
    throw new apiError(400, "all field are empty !!!");

  /**
   * find user
   */
  const user = await User.findByIdAndUpdate(
    req.user._id,
    {
      $set: {
        userName: userName,
        fullName: fullName,
        email: email,
      },
    },
    { new: true }
  );

  if (!user) throw new apiError(500, "Error during Update !");

  return res.status(200).json(new apiResponse(200, user, "success"));
});

export { updateDetails };
