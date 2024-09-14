function sum(a,b){
    return a+b;
}
function multiply(a,b){
    return a*b;
}
function subtract(a,b){
    return a-b;
}
console.log(sum(2,1));


//functional arguments ->passing a function to another function as an argument
function doOperations(a,b,op){
    return op(a,b);
}
console.log(doOperations(1,2,multiply));