import express from "express";
import { updateUser } from "../controllers";

const updateRouter = express.Router();

updateRouter.put('/:id', updateUser);

export default updateRouter;