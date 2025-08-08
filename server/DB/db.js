const mongoose = require("mongoose")
require("dotenv").config()

const connectToDb = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URL + "Quillian")
        console.log("Connected to Database")
    } catch (error) {
        console.log("Unable to connect to Database", error)
    }
}

module.exports = connectToDb