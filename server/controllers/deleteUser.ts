import { Request, Response } from "express";
import User from "../models";

const deleteUser = async (req: Request, res: Response) => {
    const id = req.params.id;
    const user: any = User.findByPk(id);
    if (!user) res.status(404).send('user not found')
    await User.destroy({ where: { id: id } })
    res.status(200).send('deleted successfully')
}

export default deleteUser;