const express = require("express")

const userController = {
    test: (req, res) => {
        res.status(200).json({message: "Test Routes are working"})
    },

    login: (req, res) => {
        res.status(200).json({message: "Login SUccessful"})
    },

    register: (req, res) => {
        res.status(200).json({message: "User Register Successfully"})
    }
}

module.exports = userController