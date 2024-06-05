import React from 'react'
import Todo from './Todo'
import '../css/TodoList.css'

function TodoList({ todosList, onRemoveTodo, onUpdateTodo }) {
    return (
        <div className='todoList'>
            {
                todosList && todosList.map((todo) => (
                    <Todo key={todo.id} todosList={todo} enes={onRemoveTodo} bayram={onUpdateTodo} />
                ))
            }
        </div>
    )
}

export default TodoList