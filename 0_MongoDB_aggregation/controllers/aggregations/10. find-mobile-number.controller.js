import { asyncHandler } from "../../asyncHandler.js";
import { User } from "../../models/user.model.js";


export const findMobileNumber = asyncHandler(async (req, res) => {
    const result = await User.aggregate([
        {
            $match: {
                "company.phone": /^\+1 \(940\)/         // regex
            }
        },
        // {
        //     $count: 'Total: '
        // }
    ])
    
    return res.status(200).json({message: 'success', result})
})
