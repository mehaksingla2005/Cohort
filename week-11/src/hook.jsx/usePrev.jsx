import { useEffect,useRef } from "react"

export const usePrev=(value)=>{
    const ref=useRef();
    useEffect(()=>{
        ref.current=value;
    },[value]);
    return ref.current;
}

//Property of react
//It returns first,effect gets called later