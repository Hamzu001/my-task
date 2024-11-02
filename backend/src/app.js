import "./ensureEnv.js"
import "./db/index.js"
import express from "express"
import cors from "cors"

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// import routes
import userRouter from "./routes/user.routes.js"

// declare routes
app.use("/api/v1/user", userRouter)

export default app