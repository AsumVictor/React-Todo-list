import { useState } from "react";
import UseTodo from "../hooks/UseTodo";
function TodoForm() {
  const [value, setValue] = useState(null);
  const [error, setError] = useState(false);
  const { addTodo } = UseTodo();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim().length === 0) {
      setError(true);
      return 0;
    }
    console.log("first");
  };

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="w-full grid grid-cols-4 h-[1.3cm] gap-2 620px:gap-4 bg-white top-5 sticky"
    >
      <input
        type="text"
        name="todo-text"
        className={`col-span-3 border outline-none rounded-md ${
          error
            ? "border-red-800 placeholder:text-red-700"
            : "border-emerald-800"
        }  px-2 placeholder:font-semibold font-semibold`}
        placeholder="Type todo title here ..."
      />
      <button className=" col-span-1 bg-emerald-800 text-white font-bold rounded-md">
        Add todo
      </button>
    </form>
  );
}

export default TodoForm;
