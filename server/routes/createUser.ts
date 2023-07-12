import express from "express";
import { createUser } from "../controllers";
import multer from "multer";
import upload from "../middlewares";



const createUserRouter = express.Router();
createUserRouter.post('/user', upload.single('imgUrl'), createUser);

export default createUserRouter;
