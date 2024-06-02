import { useState } from 'react'
import './App.css'
import TodoCreate from './components/TodoCreate'
import TodoList from './components/TodoList'

function App() {

  const [todos, setTodos] = useState([]);

  const createTodo = (todo) => {
    setTodos([...todos, todo]);
  }


  console.log("first todo", todos)
  
  return (
    <div className='App'>
      <div className='create-body '>
        <TodoCreate onCreateTodo={createTodo} />
        <TodoList />
      </div>
    </div>
  )
}

export default App
