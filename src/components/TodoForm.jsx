import React from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
import { useState } from "react";

const TodoForm = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const onSubmit = e => {
    e.preventDefault();
    if (!value) {
      alert("Please enter a task");
      return;
    }
    dispatch(addTodo(value));
    setValue("");
  };
  return (
    <div>
      <div>
        <input placeholder="search a task" />
      </div>
      <div>
        <form onSubmit={onSubmit}>
          <input
            placeholder="Enter a task"
            value={value}
            onChange={e => setValue(e.target.value)}
          />
          <button type="submit">Add a Task</button>
        </form>
      </div>
    </div>
  );
};

export default TodoForm;
