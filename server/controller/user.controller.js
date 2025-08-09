const express = require("express")
const User = require("../model/user.model")
const bcrypt = require("bcrypt")

const userController = {
    test: (req, res) => {
        res.status(200).json({ message: "Test Routes are working" })
    },

    login: (req, res) => {
        res.status(200).json({ message: "Login SUccessful" })
    },

    register: async (req, res) => {
        const { name, email, password } = req.body
        if (!name || !email || !password) {
            return res.status(400).json({ message: "All fields are required" })
        }

        try {
            const isExist = await User.findOne({ email })
            if(isExist){
                return res.status(409).json({message: "User Already Exist"})
            }

            const hashpassword = await bcrypt.hash(password, 10)

            const newuser = await new User({name, email, password: hashpassword})
            await newuser.save()
            return res.status(201).json({message: "User  Registered Successfully"})
        } catch (error) {
            return res.status(500).json({message: "Internal Server Error", error: error.message})
        }
    }
}

module.exports = userController