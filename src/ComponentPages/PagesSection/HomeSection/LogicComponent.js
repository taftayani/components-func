// button direct
//   style button direct
export const StyleBtn = (style) => {
  return style === true ? "button-tab-active" : "button-tab";
};
// img showing method
export const ShowingImgFilter = (img) => {
  return img === 0 ? "/img-todo/check-ndone.svg" : "/img-todo/check-done.svg";
};
//   filter done and undone
export const FilterDone = (todos) => {
  return todos !== ""
    ? todos.todos
        .filter((list) => {
          return list.status === 1;
        })
        .sort((a, b) => {
          var dateFirst = new Date(a.createdAt);
          var dateSecond = new Date(b.createdAt);
          return dateFirst - dateSecond;
        })
    : "";
};
export const FilterUndone = (todos) => {
  return todos !== ""
    ? todos.todos
        .filter((list) => {
          return list.status === 0;
        })
        .sort((a, b) => {
          var dateFirst = new Date(a.createdAt);
          var dateSecond = new Date(b.createdAt);
          return dateFirst - dateSecond;
        })
    : "";
};
