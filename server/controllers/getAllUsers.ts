import { Request, Response } from "express";
import User from "../models";

const findAllUsers = async (req: Request, res: Response) => {
    const page = req.params.page;
    console.log(page);

    const users = await User.findAll({
        limit: 3,
        offset: 3 * Number(page)
    });
    if (!users) res.status(404).send('there is nothing to show')
    res.status(200).send(users);
}

export default findAllUsers;