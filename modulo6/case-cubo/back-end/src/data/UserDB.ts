import { User } from "../model/User"
import BaseDatabase from "./BaseDatabase"

const userTableName = "user_participation"

class UserDB extends BaseDatabase {

  public insertUser = async (user: User) => {

    try {
      await BaseDatabase.connection(userTableName)
        .insert({
          id: user.getId(),
          first_name: user.getFirstName(),
          last_name: user.getLastName(),
          participation: user.getParticipation(),
        })
    } catch (error: any) {
      throw new Error(error.message || error.sqlMessage)
    }
  }

  public selectAllUsers = async (): Promise<User[]> => {
    try {
      const result = await BaseDatabase.connection(userTableName)
        .select("*")
      
      return result
    } catch (error: any) {
      throw new Error(error.message || error.sqlMessage)
    }
  }
}

export default UserDB