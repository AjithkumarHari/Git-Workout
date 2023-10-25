import express from "express";
import userController from "../../../adaptors/controllers/userController";
import { userDbRepository } from "../../../application/repositories/userDbRepository"; 
import { userRepositoryMongoDB } from "../../database/repositories/userDbRepository";

const userRouter = () => {
    const router = express.Router()
    
    const controller = userController(userDbRepository,userRepositoryMongoDB)

    router.get('/',controller.sample)
    router.get('/getuser/:id', controller.getUser)

    return router
}

export default userRouter;