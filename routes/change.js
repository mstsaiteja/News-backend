const express = require('express')
const bcrypt = require('bcrypt');
const UserModel = require('../models/User');

const router = express.Router()

router.post('/name', async(req,res) => {
    const user = req.body;
    const result = await UserModel.updateOne({username: user.username},user);
    if(result) res.send(true);
    else res.send(false);
})

router.post('/password', async(req,res) => {
    const user = req.body;
    const data = await UserModel.findOne({username:user.username});
    const hash = await bcrypt.compare(user.password,data.password);
    if(hash){
        const hashed = await bcrypt.hash(user.newpass,10);
        user.password=hashed;
        delete user.newpass;
        const result = await UserModel.updateOne({username:user.username},{$set:{password:hashed}});
        res.send({flag:true,user:user});
    }else res.send({flag:false})
})

module.exports = router

