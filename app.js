
const express = require('express')
const {join} = require('path')
const router = require('./routes/student_route.js')
const connectDB = require('./db/connectdb.js')

const app = express()
const port = process.env.PORT || '3000' // initializig port at 3000
const DATABASE_URL = 'mongodb://localhost:27017'

// Database connection
connectDB(DATABASE_URL)

// Middleware 
app.use(express.urlencoded({extended:false}))

// Static Files
app.use('/',express.static(join(process.cwd(),'public')))
app.use('/update',express.static(join(process.cwd(),'public')))

// Setting EJS Template
app.set('view engine','ejs')

// Load Routes
app.use('/',router)

// Server listening
app.listen(port, () => console.log(`Server Listening at http://localhost:${port}`))