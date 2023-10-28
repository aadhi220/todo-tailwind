import React from 'react'
import AddTask from '../components/AddTask'
import TaskList from '../components/TaskList'

export default function Home() {
  return (
    <div className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-[100vh] flex  place-content-center flex-col gap-[2rem]  items-center ' >
    
    <h1 className='bg-white px-[2rem] py-[1rem] rounded-[5rem] text-red-600 text-4xl  font-[600] tracking-widest '>TODO LIST</h1>
    <AddTask/>
    
    <TaskList/>
    </div>
  )
}
