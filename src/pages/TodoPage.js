import React from "react";
import TodoForm from "../components/TodoForm";
import Todos from "../components/Todos.js";
import UseTodo from "../hooks/UseTodo";

function TodoPage() {
const useTodo =  UseTodo()
console.log(useTodo)
  return (
    <div className="w-full md:h-screen flex flex-col items-center py-10 px-3 md:px-10">
      <h1 className="text-xl font-bold ">Manage your daily activities</h1>
      <div className="w-full 620px:w-[600px] flex flex-col items-center py-10">
        <TodoForm />
        <Todos />
      </div>
    </div>
  );
}

export default TodoPage;
