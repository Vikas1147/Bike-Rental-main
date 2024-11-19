const express =require('express');
const userRouter =require('./user');
const stationRouter= require("./station");

const router =express.Router();

router.use('/user',userRouter);
router.use('/station',stationRouter);

module.exports =router;

