import { ADD_TODO_LIST } from "./constants";

export const addTodoList = (loaddata) => ({
  type: ADD_TODO_LIST,
  loaddata,
});
