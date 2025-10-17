import mongoose from "mongoose";

const connectDb = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB Connected Succefully");
    }catch(error){
        console.error("Error Connecting to MongoDB", error);
        process.exit(1);//exit with failure
    };
};

export default connectDb;