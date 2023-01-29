const UserModel = require("../models/UserModel");

// login

module.exports.Login =async (req, res) => {
  let data = req.body
  try{
  let result = await UserModel.findOne({email:data.email,password:data.password})
if(result == null){
  res.status(200).send({
    status: false,
    messege:"wrong password or username"
  });
}else{
  res.status(200).send({
    status: true,
    messege:"Login successfully..!"
  });
}
  }catch{
    res.status(500).send({
        status : false,
        message : "this is not available"
    })
   }
};


// signup

module.exports.SignUp = async (req, res) => {
  let data = req.body;
try{
  let newUser = new UserModel({
    full_name: data.full_name,
    email: data.email,
    mobile: data.mobile,
    password: data.password,
  });

  const result = await newUser.save();

  res.status(200).send({
    status: true,
    result,
  });
}catch{
  res.status(500).send({
      status : false,
      message : "this is not available"
  })
 }
};

