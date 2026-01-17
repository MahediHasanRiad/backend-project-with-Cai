import { asyncHandler } from "../../asyncHandler.js";
import { User } from "../../models/user.model.js";

export const filterByFavouriteFoodController = asyncHandler(async (req, res) => {
    const result = await User.aggregate([
        {
            $group: {
                _id: '$favoriteFruit',      // filter by favourite fruit

                users: {
                    $push: '$name'      // show all user name there favourite fruit is same
                }
            }
        }
    ])

    return res.status(200).json({message: 'success', result})
})