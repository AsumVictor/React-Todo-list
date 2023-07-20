import { useState } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

function TodoForm({ handleTodoChange }) {
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);

  const todo = {
    id: Math.ceil(Math.random() * 1000),
    title: value,
    createdAt: new Date(),
    updatedAt: new Date(),
    completed: false,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim().length === 0) {
      setError(true);
      toast.error('Please todo title cannot be empty');
      return 0;
    }
    handleTodoChange(todo);
    setValue('');

    return null;
  };

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="w-full grid grid-cols-4 h-[1.3cm] gap-2 620px:gap-4 bg-white top-5 sticky"
    >
      <input
        type="text"
        name="todo-text"
        value={value}
        onChange={(e) => {
          setError(false);
          setValue(e.target.value);
        }}
        className={`col-span-3 border outline-none rounded-md ${
          error
            ? 'border-red-800 placeholder:text-red-700'
            : 'border-emerald-800'
        }  px-2 placeholder:font-semibold font-semibold`}
        placeholder="Type todo title here ..."
      />
      <button
        type="submit"
        className=" col-span-1 bg-emerald-800 text-white font-bold rounded-md"
      >
        Add todo
      </button>
    </form>
  );
}

TodoForm.propTypes = {
  handleTodoChange: PropTypes.func.isRequired,
};

export default TodoForm;
