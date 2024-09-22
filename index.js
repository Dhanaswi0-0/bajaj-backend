import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import getRoute from "./getRoute.js";
dotenv.config();
// import userRouter from "./routes/user.route.js";
// import authRouter from "./routes/auth.route.js";
const app = express();
app.use(cors());
app.use(express.json());
app.listen(3000, () => {
  console.log("Server is running on port 3000!");
});
app.use("/", getRoute);
