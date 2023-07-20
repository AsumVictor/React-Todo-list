import { useState } from "react";
import {
  HiBadgeCheck,
  HiCheck,
  HiCheckCircle,
  HiPencilAlt,
  HiTrash,
} from "react-icons/hi";

function Todo({ todo, index }) {
  const [edit, setEdit] = useState(false);

  return (
    <div className="w-full py-1 gap-2 pb-5 border-emerald-500 px-2 border rounded-md grid grid-cols-10">
      <div className="col-span-9 py-1 ">
        {edit ? (
          <input
            type="text"
            value={todo.title}
            className="outline-none border-2 border-blue-600 h-full w-full rounded-md px-2 font-bold"
          />
        ) : (
          <p className="font-bold">{todo.title}</p>
        )}
      </div>
      <button className="col-span-1 py-1 text-red-700 h-[1.5cm] rounded-md hover:bg-red-100 flex justify-center items-center text-2xl">
        <HiTrash />
      </button>
      <button className="mt-2 col-span-5 py-1 text-emerald-700 h-[1cm] rounded-md bg-emerald-100 flex justify-center items-center  gap-2">
        <HiBadgeCheck className="text-2xl" />
        <span className="font-bold text-[18px]">Mark as done</span>
      </button>
      {edit ? (
        <button className="mt-2 float-right col-span-5 py-1 text-blue-700 h-[1cm] rounded-md bg-blue-100 flex justify-center items-center gap-2">
          <HiCheck className="text-2xl" />
          <span className="font-bold text-[18px]">Done editing</span>
        </button>
      ) : (
        <button
          className="mt-2 float-right col-span-5 py-1 text-blue-700 h-[1cm] rounded-md bg-blue-100 flex justify-center items-center gap-2"
          onClick={() => setEdit(true)}
        >
          <HiPencilAlt className="text-2xl" />
          <span className="font-bold text-[18px]">Edit</span>
        </button>
      )}

      <p className="col-span-7 py-1  font-bold mt-2 flex flex-row gap-2 items-center">
       <span className='text-xl'>Status:</span> 
        <span
          className={`${todo.completed ? "text-emerald-600" : "text-blue-600"}`}
        >
          {todo.completed ? "completed" : "pending"}
        </span>
      </p>

      <p className="col-span-3 py-1 text-[14px] font-bold text-gray-600 mt-2 text-right">
        Added 3 min ago
      </p>
    </div>
  );
}

export default Todo;
