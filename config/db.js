const mongoose=require("mongoose");
const connectDb=async()=>{
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/urlShortner");
        console.log("Database  Connect  Succesfully!");
    }
    catch(error){
        console.log(error);
    }
}                         
module.exports=connectDb;

