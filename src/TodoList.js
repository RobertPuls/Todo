import React, { useCallback } from 'react';

const TodoList = ({ todos, setTodos }) => {

  const handleIsDoneToggle = useCallback(({id}) => () => {
    const newTodos = todos.map((todo) => todo.id === id ? {...todo, isDone: !todo.isDone} : todo)
    setTodos(newTodos);
  }, [todos, setTodos]);

  const handleRemoveTodo = useCallback(({id}) => () => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  }, [todos, setTodos]);

  return (
    <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.isDone}
              onChange={handleIsDoneToggle(todo)}
            />
            <span className={todo.isDone ? "doneTodo" : ""}>{todo.content}</span>
            <button onClick={handleRemoveTodo(todo)}>Remove Todo</button>
          </li>
        ))}
      </ul>
  )
}

export default TodoList;
