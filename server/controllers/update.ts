import { Request, Response } from "express";
import User from "../models";

const updateUser = async (req: Request, res: Response) => {
    console.log("heeelllllpppppp");

    const { id } = req.params;
    const { name, description, imgUrl } = req.body;

    const user = User.findByPk(id);
    if (!user) res.status(404).send('user not found');
    await User.update({
        name, description, imgUrl
    }, {
        where: {
            id: id
        }
    })
    res.status(200).send('updates succeessfully');
}

export default updateUser;