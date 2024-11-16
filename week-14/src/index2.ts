//interfaces vs types
//Create two types called User and Admin
//Create a function that takes either a user or an admin as an inout ,and returns a string saying "welcoms,[name]".


interface Admin{
    name: string;
    permission:string;
}

interface Usser{
    name:string;
    lastName:string;
    age:number;
}

type UserOrAdmin = Usser|Admin;

function greeet(user:UserOrAdmin){
    console.log(user.name);
}


//Array
function getMax(nums:number[]){
    let maxValue=-1000000;

    for(let i=0;i<nums.length;i++){
       if(maxValue>nums[i]){
        maxValue=nums[i]
       } 
    }
}