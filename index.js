let name="mehak";
const age=30;
var isStudent=true;

let favcolor="black";
const height=154;
var likepizza=true;

console.log(name);
console.log(age);
console.log(isStudent);
console.log(favcolor);
console.log(height);
console.log(likepizza);


let user1="mehak"
let user2="kavya"
let user3="manan"
console.log(user1);

let users=["mehak","kavya","manan","rishabh"];
console.log(users[1]);

function greet(name){
    return "hello " + name;
}

let ans=greet("mehak");
console.log(ans);

function sum(a,b){
    let sum=a+b;
    return sum;
}

let ans1=sum(1,2);
console.log(ans1);

function canVote(age){
    if(age>=18)return true;
    else return false;
}
console.log(canVote(15));

function EvenOrOdd(no){
    if(no%2==0){
        console.log("the no is even");
    }else{
        console.log("the no is odd");
    }
}

EvenOrOdd(20);
for(let i=0;i<4;i++){
    console.log(users[i]);
}
//initiation section
//condition section
//incrementation section
let j=0;
let totalUsers=users.length;
while(j<totalUsers){
    console.log(users[j]);
    j++;
}


//objects

let username="mehak";
let userage=19;
let usergender="female"

let user={
    name:"mehak",
    age:19,
    gender:"female"
}

console.log(user.name);
function greet3(gender){
    if(gender=="female"){
        return "Mrs. ";
    }else{
        return "Mr. ";
    }
}
function greet2(user){
    console.log("hi "+greet3(user.gender) +user.name+" your age is "+user.age);
    if(user.age>=18){
        console.log("You are legal to vote.")
    }else{
        console.log("You are not legal to vote.") 
    }
}
greet2(user);

const user5 = {
	name: "harkirat",
	age: 19,
	address: {
		city: "Delhi",
		country: "India",
		address: "1122 DLF"
	}
}

const city = user5.address.city;
const userss=[{
    name:"mehak",
    age:19,
    gender:"female"
},
{
    name:"Rishabh",
    age:20,
    gender:"male"
}
,{
    name:"kavya",
    age:14,
    gender:"male"
}]
function greaterthan18(users){
    let result=[];
   for(let i=0;i<users.length;i++){
    if(users[i].age>18) result.push(users[i]);
   }
   return result;
}
console.log(greaterthan18(userss));


function sum(a,b){
    return a+b;
}
let ans5=sum(20,30);
console.log(ans5);
//if you are passing in a string the string gets concatinated
//in the above sum function
function sum2(a,b){
    return a+b;
}
let ans6=sum2("20",30);
console.log(ans6);

function sum4(n){
    let ans=0;
    for(let i=1;i<=n;i++){
        ans+=i;
    }
    return ans;
}
console.log(sum4(4));