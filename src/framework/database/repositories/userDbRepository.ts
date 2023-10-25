import { User } from "../../../types/User";
import USER from "../models/userModel";

export const userRepositoryMongoDB = () => {
    const getUser = async (id : string) =>
        await USER.findById(id);
    
    const addUser = async (user : User) => {
        return await USER.create(user)
    }
    return {
        getUser,
        addUser
    }
    
}

export type UserRepositoryMongoDB = typeof userRepositoryMongoDB;