// let x: number|string=1;

// x="mehak"
// console.log(x);

function greet(firstname: string){
    console.log("hello"+firstname);
}
let x: number=1;
greet("mehak")

function sum(a: number,b:number){
    return a+b;
}

let ans=sum(1,2);
console.log(ans);


function isLegal(age:number){
    if(age>18){
        return true;
    }else{
        return false;
    }
}

console.log(isLegal(2));


function delayedCall(fn:()=>void){//void=>it has zero arguments and return nothing.
    setTimeout(fn,1000);
}

delayedCall(function(){
    console.log("hello");
    
})


function helper(fn:()=>number){//number=>it has zero arguments but return a no.
    setTimeout(fn,1000);
}

function greeting(fn:(a:string)=>void){
    setTimeout(fn,1000);
}

greeting(greet)

interface Address{
    city:string;
    country:string;
    pincode:number;
}
interface userType{
    name:string;
    age:number;
    address?:Address;
}


function greets(user:userType){
    console.log("hello"+user.name);
}

let user: userType={
    name:"mehak",
    age:19,
    address:{
        city:"Abohar",
        country:"India",
        pincode:152116
    }
}

greets(user)


function isLegaal(user: userType): boolean{
    return user.age>=18
}

//if you want to make address optional 

let user2:userType={
    name:"raman",
    age:22
}

//just add a question mark for this


interface People{
    name:string;
    age:number;
    //greet:()=>string
    isLegal():boolean;
}

//create an object called person 
// let person:People={
//     name:"mehak",
//     age:19,
//     // greet: ()=>{
//     //     return "hii"
//     // }
    
// }

//let greeeting=person.greet()
//console.log(greeeting)

class Manager implements People{
    name:string;
    age:number;

    constructor(name: string,age: number){
        this.name=name;
        this.age=age;
    }
    isLegal(){
        return this.age>18
    }
}


class God extends Manager{
    constructor(name: string, age: number){
        super(name,age)
    }
}
let userr=new Manager("John",30);
console.log(userr.age);



class Shape{
    //constructor

    area(){
        console.log("hi i am area");
    }
}
class Rectangle extends Shape{
    width:number;
    height:number;
    constructor(width: number,height: number){
        super()
        this.width=width;
        this.height=height;
    }
}


// abstract class User{
//     name: string;
//     constructor(name: string){
//         this.name=name;
//     }
//     abstract greet: ()=>string;
//     hello(){
//         console.log("hi there");
//     }
// }

// class Employee extends User{
//     name: string;
//     constructor(name: string){
//         super(name)
//         this.name=name;
//     }
//     greet(){
//         return "hi"+this.name;
//     }
// }




//Type
type User={
    name:string;
    age:number;
    
}


//intersection in type
type Employee={
    name: string;
    startDate: string;

};

type Managere={
    name:string;
    department:string;
}

type TeamLead=Employee & Manager;

let e:Employee={
    name:"mehak",
    startDate:"01-02-2004"
}
let m:Managere={
    name:"mehak",
    department:"ece"
}
// const teamLead: TeamLead = {
//     name: "harkirat",
//     startDate: "12688gyg",
//     department: "Software developer"
//   };



//Union
type GoodUser={
    name:string;
    gift:string;
}

type BadUser={
    name: string;
    ip:string;
}

type Useeer=GoodUser | BadUser;

const uswfer:Useeer={
    name:"mehak",
    ip:"andcefwfw",
    gift:"12r4t35y54yh54h"
}