import React, { useState, useCallback, useMemo } from 'react';

const TodoForm = ({
  todos,
  setTodos,
}) => {
  const [newTodo, setNewTodo] = useState('');

  const handleNewTodoChange = useCallback((event) => {
    setNewTodo(event.target.value);
  }, []);

  const handleSubmitTodo = useCallback((event) => {
    event.preventDefault();
    setTodos([...todos, {
      id: todos.length ? todos[todos.length - 1].id + 1 : todos.length + 1,
      content: newTodo,
      isDone: false,
    }]);
    setNewTodo('');
  }, [todos, newTodo, setTodos]);

  return(
    <form onSubmit={handleSubmitTodo}>
      <label htmlFor='newTodo'>Enter a todos</label>
      <input
        id='newTodo'
        name='newTodo'
        onChange={handleNewTodoChange}
        value={newTodo}
      />
      <button type='submit' disabled={!newTodo}>Add Todo</button>
    </form>
  );
}

export default TodoForm;
