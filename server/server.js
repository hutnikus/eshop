require('dotenv').config()
const express = require('express')
const app = express()
// const mongoose = require('mongoose')

const apiRouter = require("./routes/api")

app.get('/', (req, res) => {
    res.send('Pee Pee Poo Poo')
})

app.use('/api',apiRouter)


app.listen(3000, console.log("Server running on http://localhost:3000/"))