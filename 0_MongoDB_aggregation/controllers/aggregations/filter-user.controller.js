import { asyncHandler } from "../../asyncHandler.js";
import { User } from "../../models/user.model.js";

export const filterUserController = asyncHandler(async (req, res) => {

    const result = await User.aggregate([
        {
            $match: {             // filter according this field
                isActive: false,
                tags: 'velit'
            }
        },
        {
            $project: {         // which field want to show
                name: 1,
                age: 1
            }
        }
    ])

    return res.status(200).json({message: 'success', result})

})