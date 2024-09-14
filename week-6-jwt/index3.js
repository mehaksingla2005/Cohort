import express from "express";
import jwt from "jsonwebtoken";
import path from 'path';
import { fileURLToPath } from 'url';
const JWT_SECRET="mehak123333";
const app=express();
app.use(express.json());

const users=[];
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


function auth(req,res,next){
    const token=req.headers.token;
    const decodedData=jwt.verify(token,JWT_SECRET);
    if(decodedData.username){
        req.username=decodedData.username;
        next();
    }else{
        res.json({
            message:"You are not logged in"
        })
    }
}

app.get("/",function(req,res){
    res.sendFile(__dirname+ "/public/index.html");
})

app.post("/signup",function(req,res){
    const username=req.body.username;
    const password=req.body.password;
    users.push({
        username:username,
        password:password
    })
    res.send({
        message:"You have signed up."
    })
});
app.post("/signin",function(req,res){
    const username=req.body.username;
    const password=req.body.password;
    const user=users.find(user=>user.username===username&&user.password===password);
    if(user){
        const token=jwt.sign({
            username:user.username
        },JWT_SECRET);
        user.token=token;
        res.send({
            token
        })
        console.log(users);
    }
    else{
        res.status(403).send({
            message:"Invalid UserName or Password"
        })
    }
});
app.get("/me",auth,function(req,res){
    
    const user=users.find(user=>user.username===req.username);
    if(user){
        res.send({
            username:user.username
        })
    }
    else{
        res.status(401).send({
            message:"Unauthorised"
        })
    }
})
app.listen(3000);

// This can be improved further by
// 1. Adding zod for input validation
// 2. Making sure the same user cant sign up twice
// 3. Persisting data so it stays even if the process crashes