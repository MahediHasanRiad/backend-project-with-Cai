import { connectDB } from "./db/index.js";
import express, { urlencoded } from "express";
import dotenv from "dotenv";
import cors from 'cors'
import cookieParser from "cookie-parser";
import { userRouter } from "./router/user.router.js";


dotenv.config({ path: "./.env" });
const app = express();


// middleware 
app.use(express.json({limit: '16kb'}))
app.use(urlencoded({extended: true, limit: '16kb'}))
app.use(cors({
    origin: process.env.PRONTEND_URL
}))
app.use(cookieParser())


// routers
app.use('/api/v1/user', userRouter)




const PORT = process.env.PORT || 4000

// database connection
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is on ${PORT}`);
      console.log("Database Connected !!!");
    });
  })
  .catch((e) => {
    console.log("Connection Error: ", e);
  });
