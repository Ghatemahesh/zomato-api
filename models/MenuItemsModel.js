// get the schema instance
const mongoose = require("mongoose");
const schema = mongoose.Schema;
// create the schema 
const MenuItemSchema = new schema(
        {
        "name": {type:String},
        "description":{type:String},
        "ingridients":{type:Array},
        "restaurantId": {type:String},
        "image": {type:String},
        "qty": {type:Number},
        "price": {type:Number}
      });
// create schema module
const MenuItemsModel = mongoose.model("MenuItem",
MenuItemSchema,
"MenuItems"); 
// export schema module
 module.exports = MenuItemsModel;




 