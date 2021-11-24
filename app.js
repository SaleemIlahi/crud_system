
const express = require('express')
const {join} = require('path')
const router = require('./routes/student_route.js')
const connectDB = require('./db/connectdb.js')

const app = express()
const port = process.env.PORT || '3000' // initializig port at 3000
const DATABASE_URL = 'mongodb://localhost:27017'

// Database connection
connectDB(DATABASE_URL)

// Static Files
app.use('/student',express.static(join(process.cwd(),'public')))

// Setting EJS Template
app.set('view engine','ejs')

// Load Routes
app.use('/student',router)

// Server listening
app.listen(port, () => console.log(`Server Listening at http://localhost:${port}`))
