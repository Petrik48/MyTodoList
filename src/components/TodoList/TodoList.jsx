import React from 'react';
import styles from './todoList.module.scss';
import Todo from "./Todo/Todo";
import {connect} from "react-redux";
import {deleteTodoFromState, toggleNoted} from "../../redux/todosReducer";

const TodoList = (props) => {
  const TodoElements = props.todos.map((todo) => {
    return (
      <Todo todosText={todo.text} key={todo.id} id={todo.id} noted={todo.noted} toggleNoted={props.toggleNoted}
            deleteTodoFromState={props.deleteTodoFromState} />
    )
  })

  return (
    <div className={styles.todoList}>
      {TodoElements}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos.todos
  }
}

export default connect(mapStateToProps, {
  toggleNoted, deleteTodoFromState
})(TodoList);
        