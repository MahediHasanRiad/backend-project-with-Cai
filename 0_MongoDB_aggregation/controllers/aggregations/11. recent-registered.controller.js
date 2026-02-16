import { asyncHandler } from "../../asyncHandler.js";
import { User } from "../../models/user.model.js";

export const recentRegisteredUser = asyncHandler(async (req, res) => {
    const result = await User.aggregate([
        {
            $sort: {
                registered: -1
            }
        },
        {
            $limit: 3
        },
        {
            $project: {
                name: 1,
                age: 1,
                registered: 1,
                gender: 1,
            }
        }
    ])

    return res.status(200).json({message: 'success', result})
})