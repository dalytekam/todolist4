import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {setListState} from "../features/todo/displayedlistSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const total = useSelector(state => state.todo.total);
  const totalDone = useSelector(
    state => state.todo.todos.filter(todo => todo.completed).length
  );
  const totalUndone = useSelector(
    state => state.todo.todos.filter(todo => !todo.completed).length
  );
const removeBackgroundColor = () => {
 let filterItem = document.querySelectorAll(".filterItem");
filterItem.forEach(item => {
if(item.classList.contains("bg-blue-300")){
  item.classList.remove("bg-blue-300");}
})};
  return (
    <nav className="grid grid-cols-3 gap-4 items-center border-2 my-2 h-38 bg-gray-100 rounded-full ">
      <div className="col-span-1 ">
        <h2 className="text-center px-2 text-6xl font-bold text-blue-400">TodoList</h2>
      </div>
      <div className="grid gap-4  justify-center ">
        <h3 className="font-bold filterItem text-sm border-2 border-blue-200 rounded-full justify-items-center text-center py-1  hover:cursor-pointer w-32" onClick={(e) => {dispatch(setListState(e.target.innerText.toLowerCase()));
         removeBackgroundColor();
        e.target.classList.add("bg-blue-300");
       }}
        >
          Completed
        </h3>
        <h3
          
          className="font-bold filterItem text-sm border-2 border-blue-200 rounded-full justify-items-center text-center py-1  hover:cursor-pointer  w-32" onClick={(e) => {dispatch(setListState(e.target.innerText.toLowerCase()));
         removeBackgroundColor();
        e.target.classList.add("bg-blue-300");
       }}
        >
          Uncompleted
        </h3>
        <h3
         
          className="font-bold filterItem text-sm border-2 border-blue-200 rounded-full justify-items-center text-center py-1  hover:cursor-pointer  w-32" onClick={(e) => {dispatch(setListState(e.target.innerText.toLowerCase()));
         removeBackgroundColor();
        e.target.classList.add("bg-blue-300");
       }}
        >
          All
        </h3>
      </div>

      <div className="grid grid-cols-1 justify-items-left items-center col-span-1 ">
        <h3 className="text-lg text-green-500 rounded-full  p-2">
          Completed : {totalDone} (
          {total > 0 ? ((totalDone / total) * 100).toFixed(2) : 0.0}%)
        </h3>
        <h3 className="text-lg  text-red-500 rounded-full  p-2">
          Uncompleted: {totalUndone} (
          {total > 0 ? ((totalUndone / total) * 100).toFixed(2) : 0.0}%)
        </h3>
        <h3 className="text-xl font-semibold text-indigo-500  rounded-full  p-2">
          Total:{total}
        </h3>
      </div>
    </nav>
  );
};

export default Navbar;
