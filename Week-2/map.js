//map function
const input=[1,2,3,4,5];
function transform(i){
    return i*2;
}
const ans =input.map(transform);
console.log(ans);


//filter function
function filterlogic(n){
    if(n%2==0){
        return true;
    }else{
        return false;
    }
}

const ans2=input.filter(filterlogic);
console.log(ans2);