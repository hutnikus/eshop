require('dotenv').config()
const express = require('express')
const app = express()
// const mongoose = require('mongoose')

const apiRouter = require("./routes/api")

app.get('/', (req, res) => {
    res.send(`
    routes <br>
    <br>
    /api <br>
    /api/products <br>
    /api/product/:id <br>
    <br>
    /static/:name <br>
    `)
})

app.use('/api',apiRouter)

app.use('/img',express.static('./data/static'))

app.listen(3001, console.log("Server running on http://localhost:3001/"))