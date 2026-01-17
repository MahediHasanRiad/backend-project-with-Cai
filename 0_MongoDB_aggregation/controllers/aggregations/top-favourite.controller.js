import { asyncHandler } from "../../asyncHandler.js";
import { User } from "../../models/user.model.js";


export const topFavouriteFrouit = asyncHandler(async (req, res) => {
    const favouriteFood = await User.aggregate([
        {
            $group: {
                _id: '$favoriteFruit',
                count: {
                    $sum: 1     // 1 --> i++
                }
            }
        },
        {
            $sort: {
                count: -1       // 1 = accending    -1 = decending
            }
        },
        {
            $limit: 2           // how many item will be show
        }
    ])

    return res.status(200).json({message: 'Favourite Food', favouriteFood})
})