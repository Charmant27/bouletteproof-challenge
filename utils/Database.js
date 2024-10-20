import mongoose from "mongoose";

let isConnected = false;

export const connectDB = async() => {
    mongoose.set('strictQuery', true)

    mongoose.connection.once('connected', () => {
        console.log('MongoDB was successfully connected')
        isConnected = true
    })

    try {
        await mongoose.connect(process.env.MONGO_URI)
    } catch (error) {
        console.log(`An error occurred while connecting to DB: ${error.message}`)
    }
}
