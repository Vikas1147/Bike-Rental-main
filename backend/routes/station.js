const express =require('express');
const Router =express.Router();
const {Book} =require("../db")



Router.post('/:id',async(req,res)=>{
    console.log("hey there");
 
            const stationBook = await Book.create({
            stationId:req.params.id 
        })
            res.json({
                message:"staiton booked for ",
                station:stationBook

            })
            console.log("hey there");
       
      
});

module.exports = Router;
