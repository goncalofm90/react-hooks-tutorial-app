import React, { createContext, useReducer } from 'react';
import todoReducer from '../reducers/todo.reducer'
import useTodoState from '../hooks/UseTodoState';

const defaultTodos = [
  {id: 1 , task: 'task1', completed:false}
];

export const TodosContext = createContext();

export function TodosProvider(props){
  const [todos, dispatch] = useReducer(todoReducer, defaultTodos)

  return(
    <TodosContext.Provider value={{todos, dispatch}}>
      {props.children}
    </TodosContext.Provider>
  )
}
