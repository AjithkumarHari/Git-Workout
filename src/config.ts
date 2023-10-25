import dotenv from "dotenv"
dotenv.config();

const configKeys = {
    PORT: process.env.PORT as string,
    ORIGIN_PORT: process.env.ORIGIN_PORT as string,
    MONGODB_URL: process.env.MONGODB_URL as string
}

export default configKeys;