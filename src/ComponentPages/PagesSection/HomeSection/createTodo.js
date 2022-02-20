import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTodoList } from "../../../redux/action";
import ButtonComponent from "../../Element/button";
import moment from "moment";
const CreateTodo = () => {
  const dispatch = useDispatch();
  const submitTodo = (e) => {
    e.preventDefault();
    var dataTodo = {
      name: e.target.title.value,
      status: parseInt(e.target.status.value),
      description: e.target.description.value,
      createdAt: moment().format("YYYY-MM-DD h:m"),
    };
    dispatch(addTodoList(dataTodo));
  };
  useEffect(() => {});
  return (
    <>
      <form onSubmit={submitTodo}>
        <div className="content-center mt-50px">
          <div className="flex-module content-center">
            <div className="text-left p-10px mr-20px display-grid">
              <label>Title</label>
              <input
                placeholder={"please fill form"}
                type={"text"}
                name="title"
                className={"type-input-text"}
              />
            </div>
            <div className="text-left p-10px mr-20px display-grid">
              <label>Status</label>
              <select
                onChange={(e) => e.target.value}
                id="select-list"
                name="status"
                className={"select-input"}
              >
                <option value={1}>Done</option>
                <option value={0}>Undone</option>
              </select>
            </div>
          </div>
          <div className="text-left p-10px display-grid w-300px margin-center">
            <label>Description</label>
            <input
              placeholder={"please fill form"}
              type={"textarea"}
              name="description"
              className={"type-input-textarea"}
            />
          </div>
          <ButtonComponent
            ClassBtn={"button-tab-active"}
            TextBtn={"Save Todo"}
          />
        </div>
      </form>
    </>
  );
};
export default CreateTodo;
