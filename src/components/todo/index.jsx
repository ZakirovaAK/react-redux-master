
import { useDispatch } from "react-redux";
import cx from "classnames";

import { toggleTodo, delTodo } from "../../store/actions/creators/todo";

import styles from "./index.module.css";

export const Todo = ({ todo }) => {
  const dispatch = useDispatch();

  const toggleTodoItem = () => {
    dispatch(toggleTodo(todo.id));
  }

  const deleteTodo = (id) => {
    //console.log('id = ' + todo.id);
    dispatch(delTodo(todo.id));
  }

  return (
    <div className={styles.item_all}>
      <li className={styles.item} onClick={toggleTodoItem}>
        {todo.complete ? "👌" : "👋"}{" "}
        <span
          className={cx({
            [styles.complete]: todo.complete,
          })}
        >
          {todo.content}
        </span>{" "}
      </li>{" "}
      <button className={styles.del} onClick={deleteTodo}>
        Delete
      </button>
    </div>
  );
};
