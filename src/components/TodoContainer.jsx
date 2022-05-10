import React from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { deleteTodos } from "../features/todo/todoSlice";
import TodoItem from "./TodoItem";
import { useDispatch } from "react-redux";


const TodoContainer = () => {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todo.todos);
  const listState = useSelector(state => state.displayedList.listState);
  
  let listTodisplay = todos; 

    if(listState === "all"){
      listTodisplay = todos;
      }else if (listState === "completed"){
        listTodisplay = todos.filter(todo => todo.completed === true);
      }else{
        listTodisplay = todos.filter(todo => todo.completed === false);}

console.log(listTodisplay);

 useEffect(() => {
    const fetchTodos = () => {
      return todos;
      
    };
    fetchTodos();
  }, [todos]); 

  return (
    <div className="grid grid-cols-1">
      <nav className="grid grid-cols-2">
        <div className="text-4xl p-3 self-end  ">{"Tasks List".toLocaleUpperCase()}</div>
        <div>
          <button
            className="text-xl bg-red-600 p-3 text-white my-3 w-44 rounded-full"
            onClick={() => dispatch(deleteTodos())}
          >
            Clear All
          </button>
          
        </div>
        
      </nav>
      <hr className="w-full text-indigo-600" />
      <ul>
       
        {listTodisplay.length>0 ? listTodisplay.map(({ id, text, completed }) => (
          <li key={id} className="text-3xl">
            <TodoItem id={id} text={text} completed={completed} />
          </li>
        )):(<h3 className= "text-3xl text-center mt-4">No tasks to display!</h3>)}
      </ul>
    </div>
  );
};

export default TodoContainer;
