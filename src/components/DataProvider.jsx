import React, { useState, useEffect, createContext } from 'react';

export const DataContext = createContext([1, 2]);

export const DataProvider = (props) => {
  const foo = 'bar';
  const [todos, setTodos] = useState([]);

  return (
    <DataContext.Provider value={[todos, setTodos]}>
      {props.children}
    </DataContext.Provider>
  );
};
