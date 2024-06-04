import React from 'react'
import Todo from './Todo'
import '../css/TodoList.css'

function TodoList({ todosList, onRemoveTodo }) {
    return (
        <div className='todoList'>
            {
                todosList && todosList.map((todo) => (
                    <Todo key={todo.id} todosList={todo} onRemoveTodo={onRemoveTodo} />
                ))
            }
        </div>
    )
}

export default TodoList