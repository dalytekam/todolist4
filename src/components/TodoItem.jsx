import React from "react";
import { useDispatch } from "react-redux";
import { toggleTodo } from "../features/todo/todoSlice";
import { deleteTodo } from "../features/todo/todoSlice";

const TodoItem = ({ id, text, completed }) => {
  const dispatch = useDispatch();
  return (
    <div
      onClick={() => dispatch(toggleTodo(id))}
      className={
        !completed
          ? "border-2 border-black grid grid-cols-2 justify-items-start my-2 p-2 px-4 hover:cursor-pointer rounded-full"
          : "border-2 border-gray-100 grid grid-cols-2 justify-items-start my-2 px-4 p-2 line-through text-gray-300 hover:cursor-pointer rounded-full"
      }
    >
      <div>
        <p>{text}</p>
      </div>
      <div>
        <button
          className="text-red-600 justify-items-end"
          onClick={() => dispatch(deleteTodo(id))}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
