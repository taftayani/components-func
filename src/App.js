import "./App.css";
import HomePage from "./Pages/home";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const getTodo = useSelector((state) => state.reducersTodoList);
  useEffect(() => {
    console.log(getTodo);
  });
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
