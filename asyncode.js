console.log("hi");
function timeout(){
    console.log("Click the button!");
}
setTimeout(timeout,5000);//io sensitive
console.log("welcome to loupe");
let c=0;
for(let i=0;i<10000000;i++){//cpu sensitive
    c=c+1;
}
console.log(c);
console.log("Expensive Operation done");