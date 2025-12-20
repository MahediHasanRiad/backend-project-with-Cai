import mongoose from "mongoose";
import express from "express";
import { DATABASE_NAME } from "../constants.js";

const app = express()

export const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DATABASE_NAME}`)
        // console.log(`MongoDB connected on BD host: ${connectionInstance.connection.host}`)

        app.listen(process.env.PORT, () => {
            console.log(`Server is on...${process.env.PORT}`)
            console.log('Database Connected !!!')
        })
    } catch (error) {
        console.log('Database Connection Failed: ', error)
    }
}