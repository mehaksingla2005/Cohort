import Link from "next/link"



export default function Home(){
  return(
    <div className="text-lg w-screen h-screen flex items-center justify-center">
    Todo Application
    <br/>
    <Link href="/signin">SignIn to Todo App</Link>
    <br/>
    <Link href="/signup">Signup to Todo App</Link>
    </div>
  )
}