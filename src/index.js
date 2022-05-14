import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import todoReducer from "./features/todo/todoSlice";
import displayedlistReducer from "./features/todo/displayedlistSlice";
import filterReducer from "./features/todo/filterSlice";


const store = configureStore({
  reducer: {
    todo: todoReducer,
    displayedList: displayedlistReducer,
    filter:filterReducer
  }
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
