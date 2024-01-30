import dotenv from "dotenv"
import ConnectionDB from "./db/index.js"
ConnectionDB()
dotenv.config(
    {
        path:`./env`
    }
)