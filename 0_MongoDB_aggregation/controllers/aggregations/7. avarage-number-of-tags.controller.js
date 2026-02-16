import { asyncHandler } from "../../asyncHandler.js";
import { User } from "../../models/user.model.js";

export const avarageNumberOfTags = asyncHandler(async (req, res) => {
    const avarage = await User.aggregate([
        {
            $unwind: '$tags'        // unwind => expreed array, create new document for each array index
        },
        {
            $group: {               // group by id and sum all tags { same id but another document means new tag }
                _id: '$_id',
                numberOfTags: {
                    $sum: 1
                }
            }
        },
        {
            $group: {
                _id: null,      // all document combine
                avarageNumberOfTags: {
                    $avg: '$numberOfTags'
                }
            }
        }
    ])

    return res.status(200).json({message: 'avarage number of tags', avarage })
});


/**
 * another way
 */

export const avarageNumberOfTags2 = asyncHandler(async (req, res) => {
    const avarage = await User.aggregate([
        {
            $addFields: {           // add new field
                numberOfTags: {
                    $size: {
                        $ifNull: ['$tags', []]          // if tags not found, than create a empty array in tags
                    }
                }
            }
        },
        {
            $group: {
                _id: null,
                avarage: {
                    $avg: '$numberOfTags'
                }
            }
        }
    ])

    return res.status(200).json({message: 'avarage number of tags', avarage })
});