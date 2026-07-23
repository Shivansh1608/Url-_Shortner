const express=require("express");
const connectDb=require("./config/db");
const urlRoutes=require("./routes/urlRoutes");
const app=express();

connectDb();

app.use(express.json());

app.use("/",urlRoutes);
app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})