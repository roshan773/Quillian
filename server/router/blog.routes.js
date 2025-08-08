const express = require("express")
const blogController = require("../controller/blog.controller")
const Blogrouter = express.Router()

Blogrouter.get("/test", blogController.test)
Blogrouter.post("/createpost", blogController.create)



module.exports = Blogrouter