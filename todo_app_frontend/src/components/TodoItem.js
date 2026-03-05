import React from "react";

/**
 * @param {{ todo: {id: string, title: string, completed: boolean}, onToggleComplete: (id: string) => void, onDelete: (id: string) => void }} props
 */
export default function TodoItem({ todo, onToggleComplete, onDelete }) {
  return (
    <li className="item">
      <div className="item__left">
        <input
          id={`todo-${todo.id}`}
          className="checkbox"
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggleComplete(todo.id)}
          aria-label={todo.completed ? "Mark as not completed" : "Mark as completed"}
        />
        <label
          htmlFor={`todo-${todo.id}`}
          className={todo.completed ? "item__title item__title--done" : "item__title"}
        >
          {todo.title}
        </label>
      </div>

      <div className="item__right">
        <button
          type="button"
          className="btn btn--dangerGhost"
          onClick={() => onDelete(todo.id)}
          aria-label={`Delete task: ${todo.title}`}
          title="Delete"
        >
          Delete
        </button>
      </div>
    </li>
  );
}
