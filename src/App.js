import Navbar from "./components/Navbar";
import TodoForm from "./components/TodoForm";
import TodoContainer from "./components/TodoContainer";

function App() {
  return (
    <div className=" grid grid-cols-1 px-72">
      <Navbar />
      <TodoForm />
      <TodoContainer />
    </div>
  );
}

export default App;
