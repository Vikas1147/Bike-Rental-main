const express =require('express');
const rootRouter =require('./routes/index');
const cors =require("cors");
const mongoose = require("mongoose")

const app = express();

app.use(
    cors({
      origin: "*",
      credentials: true,
      methods: ["GET", "POST", "PUT", "DELETE"],
    })
  );
app.use(express.json());


app.use('/api/v1',rootRouter);
app.use('/',()=>{
  console.log("hello")
})
mongoose.connect("mongodb+srv://meetnepali922:00000000@cluster0.vyfpwpj.mongodb.net/").then(()=>console.log("connectDB"))
app.listen(3000,()=>{
    console.log ("400");
});