import {reset} from "redux-form";

const ADD_TODO = 'ADD_TODO';
const TOGGLE_NOTED = 'TOGGLE_NOTED';
const DELETE_TODO = 'DELETE_TODO';

const initialState = {
  todos: []
}

const todosReducer = (state = initialState, action) => {

  switch (action.type) {

    case TOGGLE_NOTED:
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id === action.id) {
            todo.noted = !todo.noted;
          }
          return todo
        })
      }

    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, {text: action.todo, noted: false, id: Math.random().toString(36).substr(2, 9)}]
      }

    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.id)
      }

    default:
      return state
  }
}

export const addTodoToState = (todo) => ({
  type: ADD_TODO,
  todo
})

export const deleteTodoFromState = (id) => ({
  type: DELETE_TODO,
  id
})

export const toggleNoted = (id) => ({
  type: TOGGLE_NOTED,
  id
})

export const addTodo = (todo) => {
  return (dispatch) => {
    dispatch(addTodoToState(todo));
    dispatch(reset('TodoInputForm'));
  }
}


export default todosReducer;