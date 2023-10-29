import React from 'react'
import AddTask from '../components/AddTask'
import TaskList from '../components/TaskList'
import { useState ,useEffect} from 'react';
import EditTodo from '../components/EditTodo';
import { v4 as uuidv4 } from "uuid";
export default function Home() {

  const [todos,setTodos]=useState(()=>{
    const savedTodos =localStorage.getItem("todos");
    if(savedTodos){
      return JSON.parse(savedTodos);
      
    }else {
      return [];
    }
  });

  const [task, setTask] = useState("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  const AddTasks = (e) => {
    e.preventDefault();
    if (task !== "") {
      setTodos([
        ...todos,
        {
          id:uuidv4() ,
          text: task.trim(),
          completed:false,
          isEditing:false
        },
      ]);
    }
    setTask("");
  };

  function handleDelete(id) {
    const removeItem = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(removeItem);
  }

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const editTask = (id,editedText) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo,text:editedText, isEditing: !todo.isEditing } : todo
      )
    );
  };



  
  return (
    <div className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 min-h-[100vh] flex  place-content-center flex-col gap-[2rem]  items-center ' >
    
    <h1 className='bg-white px-[2rem] py-[1rem] rounded-[5rem] text-red-600 text-4xl  font-[600] tracking-widest '>TODO LIST</h1>
    
    <AddTask  task={task} setTask={setTask} AddTasks=
    {AddTasks}  />

<div className="w-[40rem]  flex items-center place-content-between pe-[1rem]">
        <h2 className="text-2xl w-[fit-content] font-600 bg-white px-[2rem] py-[1rem] rounded-[5rem]">
          Tasks :
        </h2>

        <h2>
          <i className="fa-solid fa-trash-can fa-2xl "></i>
        </h2>
        </div>  
<ul className="w-[40rem] flex flex-col gap-[4px] ">
       {/* list map here */}
            {/* list items */}

            {todos.map((todo,index)=>(  

todo.isEditing ? 
<EditTodo todo={todo} handleDelete={handleDelete} editTask={editTask}/>
: <TaskList index={index}  todo={todo} setTodos={setTodos} handleDelete={handleDelete} editTodo={editTodo} />

))  }
           

      
        
    
          
</ul>
    
    
    
    </div>
  )
}
