import express from "express";
import {PrismaClient} from "@prisma/client";

const app=express();
const client=new PrismaClient()

app.get("/users",async(req,res)=>{
    const users=await client.user.findMany();
    res.json({
        users
    })
})
app.get("/todos/:id",async(req,res)=>{
    const id=req.params.id ;
    const users=await client.user.findFirst({
        where:{
            id:parseInt(id)
        },
        select:{
            todos:true
        }
    });
    res.json({
        users
    })
})
app.listen(3000);



// async function createUser(){
// //    await client.user.create({
// //         data:{
// //             username:"mehak",
// //             password:"2141513",
// //             age:19,
// //             city:"abohar"
// //         }
// //     })
//     // await client.user.update({
//     //     where:{
//     //         id:1
//     //     },
//     //     data:{
//     //         username:"mehaksingla"
//     //     }
//     // })
//     const user=await client.user.findFirst({
//         where:{
//             id:1
//         },
//         include:{
//             todos:true
//         }
//     })
//     console.log(user);
// }
// createUser()
