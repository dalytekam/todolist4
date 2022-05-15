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
          ? "border-2 border-black grid grid-cols-2  my-2 p-2 px-4 hover:cursor-pointer rounded-full justify-between"
          : "border-2 border-gray-100 grid grid-cols-2  my-2 px-4 p-2  text-gray-300 hover:cursor-pointer rounded-full"
      }
    >
      <div>
        <p  className={
        !completed
          ? "ml-2"
          : "line-through text-gray-300 ml-2"
      }>{text}</p>
      </div>
      <div className ={!completed ?" grid justify-items-end ":"grid  justify-items-end"}>
        <button
          className="text-red-600 border-2 px-4 py-1 rounded-full hover:bg-red-600 hover:text-white"
          onClick={() => dispatch(deleteTodo(id))}
        >
          Delete
        </button>
       
      </div>
    </div>
  );
};

export default TodoItem;
