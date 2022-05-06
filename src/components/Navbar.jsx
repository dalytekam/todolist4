import React from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const total = useSelector(state => state.todo.total);
  const totalDone = useSelector(
    state => state.todo.todos.filter(todo => todo.completed).length
  );
  const totalUndone = useSelector(
    state => state.todo.todos.filter(todo => !todo.completed).length
  );

  return (
    <nav>
      <div>
        <h2 className="text-4xl">TodoList</h2>
      </div>
      <div>
        <h3 className="text-3xl">
          Completed : {totalDone} (
          {total > 0 ? ((totalDone / total) * 100).toFixed(2) : 0.0}%)
        </h3>
        <h3 className="text-3xl">
          Uncompleted: {totalUndone} (
          {total > 0 ? ((totalUndone / total) * 100).toFixed(2) : 0.0}%)
        </h3>
        <h3 className="text-4xl">Total:{total}</h3>
      </div>
    </nav>
  );
};

export default Navbar;
