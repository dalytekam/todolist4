import React from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
import { useState } from "react";
import {addFilterText} from '../features/todo/filterSlice'
import {useSelector} from 'react-redux'

const TodoForm = () => {
  const [value, setValue] = useState("");
  const filteredCollection = useSelector(state => state.todo.todos);
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
    <div className="grid grid-cols-2">
      <div className="py-2">
        <input
          placeholder="Search a task"
          className="border-b-2 border-indigo-600 outline-none text-3xl p-2"
        onKeyUp={(e)=>{
        dispatch(addFilterText(e.target.value.toLowerCase()))
        }}/>
      </div>
      <div>
        <form onSubmit={onSubmit}>
          <input
            placeholder="Enter a task"
            value={value}
            onChange={e => setValue(e.target.value)}
            className="text-3xl border-b-2 border-indigo-600 outline-none p-3"
          />
          <button
            className=" my-3 bg-indigo-400 border-b-2 border-indigo-600 text-xl p-3 w-44 rounded-full"
            type="submit"
          >
            Add a Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default TodoForm;
