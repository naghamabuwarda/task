import express from "express";
import createUserRouter from "./createUser";
import findUserRouter from "./finduser";
import findAllUserRouter from "./findallUserRoute";
import delteUserRouter from "./deleteUserRouter";
import updateRouter from "./updateRouter";

const router = express.Router();

router.use('/create', createUserRouter);
router.use('/find', findUserRouter);
router.use('/findAll', findAllUserRouter);
router.use('/update', updateRouter);
router.use('/delete', delteUserRouter)

export default router;
