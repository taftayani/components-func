import { ADD_TODO_LIST } from "./constants";
const InitialState = {
  todos: [],
  user: [],
};
export const TodoReducer = (state = InitialState, { type, loaddata }) => {
  switch (type) {
    case ADD_TODO_LIST:
      return {
        ...state,
        todos: state.todos.concat(loaddata),
      };
    default:
      return state;
  }
};
