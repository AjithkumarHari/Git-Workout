 
import { UserDbInterface } from "../../repositories/userDbRepository";

export const findById =async (userId:string,dbRepositoryUser:ReturnType<UserDbInterface>) => {
   const user = await dbRepositoryUser.getUser(userId)
   return user
}