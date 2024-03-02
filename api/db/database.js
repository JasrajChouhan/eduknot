import mongoose from 'mongoose'
async function databaseConnection () {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log( "MongoDB Connected Successfully");

    } catch (error) {
        console.log(`Error: ${error.message}`)
        
    }
}

export default databaseConnection;
