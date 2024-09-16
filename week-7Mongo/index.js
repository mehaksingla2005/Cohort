const bcrypt= require("bcrypt");
const express = require("express");
const { UserModel, TodoModel } = require("./db");
const { auth, JWT_SECRET } = require("./auth");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const {z}=require("zod");

mongoose.connect("mongodb+srv://singlamehak2005:hZ03I4MXxswLBMYy@cluster0.pze4sai.mongodb.net/todoapp")

const app = express();
app.use(express.json());

app.post("/signup", async function(req, res) {

    //first step of zod validation
    const requiredBody=z.object({
        email:z.string().min(3).max(100).email,
        name:z.string().min(3).max(100),
        password:z.string().min(8).max(100)
    })

    //second step of zod validation
    // const parsedData=requiredBody.parse(req.body);
    const parsedDataWithSuccess=requiredBody.safeParse(req.body);

    if(!parsedDataWithSuccess.success){
        res.json({
            message:"Incorrect format.",
            error:parsedDataWithSuccess.error
        })
        return
    }

    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    
 const hashedPassword=await bcrypt.hash(password,5);
    console.log(hashedPassword);

    await UserModel.create({
        email: email,
        password: hashedPassword,
        name: name
    });
   

    res.json({
        message: "You are signed up"
    })
    
});


app.post("/signin", async function(req, res) {
    const email = req.body.email;
    const password = req.body.password;

    const response = await UserModel.findOne({
        email: email,
       
    });
    if(!response){
        res.status(403).json({
            message:"User doesnot exist in our db."
        })
        return
    }
    const passwordMatch=await bcrypt.compare(password,response.password);

    if (passwordMatch) {
        const token = jwt.sign({
            id: response._id.toString()
        }, JWT_SECRET);

        res.json({
            token
        })
    } else {
        res.status(403).json({
            message: "Incorrect creds"
        })
    }
});


app.post("/todo", auth, async function(req, res) {
    const userId = req.userId;
    const title = req.body.title;
    const done = req.body.done;

    await TodoModel.create({
        userId,
        title,
        done
    });

    res.json({
        message: "Todo created"
    })
});


app.get("/todos", auth, async function(req, res) {
    const userId = req.userId;

    const todos = await TodoModel.find({
        userId
    });

    res.json({
        todos
    })
});

app.listen(3000);



//USING TRY CATCH VALA CODE

// const bcrypt= require("bcrypt");
// const express = require("express");
// const { UserModel, TodoModel } = require("./db");
// const { auth, JWT_SECRET } = require("./auth");
// const jwt = require("jsonwebtoken");
// const mongoose = require("mongoose");

// mongoose.connect("mongodb+srv://singlamehak2005:hZ03I4MXxswLBMYy@cluster0.pze4sai.mongodb.net/todoapp")

// const app = express();
// app.use(express.json());

// app.post("/signup", async function(req, res) {
//     const email = req.body.email;
//     const password = req.body.password;
//     const name = req.body.name;

//     let errorthrown=false;
//     try{const hashedPassword=await bcrypt.hash(password,5);
//     console.log(hashedPassword);

//     await UserModel.create({
//         email: email,
//         password: hashedPassword,
//         name: name
//     });}
//     catch(e){
//         res.json({
//             msg:"user already exists."
//         })
//         errorthrown=true;
//     }
//     if(!errorthrown){
//         res.json({
//             message: "You are signed up"
//         })
//     }
// });


// app.post("/signin", async function(req, res) {
//     const email = req.body.email;
//     const password = req.body.password;

//     const response = await UserModel.findOne({
//         email: email,
       
//     });
//     if(!response){
//         res.status(403).json({
//             message:"User doesnot exist in our db."
//         })
//         return
//     }
//     const passwordMatch=await bcrypt.compare(password,response.password);

//     if (passwordMatch) {
//         const token = jwt.sign({
//             id: response._id.toString()
//         }, JWT_SECRET);

//         res.json({
//             token
//         })
//     } else {
//         res.status(403).json({
//             message: "Incorrect creds"
//         })
//     }
// });


// app.post("/todo", auth, async function(req, res) {
//     const userId = req.userId;
//     const title = req.body.title;
//     const done = req.body.done;

//     await TodoModel.create({
//         userId,
//         title,
//         done
//     });

//     res.json({
//         message: "Todo created"
//     })
// });


// app.get("/todos", auth, async function(req, res) {
//     const userId = req.userId;

//     const todos = await TodoModel.find({
//         userId
//     });

//     res.json({
//         todos
//     })
// });

// app.listen(3000);