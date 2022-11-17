const UserModel = require("../Model/UserModel");
const Mailer = require('../Services/Mailer');

const ForgetPass = (req, res) => {

    const email = req.body.email;
    if(email){
        UserModel.findOne(req.body, (err, data)=>{
            if(data){
                res.send(data);
                Mailer(data)
            }
            else{
                console.log("Email Not Exist");
            }
        })
    }
}


module.exports = ForgetPass