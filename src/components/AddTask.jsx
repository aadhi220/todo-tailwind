import React from "react";

export default function AddTask({ task,setTask,AddTasks }) {


  return (
    <>
      <form className=" dark:bg-neutral-300 w-[40rem] px-[10px] py-[2px]  bg-white  flex place-content-between items-center rounded-[5rem]">
        <input
          type="text"
          className="  dark:bg-neutral-300 rounded-[5rem] w-[32.5rem] px-[1rem] h-[5.5rem] md:h-[4rem] border-0 text-gray-900 ring-0 outline-none  placeholder:text-gray-400  text-3xl md:text-2xl  font-[400] tracking-wide"
          placeholder=" New Task"
          value={task || ""}
          onChange={(e) => setTask(e.target.value)}
          required
        />
        <button
          onClick={(e) => AddTasks(e)}
          className="btn rounded-[5rem] bg-red-600  p-[1rem] flex place-content-center items-center  w-[4.5rem] md:w-[3.5rem]  h-[4.5rem] md:h-[3.5rem] "
        >
          <i className="fa-regular fa-plus fa-xl" style={{ color: "6695e5" }}></i>
        </button>
      </form>
    </>
  );
}
