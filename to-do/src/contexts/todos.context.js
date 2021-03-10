import React, { createContext } from 'react';
import useTodoState from '../hooks/UseTodoState';

const defaultTodos = [
  {id: 1 , task: 'task1', completed:false}
];

export const TodosContext = createContext();

export function TodosProvider(props){
  const todosStuff =  useTodoState(defaultTodos);

  return(
    <TodosContext.Provider value={todosStuff}>
      {props.children}
    </TodosContext.Provider>
  )
}
