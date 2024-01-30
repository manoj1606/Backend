import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
const ConnectionDB= async()=>{
    try {
       const connectionInstance= await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       console.log(`\n Connected Sucessfully    host: ",${connectionInstance}`);
    } catch (error) {
        console.log("Mongooses Connection error :" ,error);
        process.exit(1);
    }
}
export default ConnectionDB