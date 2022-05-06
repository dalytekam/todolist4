import React from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { deleteTodos } from "../features/todo/todoSlice";
import TodoItem from "./TodoItem";
import { useDispatch } from "react-redux";
const TodoContainer = () => {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todo.todos);

  useEffect(() => {
    const fetchTodos = () => {
      return todos;
    };
    fetchTodos();
  }, []);

  return (
    <div>
      <nav>
        <div>Tasks</div>
        <div>
          <button onClick={() => dispatch(deleteTodos())}>Clear All</button>
        </div>
      </nav>
      <ul>
        {todos.map(({ id, text, completed }) => (
          <li key={id}>
            <TodoItem id={id} text={text} completed={completed} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoContainer;
