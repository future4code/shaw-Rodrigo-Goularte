import { Request, Response } from "express"
import UserDB from "../data/UserDB"
import { User } from "../model/User"
// import { GenerateId } from "../services/GenerateId"


export const createUser = async (req: Request, res: Response): Promise<void> => {
  let errorCode: number = 400

  try {
    
    const {firstName, lastName, participation} = req.body

    //verifica se algum campo do body está vazio
    if(!firstName || !lastName || !participation) {
      errorCode = 422
      throw new Error("Insira corretamente as informações. Nenhum campo pode ficar vazio.")
    }

    //cria um id
    // const generateId = new GenerateId()
    // const id = generateId.generate()

    //cria o user
    const userDB = new UserDB()
    const newUser = new User(firstName, lastName, participation)
    // const newUser = new User(id, firstName, lastName, participation)
    await userDB.insertUser(newUser)

    res.status(201).send({message: "Usuário criado com sucesso!"})

  } catch (error: any) {
    res.status(errorCode).send({ message: error.message } || { message: error.sqlMessage })
  }
}