const UserModel = require('../Model/UserModel');

const Signup = async (req, res) => {

    // console.log('hitttttttt')
    const userData = req.body;
    const { email } = req.body;
    // console.log(userData);

    try {
        UserModel.findOne({email:email}, (err,data) => {
            if(data){
                res.send("email already exist")
            } else{
                UserModel.create(userData, (err,data)=> {
                    if(data){
                        res.send("Signup Successfully");
                    }
                    if(err){
                        res.send(err)
                    }
                })
            }
        })
    } catch (error) {
        res.send(error)
    }
}

module.exports = Signup