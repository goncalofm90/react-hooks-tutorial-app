import React from 'react';
import EditTodoForm from './EditTodoForm';
import useToggleState from './hooks/UseToggleState';
import ListItem from '@material-ui/core/ListItem';
import Checkbox from "@material-ui/core/Checkbox";
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

function Todo({task, completed, removeTodo, toggleTodo, editTodo, id}) {
  const [isEditing, toggle] = useToggleState(false);
  return (
    <ListItem style={{height:"64px"}}>
      {isEditing ? (
      <EditTodoForm 
      editTodo={editTodo} 
      id={id} 
      task={task}
      toggleEditForm={toggle}
      />
      ) : (
      <>
      <Checkbox 
        tabIndex={-1} 
        checked={completed}  
        onClick={() => 
        toggleTodo(id)}
        />
        <ListItemText style={{textDecoration: completed ? "line-through" : "none"}}>
          {task}
        </ListItemText>
        <ListItemSecondaryAction>
          <IconButton aria-label="Delete" onClick={() => removeTodo(id)}>
            <DeleteIcon />
          </IconButton>
          <IconButton>
            <EditIcon aria-label="Edit" onClick={toggle}/>
          </IconButton>
        </ListItemSecondaryAction>
        </>
      )
}
    </ListItem>
  )
}

export default Todo
