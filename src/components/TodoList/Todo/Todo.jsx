import React from 'react';
import styles from './todo.module.scss';
import Fade from 'react-reveal/Fade';

const Todo = (props) => {
  return (
    <Fade left opposite >
      <div className={`${styles.todo} ${props.noted && styles.notedTodo}`}>
        <p className={styles.todosText}>
          {props.todosText}
        </p>
        <div className={styles.todoButtonsWrapper}>
          <button className={styles.todoMarkButton} onClick={() => {
            props.toggleNoted(props.id)
          }}>Отметить дело
          </button>
          <button className={styles.todoDeleteButton} onClick={() => {
            props.deleteTodoFromState(props.id)
          }}>Удалить дело
          </button>
        </div>
      </div>
    </Fade>

  )
}

export default Todo;
