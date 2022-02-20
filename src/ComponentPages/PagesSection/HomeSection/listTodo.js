import ButtonComponent from "../../Element/button";

/* eslint-disable jsx-a11y/alt-text */
const ListTodos = ({ todos }) => {
  return (
    <>
      {todos
        ? todos.map((list, index) => {
            return (
              <div
                key={index}
                className="flex-module content-center mt-50px w-500px margin-center"
              >
                <img src="/img-todo/check-done.svg" />
                <div className="text-left w-300px display-grid">
                  <label className={"header-list"}>{list.title}</label>
                  <label className={"description-list"}>
                    {list.description}
                  </label>
                  <label className={"description-list"}>{list.createdAt}</label>
                </div>
                <ButtonComponent TextBtn={"Details"} ClassBtn={"detail-btn"} />
              </div>
            );
          })
        : ""}
    </>
  );
};
export default ListTodos;
