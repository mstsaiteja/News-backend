const express = require('express')
const bcrypt = require('bcrypt');
const UserModel = require('../models/User');

const router = express.Router()

router.post('/signup', async(req,res) => {

    const user = await UserModel.findOne({username:req.body.username})

    if(user) res.send(true)
    else {
        const hash = await bcrypt.hash(req.body.pass,10)
        const NewUser = new UserModel({
            name: req.body.name,
            username: req.body.username,
            password: hash
        })
        NewUser.save((err)=>{
            if(err) console.log(err)
            else console.log(NewUser)
            res.send(false)
        })
    }


})

module.exports = router

