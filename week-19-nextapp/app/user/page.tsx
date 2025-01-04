// "use client"

// import axios from "axios";
// import {useEffect,useState} from "react";

// export default async function User(){
//     const [loading,setLoading]=useState(true);
//     const [data,setData]=useState({});

//     useEffect(()=>{
//         axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details")
//         .then(response=>{
//             setData(response.data);
//             setLoading(false);
//         })
//     },[]);
//     if(loading){
//         return <div>
//             Loading...
//         </div>
//     }

//     return <div> 
//         User Page
//         {data.name}
//         {data.email}
//     </div>
// }




import axios from "axios";
//this code is cleaner
//benefit of doing this is it is a server component and whatever
// async function is written will be run on the server side not on the client side.

export default async function User(){

    const response=await axios.get("http://localhost:3000/api/v1/users/details");
    await new Promise(r=>setTimeout(r,5000))
    const data=response.data;



    return <div> 
        User Page
        {data.name}
        {data.email}
    </div>
}
///frontend is written here