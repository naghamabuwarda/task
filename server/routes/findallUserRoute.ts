import express from "express";
import { findAllUsers } from "../controllers";

const findAllUserRouter = express.Router();

findAllUserRouter.get('/users/:page', findAllUsers)

export default findAllUserRouter;