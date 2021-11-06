import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';
import todosReducer from "./todosReducer";

let reducers = combineReducers({
  todos: todosReducer,
  form: formReducer,
});

const persistedState = localStorage.getItem('reduxState')
  ? JSON.parse(localStorage.getItem('reduxState'))
  : {}

let store = createStore(reducers, persistedState, applyMiddleware(thunkMiddleware));

store.subscribe(() => {
  localStorage.setItem('reduxState', JSON.stringify(store.getState()))
})

window.store = store;
export default store;