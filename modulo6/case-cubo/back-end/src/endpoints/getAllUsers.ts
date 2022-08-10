import { Request, Response } from "express"
import UserDB from "../data/UserDB"
import { User } from "../model/User"


export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
  let errorCode: number = 400

  try {
    const userDB: UserDB = new UserDB()
    const users: User[] = await userDB.selectAllUsers()

    if(!users.length) {
      errorCode = 404
      throw new Error("Nenhum usuário encontrado")
    }

    res.status(201).send(users)

  } catch (error: any) {
    res.status(errorCode).send({ message: error.message } || { message: error.sqlMessage })
  }
}