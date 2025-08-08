const express = require("express")

const blogController = {
    test: (req, res) => {
        res.status(200).json({message: "Test routes are working"})
    },

    create: (req, res) => {
        res.status(200).json({message: "Blog created successfully"})
    }
}

module.exports = blogController