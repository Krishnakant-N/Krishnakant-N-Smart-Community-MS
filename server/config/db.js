import mongoose from "mongoose";

const db = () => {
    mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("MongoDB connected")
    })
    .catch((error) => {
        console.log(error)
    })
}

export default db;