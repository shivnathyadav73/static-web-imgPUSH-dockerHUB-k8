const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({

       title:{ type:String, required:true, unique:true},
       categories:{type:String, required:true, unique:true},
       name :{ type:String, require:true, unique:true},
       image:{ type:String, require:true},
       description:{type:String, required:true, unique:true},
       price:{ type:Number},
       color:{ type:String},
       size:{type:String}


}, 
{
     timestamps:true
}
);

module.exports = new mongoose.model("Product",ProductSchema);