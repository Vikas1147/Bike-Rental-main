const express =require('express');
const Router =express.Router();
const zod = require("zod");
const {User} =require("../db")
const jwt = require("jsonwebtoken");

const JWT_SECRET ="meet-token";

const signupBody =zod.object({
    username:zod.string(),
    lastname:zod.string(),
    email:zod.string(),
    password:zod.string()
})


Router.post('/signup',async(req,res)=>{
        const {success}= signupBody.safeParse(req.body)

        if(success){
            return res.status(411).json({
                message:"there is input error error"
            })
        }

        const existinguser = await User.findOne({
            username:req.body.username
        })

        if(existinguser){
            return res.status(411).json({
                message:"there is input edee error error"
            })
        }

        const user= await  User.create({
                username: req.body.username,
                lastname:req.body.lastName,
                email:req.body.email,
                password: req.body.password, 
        })
        //

        const userId =user._id;

        const token =jwt.sign({
            userId
        },JWT_SECRET);


        res.json({
            message:"your account is created",
            token:token
        })


    })





        
const signinBody = zod.object({
    username: zod.string(),
	password: zod.string()
})

Router.post('/signin', async (req, res) => {
    console.log("meet");
    const { success } = signinBody.safeParse(req.body)
    if (!success) {
        return res.status(411).json({
            message: "Email already taken / Incorrect inputs"
        })
    }

    const user = await User.findOne({
        username: req.body.username,
        password: req.body.password
    });
     if(user){

        const token =jwt.sign({
            userId:user._id
            },JWT_SECRET);

       res.json({
        message:"the user has login ",
        token:token
       }) 
       return;
     }

     res.status(411).json({
        message: "Error while logging in"
    })
})

module.exports = Router;
