import React, { useState } from 'react'

export default function EditTodo({todo,editTask,handleDelete}) {
    const [value,setvalue]=useState(todo.text)
const handleEdit =(e)=>{
    e.preventDefault();
    editTask(todo.id,value)

}

  return (
    <>
    <form onSubmit={(e)=>handleEdit(e)} className="w-[100%] h-[4.5rem] md:h-[3.5rem]  flex bg-slate-300 items-center place-content-around  rounded-lg">
         
        
     
          
       <input value={value} onChange={(e)=>setvalue(e.target.value)} className="w-[95%] px-[1rem] bg-slate-300  outline-none text-3xl md:text-2xl" />
       <div className="flex place-content-around w-[15%]">
         <button type='submit' className="" >
         <i class="fa-solid fa-square-check fa-2xl  text-green-600"></i>
         </button>
         
         <button className="" onClick={()=>handleDelete(todo.id)}>
      <i className="fa-solid fa-trash-can fa-2xl text-red-600"></i>
    </button>
       </div>
       
     
            </form>
    
    
    </>
  )
}
