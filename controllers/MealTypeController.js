const MealList = require('../models/mealTypeModel')
module.exports.getMealDetails =async (req,res)=>{
    const mealDetails = await MealList.find()
    res.status(200).send({
        status:true,
        mealDetails
    })
}