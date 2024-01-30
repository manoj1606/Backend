import dotenv from "dotenv"
import ConnectionDB from "./ db/Index.js"
ConnectionDB()
dotenv.config(
    {
        path:`./env`
    }
)