const express = require("express");
const app = express();
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const dotenv = require("dotenv");
dotenv.config();

//connection database like mongoodb or mongoose

const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URL)
.then(()=>{

      console.log("Mongoose-Database Connection is Sucessfully!")
})
.catch((err)=>{
     console.log(err)
    });
app.use(express.json());
app.use("/api/user",userRoute);    
app.use("/api/auth",authRoute);    
//dummy api testing 

/*app.get("/api/students",()=>{

     console.log("thuis is test case for dummy api 3321");

});*/
 app.listen(process.env.PORT||3100,()=>{

       console.log("Nodejs setup is sucessfully working now!");

 });