import "./TodoItem.css";
import { TodoListContext } from "../context/TodoListContext";
import { useContext } from "react";

const TodoItem = ({todo}) => {
  const { dispatch } = useContext(TodoListContext);

  const handleToggleTodo = () => {
    dispatch({ type: 'TOGGLE_TODO', payload: todo.id });
  };

  const removeTodo = () => {
    dispatch({ type: 'REMOVE_TODO', payload: todo.id })
  };
  return (
      <div className={"todo-item-wrapper"}>
        <div className={`todo-text ${todo.done ? "done" : ""}`} onClick={handleToggleTodo}>{todo.text}</div>
        <button onClick={removeTodo}>X</button>
      </div>
  );
}

export default TodoItem;