import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express() // just to use express as App (Reffernce)
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}

))

app.use(express.json({limit: "16kb" })) // Parse incoming JSON data from client (like fetch or axios requests)
// Sets max body size limit to 16kb


app.use(express.urlencoded({extended:true , limit: "16kb"})) // Parse URL-encoded data (like from HTML form submissions)
// extended: true => allows nested objects & special characters
// Sets max body size limit to 16kb


app.use(express.static("public"))
// Serve static files (HTML, CSS, JS, images, etc.) from the "public" folder
// Example: "/style.css" will load from "public/style.css"
app.use(cookieParser())

//routes
import userRouter from './routes/user.routes.js'


//routes declaration
app.use("api/v1/users",userRouter)

export {app}