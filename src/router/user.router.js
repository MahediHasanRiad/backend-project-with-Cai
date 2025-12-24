import { registerUser } from "../controller/register.controller.js";
import { Router } from "express";
import { upload } from "../middleware/multer.middleware.js";

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


export { userRouter }