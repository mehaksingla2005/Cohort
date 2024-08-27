const express=require("express");
const app=express();
//get-user can check how many kidneys they have and their health
//post-user can add a new kidney
//put-user can replace a kidney make it healthy
//delete-user can remove a kidney
app.use(express.json());
var users=[{
    name:"Mehak",
    kidneys:[{
        healthy:false
    },
    {
        healthy:true
    }]
    }]

app.get("/",function(req,res){
    const kidney=users[0].kidneys;
    const kidneyCount=kidney.length;
    const healthyKidneysCount = kidney.filter(kidny => kidny.healthy).length;
    const unhealthyKidneysCount=kidneyCount-healthyKidneysCount;
    res.json({
        kidneyCount,
        healthyKidneysCount,
        unhealthyKidneysCount
    })
})
app.post("/",function(req,res){
    const isHealthy=req.body.isHealthy;
    users[0].kidneys.push({
        healthy:isHealthy
    })
    res.json({
        msg:"Done!"
    })
})
app.put("/",function(req,res){
    for(let i=0;i<users[0].kidneys.length;i++){
        users[0].kidneys[i].healthy=true;
    }
    res.json({});
})
app.delete("/",function(req,res){
    
   if(isThereAtleastOneUnhealthyKidney()){
    const newKidneys=[];
    for(let i=0;i<users[0].kidneys.length;i++){
        if(users[0].kidneys[i].healthy){
            newKidneys.push({
                healthy:true
            })
        }
    }
    users[0].kidneys=newKidneys;
    res.json({msg:"done"});
   }else{
    res.status(411).json({
        msg:"You have no bad kidneys."
    });
   }
    
})
function isThereAtleastOneUnhealthyKidney(){
    let atleastOneUnhealthyKidney=false;
    for(let i=0;i<users[0].kidneys.length;i++){
        if(!users[0].kidneys[i].healthy){
            atleastOneUnhealthyKidney=true;
        }
    }
    return atleastOneUnhealthyKidney;
}
app.listen(3000);