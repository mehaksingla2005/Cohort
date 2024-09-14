const express=require("express");
const app=express();
app.use(express.json());

const users=[];
function generateToken(){
    let options=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','1','2','3','4','5','6','7','8','9','0'];
    let token="";
    for(let i=0;i<32;i++){
        token+=options[Math.floor(Math.random()*options.length)];
    }
    return token;
}
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
        const token=generateToken();
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
    const user=users.find(user=>user.token===token);
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