import express from "express";
import userController from "../../../adaptors/controllers/userController";

const userRouter = () => {
    const router = express.Router()

    
    const controller = userController()

    router.get('/',controller.sample)

    return router
}

export default userRouter;