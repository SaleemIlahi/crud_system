
const express = require('express')


const app = express()
const port = process.env.PORT || '3000' // initializig port at 3000

// Server listening
app.listen(port, () => console.log(`Server Listening at http://localhost:${port}`))
