import express from "express";

const app=express();

function ticketChecker(req,res,next){
    const ticket=req.query.ticket;
    if(ticket === "free"){
        next();
    }else{
        res.status(403).send("Access Denied");
    }
}

app.use(ticketChecker); //this is used when we want the middleware to be used on each function defined below it;

app.get("/ride1",function(){
    res.send("You rode the first ride!");
})
app.get("/ride2",function(){
    res.send("You rode the second ride!");
})
app.get("/ride2",function(){
    res.send("You rode the third ride!");
})


app.listen(3000);

