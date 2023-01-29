// get the schema instance
const mongoose = require("mongoose");
const schema = mongoose.Schema;
// create the schema 
const locationSchema = new schema({
        "name": {type:String},
        "city_id":{type:Number},
        "location_id":{type:Number},
        "city": {type:String},
        "country_name": {type:String}
});
// create schema module
const LocationModel = mongoose.model("location",
locationSchema,
"locations"); 
// export schema module
 module.exports = LocationModel;