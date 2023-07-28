import PropTypes from 'prop-types';
import Todo from './Todo';

function Todos({ todoList, handleTodoOperations }) {
  return (
    <div className="w-full  py-2 items-center mt-10 flex flex-col gap-2 ">
      <h2 className="font-bold underline text-xl">All todos</h2>
      {todoList?.length === 0 && (
        <h1 className="text-xl mt-10 text-center">
          You have not added a todo yet.
        </h1>
      )}
      {todoList?.length !== 0
        && todoList?.map((i, index) => (
          <Todo
            key={i.id}
            todo={i}
            index={index}
            handleTodoOperations={handleTodoOperations}
          />
        ))}
    </div>
  );
}

Todos.propTypes = {
  handleTodoOperations: PropTypes.arrayOf(PropTypes.func).isRequired,
  todoList: PropTypes.arrayOf(
    PropTypes.shape({
      completed: PropTypes.bool.isRequired,
      createdAt: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      updatedAt: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Todos;
