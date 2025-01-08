// "use client"

import axios from "axios";

// import { useEffect,useState } from "react";

// export default function Profile(){
//     const [profilePicture,setProfilePicture]=useState("");

//     useEffect(()=>{
//         axios.get("http://localhost:3000/api/profile",{
//             headers:{
//                 authorization:localStorage.getItem("token")
//             }
//         }).then(res=>{
//             setProfilePicture(res.data.avatarUrl);
//         })
       
//     },[])
//     return <div>
//         {profilePicture}
//     </div>
// }

export default async function Profile(){
    const res=await axios.get("http://localhost:3000/api/profile",{
        headers:{
            authorization:localStorage.getItem("token")
        }
    })
    const profilePicture=res.data.avatarUrl;
    return <div>
        {profilePicture}
    </div>
}
