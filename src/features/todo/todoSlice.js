import { createSlice } from "@reduxjs/toolkit";

import { v4 as uuidv4 } from "uuid";

/*const todoList = [
  {
    id: "c0e250f6-473c-4f2e-a913-96f037e857d1",
    text: "Learn Linux",
    completed: false
  },
  {
    id: "c0e250f6-473c-4f2e-b913-97f037e857d1",
    text: "Learn Spring",
    completed: false
  },
  {
    id: "c0e250f6-473c-4g2e-b913-96f037e857d1",
    text: "Make $3000,000a year!",
    completed: true
  }
];*/
let todoList;
if(localStorage.getItem("tasks")===null){
   todoList = [];
  localStorage.setItem("tasks",JSON.stringify(todoList))} else{
  todoList = JSON.parse(localStorage.getItem("tasks"));}

const initialState = {
  todos: todoList, 
  total: todoList.length,
  
};

const todoSlice = createSlice({
  name: "todo",
  initialState: initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: uuidv4(),
        completed: false,
        text: action.payload
      };

      state.todos.push(newTodo);
      let todosFromlocalstorage = JSON.parse(localStorage.getItem("tasks"));
      todosFromlocalstorage.push(newTodo);
      localStorage.setItem("tasks",JSON.stringify(todosFromlocalstorage));

      state.total += 1;
    },
    toggleTodo: (state, action) => {
      const todoToToggle = state.todos.find(todo => todo.id === action.payload);

      todoToToggle.completed = !todoToToggle.completed;

      let todosFromlocalstorage = JSON.parse(localStorage.getItem("tasks"));
      let singleTodoFromLocalStorage = todosFromlocalstorage.find(todo => todo.id === action.payload);
     singleTodoFromLocalStorage.completed = !singleTodoFromLocalStorage.completed;
      localStorage.setItem("tasks",JSON.stringify(todosFromlocalstorage));
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
      state.total -= 1;
let todosFromlocalstorage = JSON.parse(localStorage.getItem("tasks"));
      
      todosFromlocalstorage = todosFromlocalstorage.filter(todo => todo.id !== action.payload);
      localStorage.setItem("tasks",JSON.stringify(todosFromlocalstorage));



    },
    deleteTodos: state => {
      state.todos = [];
      state.total = 0;
      let todosFromlocalstorage = JSON.parse(localStorage.getItem("tasks"));
      todosFromlocalstorage = [];
      localStorage.setItem("tasks",JSON.stringify(todosFromlocalstorage));
    }
  }
});

export default todoSlice.reducer;
export const { addTodo, toggleTodo, deleteTodo, deleteTodos } =
  todoSlice.actions;
