import React from "react";
import { useState } from "react";

export default function TaskList({todo,handleDelete,editTodo,index}) {
 
return (
<>


<li key={todo.id} className="w-[100%] h-[3.5rem] flex bg-white items-center place-content-around  rounded-lg">
         
   

     
<div className="w-[95%] px-[1rem]  " ><span className="text-xl pe-[10px]">{index+1}.</span><span className="text-2xl">{todo.text}</span> </div>
  <div className="flex place-content-around w-[15%]">
    <button onClick={()=>editTodo(todo.id)} className="btn" >
      <i className="fa-solid fa-pen-to-square text-green-500 fa-lg"></i>
    </button>
    <button className="" onClick={()=>handleDelete(todo.id)}>
      <i className="fa-solid fa-trash-can fa-lg text-red-600"></i>
    </button>
  </div>
  

       </li>

    </>
  );
}
