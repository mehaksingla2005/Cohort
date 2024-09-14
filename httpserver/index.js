const express=require("express");
const app=express();

app.get("/multiply",function(req,res){
    const a=req.query.a;
    const b=req.query.b;
    res.json({
        ans:a*b
    })
})
app.get("/add",function(req,res){//add/?a=1&b=2
    const a=parseInt(req.query.a);
    const b=parseInt(req.query.b);
    res.json({
        ans:a+b
    })

})
app.get("/sub/:a/:b",function(req,res){//for the req /sub/3/1   it will return 2
    const a=parseInt(req.params.a);
    const b=parseInt(req.params.b);
    res.json({
        ans:a-b
    })

})
app.get("/divide",function(req,res){
    const a=req.query.a;
    const b=req.query.b;
    res.send(a/b);

})
app.listen(3000);