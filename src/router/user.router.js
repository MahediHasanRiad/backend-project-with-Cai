import { Router } from "express";
import { upload } from "../middleware/multer.middleware.js";
import { registerUser } from "../controller/user/register.controller.js";
import { loginUser } from "../controller/user/login.controller.js";
import { logout } from "../controller/user/logout.controller.js";
import { jwtVerify } from "../middleware/auth.middleware.js";

const userRouter = Router()

// use multer middleware for multiple image upload during registration 
userRouter.route('/register').post(upload.fields([
    {
        name: 'avater',
        maxCount: 1
    },
    {
        name: 'coverImage',
        maxCount: 1
    }
]), registerUser) 
userRouter.route('/login').post( loginUser )
userRouter.route('/logout').post( jwtVerify, logout )


export { userRouter }