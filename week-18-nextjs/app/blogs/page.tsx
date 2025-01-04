import axios from "axios";
async function getBlogs(){
    const response=await axios.get("https://jsonplaceholder.typicode.com/todos/")
    return response.data;
}



export default async function Blogs(){
    const blogs=await getBlogs()
    return <div>
        Learn Recoil/Redux from the best platform on the world.
        {JSON.stringify(blogs)}
    </div>
}


interface ITodo{ 
    title:string;
    completed:boolean;
}

function Todo({title,completed}:ITodo){
    return <div>
        {title}{completed?"done!":"not done!"}
    </div>
}