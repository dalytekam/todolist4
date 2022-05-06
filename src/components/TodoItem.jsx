import React from "react";
import { useDispatch } from "react-redux";
import { toggleTodo } from "../features/todo/todoSlice";
import { deleteTodo } from "../features/todo/todoSlice";

const TodoItem = ({ id, text }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <div onClick={() => dispatch(toggleTodo(id))}>
        <p>{text}</p>
      </div>
      <div>
        <button onClick={() => dispatch(deleteTodo(id))}>Delete</button>
      </div>
    </div>
  );
};

export default TodoItem;
