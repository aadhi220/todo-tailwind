import React from "react";
import { useState } from "react";

export default function TaskList({todo,handleDelete,editTodo,index,toggleComplete}) {
 
return (
<>


{ todo.completed ?
  <li key={todo.id} className="w-[100%]  h-[4.5rem] md:h-[3.5rem]  flex bg-green-700 opacity-[.7] items-center place-content-around   rounded-lg">
         
   

     
  <div className="w-[95%] px-[1rem]  " > <span className="text-3xl md:text-xl pe-[10px]">{index+1}.</span><span className="text-3xl md:text-2xl line-through" >{todo.text}</span> </div>
    <div className="flex place-content-around w-[25%]">
    <button className="text-xl" onClick={()=>toggleComplete(todo.id)}><i class="fa-solid fa-circle-check fa-2xl md:fa-lg text-green-500"></i></button>
      {/* <button onClick={()=>editTodo(todo.id)} className="btn" >
        <i className="fa-solid fa-pen-to-square text-yellow-400 fa-lg"></i>
      </button> */}
      <button className=" text-red-600" onClick={()=>handleDelete(todo.id)}>
        <i className="fa-solid fa-trash-can fa-2xl md:fa-lg "></i>
      </button>
    </div>
    
  
         </li> : 

<li key={todo.id} className="w-[100%] dark:bg-neutral-300 h-[4.5rem] md:h-[3.5rem] flex bg-white items-center place-content-around  rounded-lg">
         
   

     
<div className="w-[95%] px-[1rem]  " > <span className="text-3xl md:text-xl pe-[10px]">{index+1}.</span><span className="text-3xl md:text-2xl">{todo.text}</span> </div>
  <div className="flex place-content-around w-[35%] md:w-[35%]">
  <button className="text-xl" onClick={()=>toggleComplete(todo.id)}><i class="fa-regular fa-circle-check fa-2xl md:fa-lg text-green-500"></i></button>
    <button onClick={()=>editTodo(todo.id)} className="btn" >
      <i className="fa-solid fa-pen-to-square text-yellow-400 fa-2xl md:fa-lg"></i>
    </button>
    <button className="" onClick={()=>handleDelete(todo.id)}>
      <i className="fa-solid fa-trash-can fa-2xl md:fa-lg text-red-600"></i>
    </button>
  </div>
  

       </li>

  
}
    </>
  );
}
