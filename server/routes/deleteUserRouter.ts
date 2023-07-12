import express from "express";
import { deleteUser } from "../controllers";

const delteUserRouter = express.Router();

delteUserRouter.delete('/user/:id', deleteUser);

export default delteUserRouter;