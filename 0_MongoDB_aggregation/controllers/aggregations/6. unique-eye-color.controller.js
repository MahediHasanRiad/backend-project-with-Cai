import { asyncHandler } from "../../asyncHandler.js";
import { User } from "../../models/user.model.js";

export const uniqueEyeColorController = asyncHandler(async (req, res) => {

    const uniqueEyeColor = await User.aggregate([
        {
            $group: {
                _id: '$eyeColor',
                total: {
                    $sum: 1
                }
            }
        }
    ])

    return res.status(200).json({message: 'Eye Color', uniqueEyeColor})

});
