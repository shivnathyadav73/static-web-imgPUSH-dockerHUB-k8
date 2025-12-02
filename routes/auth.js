// Registration  form with mongodb by express js

//const  json  = require("express");
const User = require("../models/User");

const router = require("express").Router();
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

router.post("/register", async (req,res)=>{

    const newUser = User({

        username :  req.body.username,
        email : req.body.email,
        password : CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString(),
    });

    try
    {
          const saveUser = await newUser.save();
          //console.log(saveUser);
          res.status(201).json(saveUser);
    }
    catch(err)
    {
         res.status(500).json(err);
         //console.log(err);
    }

});


//Login page

 router.post("/login", async (req,res)=>{

      try
      {
        const user = await User.findOne({ username: req.body.username});
        !user && res.status(401).json("wrong credentils");
        const hasspass = CryptoJS.AES.decrypt(user.password, process.env.PASS_SEC);
        const Orginalpassword = hasspass.toString(CryptoJS.enc.Utf8);
        Orginalpassword !== req.body.password && res.status(401).json("wrong credentils");

        const accessToken = jwt.sign({

              id: user._id,
              isAdmin: user.isAdmin,

        }, process.env.JWT_SEC,
         { expiresIn:"3d"}
        );

        const { password, ...others} = user._doc;
        res.status(200).json({...others,accessToken});

      }
      catch(err)
      {
           //console.log(err);
          res.status(500).json(err);
      }

 });

module.exports = router;