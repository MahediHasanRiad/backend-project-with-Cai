import { asyncHandler } from "../../asyncHandler.js";
import { User } from "../../models/user.model.js";

export const filterBySecondIndex = asyncHandler(async (req, res) => {
  const result = await User.aggregate([
    {
      $match: {
        "tags.1": "ad",         // tags.1: 'add'  ==> fieldname.indexNumber: value
      },
    },
    {
        $count: "SecondIndex-by-ad: "
    }
  ]);

  return res.status(200).json({ message: "success", result });
});
