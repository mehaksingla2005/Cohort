
import { useEffect,useState } from 'react'

const useFetch = (url) => {
    console.log(url);
    const [post,setPost]=useState({});
    const [loading,setLoading]=useState(true);

    async function getPosts(){
        setLoading(true);
      const response = await fetch(url);
      const json =await response.json();
      setPost(json);
      setLoading(false);
    }
    useEffect(()=>{
      getPosts();
    },[url])

    useEffect(() => {
    console.log('Effect with cleanup');
    const timer = setInterval(
      getPosts
    , 1000);
  
    return () => {
      clearInterval(timer);  // Clean up the interval on unmount
      console.log('Cleanup done');
    };
  }, []); 


  return {
    post,
    loading
  };
    
  
}

export default useFetch
