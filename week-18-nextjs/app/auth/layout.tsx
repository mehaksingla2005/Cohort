import {NavBar }from "@/components/Navbar";
export default function AuthLayout({children}){
    return <div>
        <NavBar/>
        {children}
    </div>
}