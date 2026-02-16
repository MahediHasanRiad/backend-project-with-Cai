import { asyncHandler } from "../../asyncHandler.js";
import { User } from "../../models/user.model.js";

export const filterByMatchItems = asyncHandler(async (req, res) => {
    const result = await User.aggregate([
        {
            $match: {
                tags: {
                    $all: ['enim', 'ad']        // $all: [] ==> all should be matched
                                                // $all --> use for the multiple field match
                }
            }
        }
    ])

    return res.status(200).json({message: 'success', result})
})