import { asyncHandler } from "../../asyncHandler.js";
import { User } from "../../models/user.model.js";

export const filterByLocationController = asyncHandler(async (req, res) => {
    const result = await User.aggregate([
         {
            $match: {
                "company.location.country": "USA"
            }
         },
         {
            $group: {
                _id: "$company.title",          // want company wise data
                userCount: {
                    $sum: 1
                }
            }
         }
    ])

    return res.status(200).json({message: 'success', result})
})