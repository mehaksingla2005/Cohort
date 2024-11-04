import './App.css'
import {useRecoilState,RecoilRoot, useRecoilValue, useSetRecoilState} from 'recoil';
import { todosAtomFamily } from '../../recoil-react/src/atoms2';
import { useEffect } from 'react';

function App2(){
    return <RecoilRoot>
        <UpdaterComponent/>
        <Todo id={1}/>
        <Todo id={2}/>
    </RecoilRoot>
}

function Todo({id}){
    const currentTodo=useRecoilValue(todosAtomFamily(id));
    return (
        <>
        {currentTodo.title}
        {currentTodo.description}
        </>
    )
}

function UpdaterComponent(){
    const updateTodo=useSetRecoilState(todosAtomFamily(2));
    useEffect(()=>{
        setTimeout(()=>{
            updateTodo({
                id:"2",
                title:"new Todo",
                description:"new Todo added"
            })
        },5000)
    }),[]
}
export default App2;