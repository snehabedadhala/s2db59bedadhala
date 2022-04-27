const mongoose = require("mongoose") 
const whiskeySchema = mongoose.Schema({ 
 name: String, 
 whiskey_type: {
     type:String,
     minLength:1,
     maxlength:15
 },
 price: {
    type: Number,
    min: 0,
    max: 300} 
}) 
 
module.exports = mongoose.model("whiskey", whiskeySchema) 