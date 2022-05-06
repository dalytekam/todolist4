import Navbar from "./components/Navbar";
import TodoForm from "./components/TodoForm";
import TodoContainer from "./components/TodoContainer";

function App() {
  return (
    <div className="container mx-auto px-4 border-solid border-2 border-indigo-600">
      <Navbar />
      <TodoForm />
      <TodoContainer />
    </div>
  );
}

export default App;
