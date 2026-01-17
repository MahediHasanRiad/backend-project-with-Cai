import { asyncHandler } from "../../asyncHandler.js";
import { User } from "../../models/user.model.js";

export const highestNumberOfRegisterUser = asyncHandler(async (req, res) => {
    const registerUser = await User.aggregate([
        {
            $group: {
                _id: "$company.location.country",       // nested object
                userCount: {
                    $sum: 1             // 1 = i++
                }
            }
        },
        {
            $sort: {
                count: 1
            }
        },
        {
            $limit: 1
        }
    ])

    return res
            .status(200)
            .json({message: 'Highest Number of Register User', registerUser})
})