import React from "react";
import AddTask from "../components/AddTask";
import TaskList from "../components/TaskList";
import { useState, useEffect } from "react";
import EditTodo from "../components/EditTodo";
import { v4 as uuidv4 } from "uuid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Home({darkMode,setDarkMode}) {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
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
          id: uuidv4(),
          text: task.trim(),
          completed: false,
          isEditing: false,
        },
      ]);
      toast.success("task Added");
    } else {
      toast.error("please fill the field");
    }
    setTask("");
  };

  function handleDelete(id) {
    const removeItem = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(removeItem);
    toast.warning("Task deleted")
  }
  const toggleComplete = (id) => {
    setTodos(
      todos?.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  const editTodo = (id) => {
    setTodos(
      todos?.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const editTask = (id, editedText) => {
    setTodos(
      todos?.map((todo) =>
        todo.id === id
          ? { ...todo, text: editedText, isEditing: !todo.isEditing }
          : todo
      )
    );
    toast.success("Task Updated")
  };

  const clearTodo = () => {
    localStorage.removeItem("todos");
    toast.warning("All tasks deleted")
    setTodos(() => {
      const savedTodos = localStorage.getItem("todos");
      if (savedTodos) {
        return JSON.parse(savedTodos);
      } else {
        return [];
      }
    });
  };

  return (
    <div className=" bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 relative min-h-[100vh] flex  place-content-start pt-[5rem] flex-col gap-[2rem]  items-center ">
      <div className="opacity-0 dark:opacity-100 transition duration-500 absolute inset-0 h-full w-full bg-gradient-to-r from-black to-black via-gray-600  ">
      
      </div>
      <div className="min-h-[100vh] p-[10px] flex absolute inset-0 place-content-start pt-[5rem] flex-col gap-[2rem]  items-center">
          <div className="flex  place-content-evenly w-[100%] md:w-[70%]  lg:w-[50%]  ">
            <span></span>
            <h1 className="bg-white  px-[2rem] py-[1rem] rounded-[5rem] text-red-600  text-xl sm:text-2xl md:text lg:text-4xl  font-[600] tracking-widest dark:bg-neutral-300 ">
              TODO LIST
            </h1>
            <button onClick={()=>setDarkMode(!darkMode)} className=" w-[2rem]">
              
            {
              darkMode ?   <i class="fa-solid fa-sun  fa-xl " style={{color:'gold'}}></i>
              :  <i class="fa-solid fa-moon  fa-xl " style={{color:''}}></i>
            }
              
              
              </button>
          </div>
         
          <div className="scale-[.55]  sm:scale-[.9] md:scale-[1]">
            <AddTask task={task} setTask={setTask} AddTasks={AddTasks} />
          </div>
    
          <div className="w-[40rem]   scale-[.55] sm:scale-[.9] md:scale-[1]  flex items-center place-content-between pe-[1rem]">
            {todos.length > 0 && (
              <h2 className="text-3xl md:text-2xl dark:bg-neutral-300 w-[fit-content] font-600 bg-white px-[2rem] py-[1rem] rounded-[5rem]">
                Tasks :
              </h2>
            )}
    
            {todos.length > 1 && (
              <button
                onClick={() => clearTodo()}
                className="hover:ease-in-out duration-100 text-[3rem] md:text-[2rem]  text-red-600"
              >
                <i className="fa-solid fa-trash-can  "></i>
              </button>
            )}
          </div>
          <ul className="w-[40rem]  scale-[.58] sm:scale-[.9] md:scale-[1] flex flex-col gap-[4px]  ">
            {/* list map here */}
            {/* list items */}
    
            {todos?.map(
              (todo, index) =>
                !todo.completed &&
                (todo.isEditing ? (
                  <EditTodo
                    todo={todo}
                    handleDelete={handleDelete}
                    editTask={editTask}
                  />
                ) : (
                  <TaskList
                    index={index}
                    todo={todo}
                    setTodos={setTodos}
                    handleDelete={handleDelete}
                    toggleComplete={toggleComplete}
                    editTodo={editTodo}
                  />
                ))
            )}
    
            {todos?.map(
              (todo, index) =>
                todo.completed &&
                (todo.isEditing ? (
                  <EditTodo
                    todo={todo}
                    handleDelete={handleDelete}
                    editTask={editTask}
                  />
                ) : (
                  <TaskList
                    index={index}
                    todo={todo}
                    setTodos={setTodos}
                    handleDelete={handleDelete}
                    toggleComplete={toggleComplete}
                    editTodo={editTodo}
                  />
                ))
            )}
          </ul>
    
          <ToastContainer
            position="top-center"
            autoClose={1000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme={darkMode?"dark" : "light"}
            
          />
       </div>
    </div>
  );
}
