const express = require("express")
const userController = require("../controller/user.controller")
const UserRouter = express.Router()

UserRouter.get("/test", userController.test)
UserRouter.post("/login", userController.login)
UserRouter.post("/register", userController.register)


module.exports = UserRouter