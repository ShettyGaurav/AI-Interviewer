import express from "express"
import cors from "cors"
import dotenv from "dotenv"

const app = express()
app.use(express.json())
app.use(cors())

app.get("/",()=>{
    console.log("API is running")
})

export default app
