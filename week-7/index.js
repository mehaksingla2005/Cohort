
const express=require("express");
const mongoose=require("mongoose");
const jwt=require("jsonwebtoken");
const JWT_SECRET="mehak123";
const {UserModel,TodoModel} =require("./db");

mongoose.connect("mongodb+srv://singlamehak2005:hZ03I4MXxswLBMYy@cluster0.pze4sai.mongodb.net/todoapp");
const app=express();
app.use(express.json());

app.post("/signup",async function(req,res){
    const email=req.body.email;
    const name=req.body.name;
    const password=req.body.password;

    

    await UserModel.create({
        name:name,
        email:email,
        password:password
    })
    res.json({
        msg:"You are logged in."
    })
})
app.post("/signin",async function(req,res){
    const email=req.body.email;
    const password=req.body.password;
    const user=await UserModel.findOne({
        email:email,
        password:password
    })
    if(user){
        const token=jwt.sign({
            id:user._id
        },JWT_SECRET);
        res.json({
            token:token
        })
    }else{
        res.status(403).json({
            msg:"Incorrect Credentials."
        })
    }
})
app.post("/todo",auth,function(req,res){
    const userId=req.userId;
    const title=req.body.title;
    TodoModel.create({
        title,
        userId
    })
    res.json({
        userId:userId
    })
})
app.get("/todos",auth,async function(req,res){
    const userId=req.userId;
    const todos=await TodoModel.find({
        userId:userId
    })
    res.json({
       todos
    })
})

function auth(req,res,next){
    const token=req.headers.token;
    const decodedData=jwt.verify(token,JWT_SECRET);
    if(decodedData){
        req.userId=decodedData.userId;
        next();
    }else{
        res.status(403).json({
            msg:"Incorrect Credentials."
        })
    }
}
app.listen(3000);