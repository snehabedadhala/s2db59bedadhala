const mongoose = require("mongoose") 
const whiskeySchema = mongoose.Schema({ 
 name: String, 
 whiskey_type: String, 
 price: Number 
}) 
 
module.exports = mongoose.model("whiskey", whiskeySchema) 