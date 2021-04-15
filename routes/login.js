const express = require('express')
const bcrypt = require('bcrypt')
const UserModel = require('../models/User')

const router = express.Router()

router.post('/login', async(req,res) => {

    const user = await UserModel.findOne({username:req.body.username})

    if(!user) res.send({fuser:false,fpass:false})
    else {
        const hash = await bcrypt.compare(req.body.pass,user.password)
        if(hash) res.send({fuser:true,fpass:true,logger:user})
        else res.send({fuser:true,fpass:false})
    }

})

router.post('/verify', async(req,res) => {
    const verified = await UserModel.findOne({password: req.body.password})

    if(verified) res.send(true);
    else res.end(false);
})

module.exports = router

