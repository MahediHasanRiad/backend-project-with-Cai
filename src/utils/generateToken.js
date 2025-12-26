import { User } from "../model/user.model"

const generateAccessAndRefereshTokens = async (userId) => {

    try {
        const user = await User.findById(userId)
        const accessToken = user.generateAccessToken()
        const refreshToken = user.generateRefreshToken()
    
        user.refreshToken = refreshToken
        user.save({validateBeforeSave: false})
    
        return {
            accessToken,
            refreshToken
        }
    } catch (error) {
        console.log(error)
    }
}

export {generateAccessAndRefereshTokens}