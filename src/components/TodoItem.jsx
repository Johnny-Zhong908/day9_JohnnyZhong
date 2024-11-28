import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import styles from "./TodoItem.module.css";

const TodoItem = (props) => {
    const { id, text, done } = props;
    const { dispatch } = useContext(TodoContext);

    const handleDelete = () => {
        dispatch({ type: "DELETE", payload: { id } });
    };

    const handleToggle = () => {
        dispatch({ type: "TOGGLE", payload: { id } });
    };

    return (
        <div className={styles.itemContainer}>
            <div
                className={`${styles.text} ${done ? styles.done : ""}`}
                onClick={handleToggle}
            >
                {text}
            </div>
            <button className={styles.deleteButton} onClick={handleDelete}>
                x
            </button>
        </div>
    );
};

export default TodoItem;
