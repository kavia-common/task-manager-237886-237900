import React, { useEffect, useMemo, useState } from "react";
import TodoItem from "./components/TodoItem";
import { loadTodos, saveTodos } from "./lib/storage";
import { createTodo, normalizeText } from "./lib/todos";

/**
 * Local storage key used for persistence.
 * Keep stable across releases so existing users retain their tasks.
 */
const STORAGE_KEY = "todo_app.todos.v1";

export default function App() {
  const [todos, setTodos] = useState(() => loadTodos(STORAGE_KEY));
  const [newTitle, setNewTitle] = useState("");
  const [error, setError] = useState("");

  const stats = useMemo(() => {
    const total = todos.length;
    const completed = todos.filter((t) => t.completed).length;
    const active = total - completed;
    return { total, completed, active };
  }, [todos]);

  useEffect(() => {
    saveTodos(STORAGE_KEY, todos);
  }, [todos]);

  function onSubmit(e) {
    e.preventDefault();
    setError("");

    const normalized = normalizeText(newTitle);
    if (!normalized) {
      setError("Please enter a task.");
      return;
    }

    const next = [createTodo(normalized), ...todos];
    setTodos(next);
    setNewTitle("");
  }

  function onToggleComplete(id) {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  }

  function onDelete(id) {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  }

  function onClearCompleted() {
    setTodos((prev) => prev.filter((t) => !t.completed));
  }

  return (
    <div className="page">
      <header className="header">
        <div className="header__inner">
          <div>
            <h1 className="title">Task Manager</h1>
            <p className="subtitle">
              Add tasks, mark them complete, and keep your day moving.
            </p>
          </div>

          <div className="stats" aria-label="Task statistics">
            <span className="pill pill--neutral">
              Total <strong>{stats.total}</strong>
            </span>
            <span className="pill pill--primary">
              Active <strong>{stats.active}</strong>
            </span>
            <span className="pill pill--success">
              Done <strong>{stats.completed}</strong>
            </span>
          </div>
        </div>
      </header>

      <main className="main" role="main">
        <section className="card" aria-label="Add a task">
          <form className="addForm" onSubmit={onSubmit}>
            <label className="srOnly" htmlFor="newTodo">
              New task
            </label>
            <input
              id="newTodo"
              className="input"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              placeholder="What needs to be done?"
              autoComplete="off"
              maxLength={140}
            />
            <button className="btn btn--primary" type="submit">
              Add
            </button>
          </form>
          {error ? (
            <p className="formError" role="alert">
              {error}
            </p>
          ) : null}
        </section>

        <section className="card" aria-label="Todo list">
          <div className="cardHeader">
            <h2 className="cardTitle">Your tasks</h2>
            <div className="cardActions">
              <button
                type="button"
                className="btn btn--ghost"
                onClick={onClearCompleted}
                disabled={stats.completed === 0}
                aria-disabled={stats.completed === 0}
                title="Remove all completed tasks"
              >
                Clear completed
              </button>
            </div>
          </div>

          {todos.length === 0 ? (
            <div className="empty">
              <p className="empty__title">Nothing here yet.</p>
              <p className="empty__hint">
                Add your first task above to get started.
              </p>
            </div>
          ) : (
            <ul className="list" aria-label="Todos">
              {todos.map((todo) => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  onToggleComplete={onToggleComplete}
                  onDelete={onDelete}
                />
              ))}
            </ul>
          )}
        </section>

        <footer className="footer">
          <span className="footerText">
            Stored locally in your browser (localStorage).
          </span>
        </footer>
      </main>
    </div>
  );
}
