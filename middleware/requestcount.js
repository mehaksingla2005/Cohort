import express from "express";

const app = express();
let requestCount = 0;

// You have been given an express server which has a few endpoints.
// Your task is to create a global middleware (app.use) which will
// maintain a count of the number of requests made to the server in the global
// requestCount variable

//Create a middleware that counts total number of requests sent to a server. Also create an endpoint that exposes it
app.use(function(req,res,next){
  requestCount++;
  next();
})
app.get('/user', function(req, res) {
  res.status(200).json({ name: 'john' });
});

app.post('/user', function(req, res) {
  res.status(200).json({ msg: 'created dummy user' });
});

app.get('/requestCount', function(req, res) {
  res.status(200).json({ requestCount });
});

const PORT=3000;
app.listen(PORT,()=>{
  console.log(`server is running on https://localhost:${PORT}`)
})

export default app;