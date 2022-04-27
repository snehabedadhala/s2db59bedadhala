const mongoose = require("mongoose") 
const whiskeySchema = mongoose.Schema({ 
 name: String, 
 whiskey_type: String,
 price: {
    type: Number,
    min: 0,
    max: 300} 
}) 
 
module.exports = mongoose.model("whiskey", whiskeySchema) 