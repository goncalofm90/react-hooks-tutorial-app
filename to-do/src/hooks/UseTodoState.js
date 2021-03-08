import UseLocalStorageState from './UseLocalStorageState';
import { v4 as uuidv4 } from 'uuid';

const InitialTodos =  InitialTodos => {
  const [todos, setTodos] = UseLocalStorageState("todos", InitialTodos);

  return {
    todos,
    addTodo: newTodoText => {
      setTodos([...todos, {id: uuidv4(), task: newTodoText, completed: false}])
    },
    removeTodo: todoId => {
      const updatedTodos = todos.filter(todo => todo.id !== todoId)
      setTodos(updatedTodos);
    },
    toggleTodo: todoId => {
      const updatedTodos = todos.map(todo => 
          todo.id === todoId ? {...todo, completed: !todo.completed} : todo
        );
        setTodos(updatedTodos);
  },
  editTodo: (todoId, newTask) => {
    const updatedTodos = todos.map(todo=>
      todo.id === todoId ? { ...todo, task: newTask} : todo
      );
      setTodos(updatedTodos);
    }
  }
};

export default InitialTodos;

