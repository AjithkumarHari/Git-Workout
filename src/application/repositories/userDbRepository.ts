import { UserRepositoryMongoDB } from "../../framework/database/repositories/userDbRepository";

export const userDbRepository = (repository : ReturnType<UserRepositoryMongoDB>) => {

    const getUser = async (id:string) => {
        await repository.getUser(id);
    }

    const addUser = async (user :{name : string, email : string, password : string}) => {
        await repository.addUser(user);
    }

    return {
        getUser,
        addUser
    }
}

export type UserDbInterface = typeof userDbRepository;