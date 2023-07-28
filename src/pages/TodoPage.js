import { useState } from 'react';
import { toast } from 'react-toastify';
import TodoForm from '../components/TodoForm';
import Todos from '../components/Todos';
import UseTodo from '../hooks/UseTodo';

function TodoPage() {
  const { todos, addTodo } = UseTodo();
  const [todoList, setTodoList] = useState(todos);

  const handleTodoList = (data) => {
    setTodoList((prev) => {
      let newState = [...prev];
      newState = [...newState, data];
      addTodo(newState);
      return newState;
    });
  };

  const handleTodoEdit = (index, title) => {
    setTodoList((prev) => {
      const newState = [...prev];
      newState[index] = {
        ...newState[index],
        title,
        updatedAt: new Date(),
      };

      addTodo(newState);
      toast.info('Updated todo list successfully');
      return newState;
    });
  };

  const handleTodoCompleted = (index) => {
    setTodoList((prev) => {
      const newState = [...prev];
      newState[index] = {
        ...newState[index],
        completed: !newState[index].completed,
        updatedAt: new Date(),
      };

      addTodo(newState);
      toast.info('Updated todo list successfully');
      return newState;
    });
  };

  const handleTodoDelete = (id) => {
    setTodoList((prev) => {
      const newState = prev.filter((i) => i.id !== id);
      if (newState) {
        addTodo(newState);
        toast.warn('You have deleted a todo');
        return newState;
      }

      return 0;
    });

    return null;
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
