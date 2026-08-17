import mongoose from "mongoose";

const connectDB = async() =>{
    try{
        mongoose.connection.on("connected", ()=>{console.log("Database connected successfully")});

        let mongodbURI = process.env.DB_URI;
        const projectName = 'resumio';

        if(!mongodbURI){
            throw new Error('DB_URI is not set');
        }

        if(mongodbURI.endsWith('/')){
            mongodbURI = mongodbURI.slice(0, -1)
        }

        await mongoose.connect(`${mongodbURI}/${projectName}`)
        
    }catch(err){
        console.error("Error connecting to MongoDB:", err);
        
    }
}

export default connectDB;