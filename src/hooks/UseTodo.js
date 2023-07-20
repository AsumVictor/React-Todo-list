import { useState, useEffect } from "react";

function UseTodo() {
  const [todos, setTodos] = useState(null);

  const getTodos = async () => {
    let localTodos = await localStorage.getItem("todos");
    if (localTodos) {
      setTodos(JSON.parse(localTodos));
    } else {
      setTodos([]);
    }
  };

  const addTodo = async (data) => {
    const newState = [...todos, data];
    localStorage.setItem("todos", JSON.stringify(newState));
    setTodos(newState);
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

  return { getTodos, todos, addTodo, removeTodo, ComplteTodo };
}

export default UseTodo;
