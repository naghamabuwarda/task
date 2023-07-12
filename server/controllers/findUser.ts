import { Request, Response } from "express";
import User from "../models";


const findUser = async (req: Request, res: Response) => {
    const id = req.params.id;
    console.log(id);
    const user = await User.findByPk(id);
    console.log(user);

    if (!user) res.status(404).send('user not found')
    res.status(200).send(user);
}

export default findUser;