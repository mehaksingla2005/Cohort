import express from "express";

const app = express();

// Create a middleware function that logs each incoming request’s HTTP method, URL, and timestamp to the console
function loggerMiddleware(req,res,next){
    console.log("method is"+req.method);
    console.log("route is"+req.url);
    console.log("Host is "+req.hostname);
    console.log("time is"+new Date());
    next();

}

//we also have inbuilt middleware for this and that is loggerMiddleware
//const loggerMiddleware=require("logger");
app.use(loggerMiddleware);
app.get("/sum", function(req, res) {//http://localhost:3000/sum/?a=11&b=2
    const a = req.query.a;
    const b = req.query.b;

    res.json({
        ans: a + b
    })
});

app.get("/multiply", function(req, res) {
    const a = req.query.a;
    const b = req.query.b;
    res.json({
        ans: a * b
    })
});

app.get("/divide", function(req, res) {
    const a = req.query.a;
    const b = req.query.b;
    res.json({
        ans: a / b
    })

});

app.get("/subtract", function(req, res) {
    const a = req.query.a;
    const b = req.query.b;
    res.json({
        ans: a - b
    })
});

app.listen(3000);