import { useState } from "react";
import TodoForm from "../components/TodoForm";
import Todos from "../components/Todos.js";
import UseTodo from "../hooks/UseTodo";
import { toast } from "react-toastify";

function TodoPage() {
  const { todos, addTodo } = UseTodo();
  const [todoList, setTodoList] = useState(todos);

  const handleTodoList = (data) => {
    setTodoList([...todos, data]);
    addTodo([...todos, data]);
  };

  const handleTodoEdit = (index, title) => {
    setTodoList((prev) => {
      let newState = [...prev];
      newState[index] = {
        ...newState[index],
        title: title,
        updatedAt: new Date(),
      };

      addTodo(newState);
      toast.info("Updated todo list successfully");
      return newState;
    });
  };

  const handleTodoCompleted = (index) => {
    setTodoList((prev) => {
      let newState = [...prev];
      newState[index] = {
        ...newState[index],
        completed: !newState[index].completed,
        updatedAt: new Date(),
      };

      addTodo(newState);
      toast.info("Updated todo list successfully");
      return newState;
    });
  };

  const handleTodoDelete = (id) => {
    setTodoList((prev) => {
      let newState = todos.filter((i) => i.id !== id);
      if (newState) {
        addTodo(newState);
        toast.warn("You have deleted a todo");
        return newState;
      }
    });
  };

  return (
    <div className="w-full md:h-screen flex flex-col items-center py-10 px-3 md:px-10">
      <h1 className="text-xl font-bold ">Manage your daily activities</h1>
      <div className="w-full 620px:w-[600px] flex flex-col items-center py-10">
        <TodoForm handleTodoChange={handleTodoList} />
        <Todos
          todoList={todoList}
          handleTodoOperations={[
            handleTodoEdit,
            handleTodoDelete,
            handleTodoCompleted,
          ]}
        />
      </div>
    </div>
  );
}

export default TodoPage;
