import { Request, Response } from "express"
import UserDB from "../data/UserDB"


export const getParticipationSum = async (req: Request, res: Response): Promise<void> => {
  let errorCode: number = 400

  try {
    const userDB: UserDB = new UserDB()
    const sum = await userDB.selectParticipationSum()

    res.status(200).send({sum: sum["sum(`participation`)"]})

  } catch (error: any) {
    res.status(errorCode).send({ message: error.message } || { message: error.sqlMessage })
  }
}