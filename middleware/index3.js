import express from "express";
const app=express();

app.use(express.json());

app.get("/sum",function(req,res){
    console.log(req.name);
    const a =parseInt(req.query.a);
    const b= parseInt(req.query.b);

    res.json({
        ans:a+b
    })
})