import React from 'react';
import {TodosProvider} from './contexts/todos.context';
import TodoForm from './TodoForm';
import TodoList from './TodoList'
import Typography from "@material-ui/core/Typography"
import Paper from "@material-ui/core/Paper"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Grid from "@material-ui/core/Grid"


function TodoApp(){
 
  return(
    <Paper 
      style={{
      padding: 0,
      margin: 0,
      height: "100vh",
      backgroundColor: "#fafafa",
      }}
    elevation={0}
    >
    <AppBar color='primary' position='static' style={{height:'64px'}}>
      <Toolbar>
        <Typography color='inherit'>To-Do's with Hooks</Typography>
          </Toolbar>
        </AppBar>
        <Grid container justify="center" style={{marginTop: "1rem"}}>
          <Grid item cs={11} md={8} lg={4}>
            <TodosProvider>
          <TodoForm addTodo />
          <TodoList />
          </TodosProvider>
          </Grid>
        </Grid>  
      </Paper>
  
  );
}
export default TodoApp;