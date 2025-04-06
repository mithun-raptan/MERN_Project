import dotenv from "dotenv"
import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
dotenv.config({path:'./env'})

const connectDB  = async()=>{
    try {
        let connectInstance =  await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`mongoDB connected!! DB Host ${connectInstance.connection.host}`)

        
    } catch (error) {
        console.log("mongodb connection error ", error);
        process.exit(1);
    }
}

export default connectDB;
