import { useState } from 'react';

function UseTodo() {
  const getTodos = () => {
    let todos;
    const localTodos = localStorage.getItem('todos');
    if (localTodos) {
      todos = JSON.parse(localTodos);
    } else {
      todos = [];
    }

    return todos;
  };
  const [todos] = useState(getTodos());

  const addTodo = (data) => {
    localStorage.setItem('todos', JSON.stringify(data));
  };

  return { todos, addTodo };
}

export default UseTodo;
