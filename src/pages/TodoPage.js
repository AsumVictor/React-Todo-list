import { useState } from "react";
import TodoForm from "../components/TodoForm";
import Todos from "../components/Todos.js";
import UseTodo from "../hooks/UseTodo";

function TodoPage() {
  const useTodo = UseTodo();
  const { todos } = UseTodo();
  const [todoList, setTodoList] = useState(todos);

  const handleTodoList = (data) => {
    setTodoList([...todos, data]);
  };

  return (
    <div className="w-full md:h-screen flex flex-col items-center py-10 px-3 md:px-10">
      <h1 className="text-xl font-bold ">Manage your daily activities</h1>
      <div className="w-full 620px:w-[600px] flex flex-col items-center py-10">
        <TodoForm handleTodoChange={() => handleTodoList()} />
        <Todos todoList={todoList} />
      </div>
    </div>
  );
}

export default TodoPage;
