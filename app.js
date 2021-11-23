
const express = require('express')
const connectDB = require('./db/connectdb.js')

const app = express()
const port = process.env.PORT || '3000' // initializig port at 3000
const DATABASE_URL = 'mongodb://localhost:27017'

// Database connection
connectDB(DATABASE_URL)

// Server listening
app.listen(port, () => console.log(`Server Listening at http://localhost:${port}`))
