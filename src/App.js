import React, { useCallback, useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const App = () => {
  const [todos, setTodos] = useState([]);

  const handleRemoveAllDone = useCallback(() => {
    const newTodos = todos.filter((todo) => !todo.isDone);
    setTodos(newTodos);
  }, [todos]);

  const handleMarkAll = useCallback(() => {
    setTodos(todos.map((todo) => ({...todo, isDone: true})))
  }, [todos]);

  return (
    <div className='container'>
      <TodoForm
        todos={todos}
        setTodos={setTodos}
      />
        <button onClick={handleMarkAll}>Mark All</button>
        <button onClick={handleRemoveAllDone}>Remove Completed Todos</button>
      <TodoList
        todos={todos}
        setTodos={setTodos}
      />
    </div>
  );
};

export default App;
