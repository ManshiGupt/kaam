import React, { useEffect, useState } from 'react'
import { getTheTodo, postTheTodo } from '../../../services/toDoListApi'

const ToDoList = () => {
    const [data,setData]= useState([]);
    const fetchData=async()=>{
            const resp= await getTheTodo();
            setData(resp.todos);
            console.log(resp.todos)
    }

    useEffect(()=>{
        fetchData();

    },[])
           
    const handle=(form)=>{
        // alert("KK")
        postTheTodo(form)
    }
  return (
    <div>toDoList
        <form typeof=''>
        <input value={todo} onChange={(e)=>setTodo(e.target.value)} placeholder='todo'/>
        <input value={completed} onChange={(e)=>setCompleted(e.target.value)} placeholder='completed'/>
        <input value={userId} onChange={(e)=>setUserId(e.target.value)} placeholder='userId'/>
        <button className='border p-4 bg-slate-500' onClick={()=>handle()}>create new</button>
        </form>
       
        
        <ul>
            {data.map((data,i)=>(
                <div key={i}>
                    {data.todo}
                </div>
            ))}
        </ul>
    </div>
  )
}

export default ToDoList