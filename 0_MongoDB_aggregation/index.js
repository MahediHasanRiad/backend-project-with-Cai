import express, { urlencoded } from "express";
import mongoose from "mongoose";
import { allRouter } from "./routers/routers.router.js";

const app = express();

// middleware
app.use(express.json());
app.use(urlencoded({ extended: true }));



// routers
app.use("/api/v1", allRouter);



// database connection
mongoose
  .connect(`mongodb://localhost:27017/aggregation`)
  .then(() => {
    console.log("Database connected !!!");

    app.listen(3000, () => {
      console.log("server on port 3000 !!!");
    });
  })
  .catch((e) => {
    console.log(e);
  });
