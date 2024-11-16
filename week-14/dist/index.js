"use strict";
// let x: number|string=1;
// x="mehak"
// console.log(x);
function greet(firstname) {
    console.log("hello" + firstname);
}
let x = 1;
greet("mehak");
function sum(a, b) {
    return a + b;
}
let ans = sum(1, 2);
console.log(ans);
function isLegal(age) {
    if (age > 18) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isLegal(2));
function delayedCall(fn) {
    setTimeout(fn, 1000);
}
delayedCall(function () {
    console.log("hello");
});
function helper(fn) {
    setTimeout(fn, 1000);
}
function greeting(fn) {
    setTimeout(fn, 1000);
}
greeting(greet);
function greets(user) {
    console.log("hello" + user.name);
}
let user = {
    name: "mehak",
    age: 19,
    address: {
        city: "Abohar",
        country: "India",
        pincode: 152116
    }
};
greets(user);
function isLegaal(user) {
    return user.age >= 18;
}
//if you want to make address optional 
let user2 = {
    name: "raman",
    age: 22
};
//create an object called person 
let person = {
    name: "mehak",
    age: 19,
    greet: () => {
        return "hii";
    }
};
let greeeting = person.greet();
console.log(greeeting);
