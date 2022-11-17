const UserModel = require("../Model/UserModel");

const Login = (req, res)=>{
    
    // console.log("hitttttt");
    const body = req.body
    // console.log(body);
    const userObj = {
        email: body.email,
        password: body.password,
    }
    UserModel.findOne(userObj, (err,data) => {
        if(err){
            res.send(err)
        } else if(data){
            res.send("Login Successfully")
        }else{
            res.send("invalid email or password")
        }
    })
}

module.exports = Login