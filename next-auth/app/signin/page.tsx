
"use client"

import axios from "axios";

export default function(){
    return <div>
        Sign in Page<br/>
        <input type="text" />
        <input type="text" />

        <button onClick={async()=>{
            const res=await axios.post("http://localhost:3000/api/signin",{
                username:"fewg",
                password:"rereger"
            })
            //store the token in localStorage

            localStorage.setItem("token",res.data.token)
        }}>Sign in</button>
    </div>
}
