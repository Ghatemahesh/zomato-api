const MenuItems = require("../models/MenuItemsModel")

module.exports.getMenuItemsByRestID = async(req,res)=>{
    try{
        let data = req.params;
        let result = await MenuItems.find({restaurantId:data.Rest_Id});
        res.status(200).send({
            status:true,
            result,
        })

    }catch{
        res.status(500).send({
            status : false,
            message : "this is not available"
        })
       }
}