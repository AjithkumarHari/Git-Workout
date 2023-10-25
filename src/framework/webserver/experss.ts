import express ,{ Application } from "express";
import morgan from "morgan";
import cookeiParser from "cookie-parser";
import cors from "cors";
import configKeys from "../../config";

const expressConfig = (app : Application) => {
    app.use(cors({origin: configKeys.ORIGIN_PORT}));
    app.use(express.json());
    app.use(express.urlencoded({ extended: true}));
    app.use(cookeiParser());
}

export default expressConfig