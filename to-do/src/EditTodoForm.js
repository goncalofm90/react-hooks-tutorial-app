import React, { useContext } from 'react'
import {TodosContext} from './contexts/todos.context'
import TextField from '@material-ui/core/TextField';
import useInputState from './hooks/UseInputState';



function EditTodoForm({id,task, toggleEditForm}) {
  const { editTodo } = useContext(TodosContext);
  const [value, handleChange, reset] = useInputState(task);
  
  return (
  <form onSubmit={(e) => {
  e.preventDefault();
  editTodo(id, value);
  reset();
  toggleEditForm();
   }}
  style={{marginLeft:"1rem", width:"100%"}}
   >
  <TextField 
  margin="normal" 
  value={value} 
  onChange={handleChange} 
  fullWidth 
  autoFocus
  />
  </form>
  );
}

export default EditTodoForm