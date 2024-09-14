import express from "express";
import cors from "cors";

const app=express();
app.use(express.json());
app.use(cors());//if you want to allow any frontend domain to read this file then use this


// through the below you can restrict on what can send request;
// app.use(cors({
//     domains:["https://google.com"]
// }))

// //if you want to do something without cors
// import express from "express";
// import path from "path";
// import { fileURLToPath } from "url";

// const app = express();
// app.use(express.json());

// // Manually define __dirname for ES Modules
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// // Serve the index.html file on the root route
// app.get("/", function (req, res) {
//     res.sendFile(path.join(__dirname, "/public/index.html"));
// });

app.post("/sum",function(req,res){
    const a=parseInt(req.body.a);
    const b=parseInt(req.body.b);

    res.json({
        answer:a+b
    })
})
app.listen(3000);