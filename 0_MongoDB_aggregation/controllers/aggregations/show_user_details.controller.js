import { asyncHandler } from "../../asyncHandler.js";
import { Book } from "../../models/book.model.js";

export const showUserDetailsController = asyncHandler(async (req, res) => {

  const showDetails = await Book.aggregate([
    {
      $lookup: {            // find objectId details
        from: 'Author',
        as: 'author_details',
        localField: 'author',
        foreignField: "_id"
      }
    },
    {
      $addFields: {         // if you want to remove array, or convert in object 
        author: {
          $arrayElemAt: ["$author_details", 0 ]     // ["field name", index number ] 
          // $first: "$author_details"        // another way
        }
      }
    }
  ])

})