import { User } from "../../models/user.model.js"

export const isActiveController = async (req, res) => {
    try {
        const activeUsers = await User.aggregate([
            {
                $match: {
                    isActive: true
                }
            },
            {
                $count: 'Active-users'
            }
        ])

        return res.status(200).json({message: 'success', activeUsers})
    } 
    catch (error) {
        console.log(error)
    }
}