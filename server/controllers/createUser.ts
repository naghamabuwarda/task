import { Request, Response } from "express";
import User from "../models";
import multer from "multer";


const createUser = async (req: Request, res: Response) => {
    const { name, description, imgUrl } = req.body;
    console.log(name, description, imgUrl)
    const user = await User.create({
        name, description, imgUrl
    }, {
        returning: true
    }
    )
    return res.status(201).send('added sucessfully')
}

export default createUser;