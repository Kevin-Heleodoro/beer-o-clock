require('dotenv').config()
const express = require('express')
const mountRoutes = require('./routes')

const PORT = process.env.PORT || 3000
const app = express()

app.use(express.json())
app.use(express.static('public'))

mountRoutes(app)

app.listen(PORT,()=>{
    console.log(`Listening on PORT: ${PORT}...`)
})