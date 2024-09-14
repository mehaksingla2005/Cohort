import express from "express";
import jwt from "jsonwebtoken";
const JWT_SECRET="mehak123333";
const app=express();
app.use(express.json());

const users=[];



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
app.get("/me",function(req,res){
    const token=req.headers.authorisation;
    const userdetails=jwt.verify(token,JWT_SECRET);//verify will check if its you only who has signed in agai using jwt_secret
    //if we use jwt.decode instead of verify,the security of your site will decrease as every other person will be able to decode the tokem

    const username=userdetails.username;
    const user=users.find(user=>user.username===username);
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