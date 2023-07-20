import { useState, useEffect } from "react";
import { toast } from "react-toastify";

function UseTodo() {
  const getTodos = () => {
    let todos;
    let localTodos = localStorage.getItem("todos");
    if (localTodos) {
      todos = JSON.parse(localTodos);
    } else {
      todos = [];
    }

    return todos;
  };
  const [todos, setTodos] = useState(getTodos());

  const addTodo = (data) => {
    localStorage.setItem("todos", JSON.stringify(data));
  };

  const removeTodo = async (id) => {
    let oldTodos = [...todos, data];
    let newState = oldTodos.filter((i) => i.id !== id);
    localStorage.setItem("todos", JSON.stringify(newState));
    setTodos(newState);
  };

  const ComplteTodo = async (id) => {
    let newState = [...todos, data];
    let currentTodo = newState.find((i) => i.id === id);
    currentTodo = { ...currentTodo, completed: !currentTodo.completed };
    newState[index] = currentTodo;
    localStorage.setItem("todos", JSON.stringify(newState));
    setTodos(newState);
  };

  return { getTodos,todos, setTodos, addTodo, removeTodo, ComplteTodo };
}

export default UseTodo;
