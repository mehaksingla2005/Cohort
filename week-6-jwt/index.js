import express from "express";
import jwt from "jsonwebtoken"
const app=express()
const JWT_SECRET="mehak123"

const users=[]

app.use(express.json())
app.post("/signup",function(req,res){
    const username=req.body.username;
    const password=req.body.password;
    users.push({
        username:username,
        password:password
    })
    res.json({
        message:"you are signed in"
    })
})

app.post("/signin",function(req,res){
    const username=req.body.username;
    const password=req.body.password;

    let foundUser=null;
    for(let i=0;i<users.length;i++){
        if(users[i].username===username && users[i].password===password){
            foundUser=users[i];
        }
    }
   
    if(!foundUser){
        res.json({
            message:"Credentials incorrect."
        })
        return
    }
    else{
        const token = jwt.sign({
            username
        }, JWT_SECRET);

        
        res.json({
            token:token
        })
       
    }
})

function auth(req,res,next){
    const token=req.headers.token;

    const decodedData=jwt.verify(token,JWT_SECRET);
    if(decodedData.username){
        req.username=decodedData.username;
        next()}
        else{
            res.json({
                message:"you are not logged in."
            })
        }
}

app.get("/me",auth,function(req,res){
   
        let foundUser=NULL;
        for(let i=0;i<users.length;i++){
            if(users[i].username===req.username){
                foundUser=users[i];
            }
        }

        res.json({
            username:foundUser.username,
            password:foundUser.password
        })
    }
)
app.listen(3000)