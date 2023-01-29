const locationlist = require("../models/locationModel");

module.exports.home = (req,res)=>{
    res.status(200).send({
        status:true
    });
};
module.exports.LocationsDetails =async (req,res)=>{
    let result = await locationlist.find();
    try{
        res.status(200).send({
            status:true,
            result
        });
    } catch{
        res.status(500).send({
            status : false,
            Error,
            message : "this is not available"
        });
    };
};