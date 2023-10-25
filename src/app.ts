import express, { Application } from "express";
import http from "http";
import serverConfig from "./framework/webserver/server";
import connectDB from "./framework/database/connection";
import expressConfig from "./framework/webserver/experss";
import routes from "./framework/webserver/routes"


const app:Application = express();
const server =  http.createServer(app);

// express.js configuration (middlewares etc.)
expressConfig(app);

// server configuration and start
serverConfig(server).startServer();

// connect to datbase
connectDB()

routes(app)

// Expose app
export default app;