const mongoose = require('mongoose');

const connectDb = async () => {
    try {
        const connect = await mongoose.connect(process.env.CONNNECTION_STRING)
        console.log("Connected to MongoDB", connect.connection.host, connect.connection.name)
    } catch (error) {
        console.log("error:", error)
        process.exit(1)
    }
}


module.exports = connectDb