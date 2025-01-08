
export default async function BlogPage({params}:any){
    const postId=(await params).blogid;
   
    return <div>
        hello hello
         {JSON.stringify(postId)}
        kaise ho
       
    </div>
}