import { connectDB } from "./db/index.js";
import express from "express";
import dotenv from 'dotenv'


const app = express()
dotenv.config({path: './.env'})


// database connection 
connectDB()
