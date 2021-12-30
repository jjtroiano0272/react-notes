import React, { useState, useContext } from 'react';
import { DataContext } from './DataProvider';

export default function FormInput() {
  const [todos, setTodos] = useContext(DataContext);
  const [todoName, setTodoName] = useState('');

  const addTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, { name: todoName, complete: false }]);
    setTodoName('');
  };

  return (
    <form autoComplete='off' onSubmit={addTodo}>
      <input
        type='text'
        name='todos'
        id='todos'
        required
        placeholder=' What item do you need?'
        value={todoName}
        onChange={(e) => setTodoName(e.target.value.toLowerCase())}
      />
      {/* This input is for Price
      <input type="text" required placeholder="Price (estimated)" /> */}

      <button type='submit'>Add</button>
    </form>
  );
}
