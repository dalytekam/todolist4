import { createSlice } from "@reduxjs/toolkit";

import { v4 as uuidv4 } from "uuid";

const todoList = [
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
];

const initialState = {
  todos: todoList,
  total: todoList.length,
  isLoading: true
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

      state.total += 1;
    },
    toggleTodo: (state, action) => {
      const todoToToggle = state.todos.find(todo => todo.id === action.payload);
      todoToToggle.completed = !todoToToggle.completed;
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id != action.payload);
      state.total -= 1;
    },
    deleteTodos: state => {
      state.todos = [];
      state.total = 0;
    }
  }
});

export default todoSlice.reducer;
export const { addTodo, toggleTodo, deleteTodo, deleteTodos } =
  todoSlice.actions;
