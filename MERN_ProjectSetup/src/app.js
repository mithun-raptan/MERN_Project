import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser";

const app = express();

app.use(cors({
    origin : process.env.CORS_ORIGIN,
    credentials : true
}))

//to handle json data (from data)
app.use(express.json({limit : "16kb"}))

//to handle URL data
app.use(express.urlencoded({extended : true, limit : "16kb"}))

//to store pdf, file, images, icon, favicon in our local server
app.use(express.static("public"))

//to acces users cookie from our server
app.use(cookieParser())

export default app