// const fs=require("fs")
// //utf-8 it helps in encoding
// const contents=fs.readFileSync("a.txt","utf-8");//synchronously
// console.log(contents);
// // console.log(fs);
// //here fs is kind of object 
// //which has a key readFileSync
// const data=fs.readFile("b.txt","utf-8");//asynchronously
// console.log(data);



//asynchronous code
//fs.readFile("a.txt","utf-8",function(err,contents))

const fs=require("fs");
function print(err,data){
    if(err){
        console.log("file not found");
    }
    console.log(err);
    console.log(data);
}

fs.readFile("a.txt","utf-8",print);
fs.readFile("bbb.txt","utf-8",print);
console.log("Done!");



