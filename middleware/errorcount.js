import express from "express"

const app = express();
let errorCount = 0;

// You have been given an express server which has a few endpoints.
// Your task is to
// 1. Ensure that if there is ever an exception, the end user sees a status code of 404
// 2. Maintain the errorCount variable whose value should go up every time there is an exception in any endpoint

app.get('/user', function(req, res) {
  throw new Error("User not found");
  res.status(200).json({ name: 'john' });
});

app.post('/user', function(req, res) {
  res.status(200).json({ msg: 'created dummy user' });
});

app.get('/errorCount', function(req, res) {
  res.status(200).json({ errorCount });
});
//error handling middleware
app.use(function(err,req,res,next){
    res.status(404).send({});
    errorCount+=1;
})

const PORT=3000;
app.listen(PORT,()=>{
    console.log(`server running on http://localhost:${PORT}`);
})
export default app;




// Error-handling middleware works differently from regular middleware.
// It doesn't matter where it’s defined because it will always be invoked when an error is passed down the middleware chain.
// Regular middleware executes in the order defined, but error-handling middleware is triggered only when an error occurs in the preceding middleware or route handlers.

// Regular Middleware:

// Middleware functions in Express are functions that have access to the request (req), response (res), and the next middleware function (next) in the application’s request-response cycle.
// These are usually declared using app.use(), and they execute in the order they are defined. Typically, they are used for logging, parsing JSON, etc.
// Error-Handling Middleware:
// 
// Error-handling middleware in Express is specifically defined as middleware functions that have four parameters: (err, req, res, next).
// The presence of the first parameter err is what differentiates error-handling middleware from regular middleware.
// Error-handling middleware is not called unless an error occurs during the request-response cycle.
// Even if it is defined at the end of your middleware stack, it will still catch errors from above because it’s designed to handle errors that "bubble up" from the preceding middleware and route handlers.

// Error-handling middleware should be placed after all other middleware and route handlers.
// It only gets triggered when an error is passed to it or thrown by preceding middleware/handlers.
// Placing it at the top means it’s ignored until an error is explicitly passed, which typically won’t happen since the error occurs in the route handlers defined below it.