import express from "express";
import { createUser } from "../controllers";
import multer from "multer";

const createUserRouter = express.Router();
createUserRouter.post('/user', createUser);

export default createUserRouter;
