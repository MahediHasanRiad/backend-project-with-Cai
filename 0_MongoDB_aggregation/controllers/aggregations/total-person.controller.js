import { asyncHandler } from "../../asyncHandler.js";
import { User } from "../../models/user.model.js";

export const totalPerson = asyncHandler(async (req, res) => {
    const totalPerson = await User.aggregate([
        {
            $group: {
                _id: "$gender",
                count: {
                    $sum: 1
                }
            }
        }
    ])

    return res.status(200).json({message: 'total person', totalPerson})
})