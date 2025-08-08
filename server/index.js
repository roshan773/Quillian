const express = require("express")
const connectToDb = require("./DB/db")
const Blogrouter = require("./router/blog.routes")
const UserRouter = require("./router/user.routes")
require("dotenv").config()
const app = express()
app.use(express.json())

app.use("/api/blog/", Blogrouter)
app.use("/api/user/", UserRouter)





app.listen(process.env.PORT, async() => {
    try {
        await connectToDb()
        console.log("Server is running")
    } catch (error) {
        console.log("Unable to connect to db and server", error)
    }
})