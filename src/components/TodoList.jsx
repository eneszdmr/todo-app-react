import React from 'react'
import Todo from './Todo'
import '../css/TodoList.css'

function TodoList({ todosList }) {
    return (
        <div className='todoList'>
            {
                todosList && todosList.map((todo) => (
                    <Todo key={todo.id} todosList={todo} />
                ))
            }
        </div>
    )
}

export default TodoList