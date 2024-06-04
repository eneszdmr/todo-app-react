import { useState } from 'react'
import './App.css'
import TodoCreate from './components/TodoCreate'
import TodoList from './components/TodoList'

function App() {

  const [todos, setTodos] = useState([]);

  const createTodo = (todo) => {
    setTodos([...todos, todo]);
  }

  const removeTodo = (id) => {
    // setTodos(todos.filter((todo) => todo.id !== id));
    setTodos([...todos.filter((todo) => todo.id !== id)])
  }

  return (
    <div className='App'>
      <div className='create-body '>
        <TodoCreate onCreateTodo={createTodo} />
        <TodoList todosList={todos} onRemoveTodo={removeTodo} />
      </div>
    </div>
  )
}

export default App
