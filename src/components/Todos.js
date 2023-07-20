import Todo from "../components/Todo.js";

function Todos() {
  return (
    <div className="w-full  py-2 items-center mt-10 flex flex-col gap-2 ">
      <h2 className="font-bold underline text-xl">All todos</h2>
      <Todo />
    </div>
  );
}

export default Todos;
