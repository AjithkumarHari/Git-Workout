import { Request, Response } from "express";
import { UserDbInterface } from "../../application/repositories/userDbRepository";
import { UserRepositoryMongoDB } from "../../framework/database/repositories/userDbRepository";
import { findById } from "../../application/userCase/user/findById";

const userController = ( 
    userDbRepository : UserDbInterface,
    userDbRepositoryImp : UserRepositoryMongoDB
    ) => {
        
    const DbRepositoryUser = userDbRepository(userDbRepositoryImp())

    const getUser = async (req : Request, res : Response) =>{
        const userId = req.params.userId
        const user = findById(userId, DbRepositoryUser)
        res.send(user)
    }

    const addUser = async (req : Request , res : Response) => {
        const userData = req.body
        
    }

    const sample = (req: Request,res: Response) => {
        res.send("Success")
    };
    


    return {
        sample,
        getUser
    };
};

export default userController;