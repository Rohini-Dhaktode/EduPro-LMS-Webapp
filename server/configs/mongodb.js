import mongoose from "mongoose";

//connect to mongoDB database

const connectDB = async () => {
    mongoose.connection.on('connected' , () => console.log('Database Connected'))

    await mongoose.connect(`${process.env.MONGODB_URI}/EduPro-LMS`)
}

export default connectDB