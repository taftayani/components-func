import "./App.css";
import HomePage from "./Pages/home";
import { useEffect } from "react";
import { useSelector } from "react-redux";

function App() {
  const getTodo = useSelector((state) => state.reducersTodoList);
  useEffect(() => {
    console.log(getTodo);
  });
  return (
    <div className="App">
      <HomePage />
    </div>
  );
}

export default App;
