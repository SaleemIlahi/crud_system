
const mongoose = require('mongoose')

// connecting express to database
const connectDB = async (DATABASE_URL) => {
    try{
        OPTIONS_DB = {
            dbName: 'schooldb'
        }
        
        await mongoose.connect(DATABASE_URL,OPTIONS_DB)
        console.log('Connected Successfully')
    }catch(err) {console.log(err)}
}

module.exports = connectDB

