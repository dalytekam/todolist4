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
          ? "border border-black grid grid-cols-2  my-2 p-2 px-4 hover:cursor-pointer rounded-full justify-between items-center"
          : "border-2 border-gray-100 grid grid-cols-2  my-2 px-4 p-2  text-gray-300 hover:cursor-pointer rounded-full justify-between items-center"
      }
    >
      <div>
        <p  className={
        !completed
          ? "ml-2 text-lg "
          : "line-through text-gray-300 ml-2 text-lg"
      }>{text}</p>
      </div>
      <div className ={!completed ?" grid justify-items-end ":"grid  justify-items-end"}>
        <button
          className="text-red-600 border px-4 rounded-full hover:bg-red-600 hover:text-white"
          onClick={(e) => {
          e.stopPropagation();
          dispatch(deleteTodo(id))
          }}
        >
          Delete
        </button>
       
      </div>
    </div>
  );
};

export default TodoItem;
