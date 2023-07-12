import express from "express";
import { findUser } from "../controllers";

const findUserRouter = express.Router();

findUserRouter.get('/user/:id', findUser);

export default findUserRouter;