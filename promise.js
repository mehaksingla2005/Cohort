//defining a promise is hard but calling a promise is easy

//A promise in js is an object that represents the eventual completion(or failiure) of an asynchronous operation and its resulting value



//returns an object of teh promise class
function setTimeoutPromisified(ms){
    return new Promise(resolve=>setTimeout(resolve,ms));
}
function callback(){
    console.log("3 seconds have passed");
}

setTimeoutPromisified(3000).then(callback);

setTimeout(callback,3000);


function random(){

}
function callback(){
    console.log("promise succeeded");
}
let p=new Promise(random);
console.log(p);
// p.then(callback);

function random(resolve){
    setTimeout(resolve,3000);
}
const p2=new Promise(random);

function callback(){
    console.log("promise succeeded");
}
p2.then(callback);


