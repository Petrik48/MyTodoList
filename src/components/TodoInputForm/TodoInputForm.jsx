import React from 'react';
import styles from './todoInputForm.module.scss';
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {addTodo} from "../../redux/todosReducer";

let TodoInputForm = (props) => {
  return (
    <form className={styles.todoInputForm} onSubmit={props.handleSubmit}>
      <Field className={styles.todoInput} name='todoInput' component='input' type='text' placeholder='Введите дело' />
      <button className={styles.todoButton}>Добавить дело</button>
    </form>
  )
}

TodoInputForm = reduxForm({
  form: 'TodoInputForm'
})(TodoInputForm)

const TodoInputContainer = (props) => {

  const onSubmit = (formData) => {
    if (formData.todoInput) {
      props.addTodo(formData.todoInput);
    }
  }

  return (
    <TodoInputForm onSubmit={onSubmit} />
  )
}

export default connect(null, {
  addTodo
})(TodoInputContainer);
        