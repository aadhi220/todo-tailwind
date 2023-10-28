import React from "react";

export default function TaskList() {
  return (
    <>
      <div className="w-[40rem]  flex items-center place-content-between pe-[1rem]">
        <h2 className="text-2xl w-[fit-content] font-600 bg-white px-[2rem] py-[1rem] rounded-[5rem]">
          Tasks :
        </h2>

        <h2>
          <i className="fa-solid fa-trash-can fa-2xl "></i>
        </h2>
      </div>
<div className="w-[40rem] flex flex-col gap-[4px] ">
       {/* list map here */}
            {/* list items */}
          <div className="w-[100%] h-[3.5rem] flex bg-white items-center place-content-around  rounded-lg">
         
    
            <input type="text" className="w-[95%] px-[1rem]  text-2xl" value={"hello"}/>
            <div className="flex place-content-around w-[15%]">
              <button className="btn">
                <i class="fa-solid fa-pen-to-square text-green-500 fa-lg"></i>
              </button>
              <button>
                <i className="fa-solid fa-trash-can fa-lg"></i>
              </button>
            </div>
          </div>
    
          
</div>
      
    </>
  );
}
