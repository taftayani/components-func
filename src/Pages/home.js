import { useState } from "react";
import { useSelector } from "react-redux";
import ButtonComponent from "../ComponentPages/Element/button";
import CreateTodo from "../ComponentPages/PagesSection/HomeSection/createTodo";
import ListTodos from "../ComponentPages/PagesSection/HomeSection/listTodo";
import {
  FilterDone,
  FilterUndone,
  StyleBtn,
} from "../ComponentPages/PagesSection/HomeSection/LogicComponent";

const HomePage = () => {
  const [btn, setBtn] = useState("add");
  const listTodos = useSelector((state) => state.reducersTodoList);

  // state click button
  const BtnDirect = (click) => {
    setBtn(click);
  };
  return (
    <>
      <div className="App">
        <h1>Task Todo</h1>
        <div className="flex-module content-center">
          <ButtonComponent
            TextBtn="Add Todo"
            OnClick={() => BtnDirect("add")}
            ClassBtn={StyleBtn(btn === "add")}
          />
          <ButtonComponent
            TextBtn="See Undone"
            OnClick={() => BtnDirect("undone")}
            ClassBtn={StyleBtn(btn === "undone")}
          />
          <ButtonComponent
            TextBtn="See Done"
            OnClick={() => BtnDirect("done")}
            ClassBtn={StyleBtn(btn === "done")}
          />
        </div>
        {/* create Todo  */}
        {btn === "add" && <CreateTodo />}
        {btn === "done" && <ListTodos todos={FilterDone(listTodos)} />}
        {btn === "undone" && <ListTodos todos={FilterUndone(listTodos)} />}
      </div>
    </>
  );
};

export default HomePage;
