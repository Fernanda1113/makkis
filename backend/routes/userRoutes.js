const { models } = require("mongoose");
const { default: User } = require("./userModel.js");

const router = require("express").Router();


//create user - register
router.post("/", async(req, res) => {
    try{
        
        const {name, email, password, image} = req.body;
        console.log(req.body);
        const user = await User.create({name, email, password, image});
        res.status(201).json(user);
    }catch(error) {
        console.log("Error!");
    }
});

//login user
router.post("/", async(req, res) => {
    try{
        
        const {email, password} = req.body;
        console.log(req.body);
        const user = await User.findByCredentials({email, password});
        user.status = "Online";
        await user.save();
        res.status(200).json(user);
    }catch(error) {
        console.log("Error!");
    }
});

module.exports = router;