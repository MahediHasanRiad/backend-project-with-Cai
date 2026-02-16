import { asyncHandler } from "../../asyncHandler.js";
import { User } from "../../models/user.model.js";


export const findSomeTagUser = asyncHandler(async (req, res) => {
  const result = await User.aggregate([
    {
      $match: {
        tags: "enim",       // filter this enim tag ,,, return only match field
      },
    },
    {
      $count: "User with 'enim' tags: ",
    },
  ]);

  return res.status(200).json({ message: "Find this tag user", result });
});
