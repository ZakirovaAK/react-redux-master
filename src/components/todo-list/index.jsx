import { useSelector } from "react-redux";
import { todosSelector } from "../../store/selectors/todo";
import { Todo } from "../todo";
import { useState } from "react";

export const TodoList = () => {
  const todos = useSelector(todosSelector);
  
  const [isFiltered, setIsFiltered] = useState('');
 
  const filteredTodos =
    isFiltered === "completedTask"
      ? todos.filter((todo) => todo.complete === true)
      : isFiltered === "notCompletedTask"
      ? todos.filter((todo) => !todo.complete)
      : todos;

  const filterTodo = (sort) => {
        setIsFiltered(sort);   
  };


  return (
    <div>
      <div>
        <button onClick={() => filterTodo("completedTask")}>Выполнены</button>{" "}
        <button onClick={() => filterTodo("notCompletedTask")}>Не выполнены</button>{" "}
        <button onClick={() => filterTodo("all")}>Все</button>
      </div>
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
};
