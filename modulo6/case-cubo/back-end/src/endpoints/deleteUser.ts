import { Request, Response } from "express"
import UserDB from "../data/UserDB"

export const deleteUser = async (req: Request, res: Response): Promise<void> => {
  let errorCode: number = 400

  try {
    const id: string = req.params.id

    const userDB = new UserDB()
    await userDB.deleteUserById(id)

    res.status(200).send({message: "Usuário deletado com sucesso!"})

  } catch (error: any) {
    res.status(errorCode).send({ message: error.message } || { message: error.sqlMessage })
  }
}