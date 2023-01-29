const mongoose = require("mongoose");
const schema = mongoose.Schema;

const mealTypeSchema = new schema(
       {
        "name": {type:String},
        "content":{type:String},
        "image":{type:String},
        "meal_type":{type:Number}
      }
);

const MealTypeModel = mongoose.model("MealType",mealTypeSchema,"MealTypes")

module.exports = MealTypeModel