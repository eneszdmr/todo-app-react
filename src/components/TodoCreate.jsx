import React, { useState } from 'react'
import '../css/TodoCreate.css'


function TodoCreate({ onCreateTodo }) {

    const [newTodo, setNewTodo] = useState('');

    const createATodo = () => {
        if (!newTodo) return;
        const request = {
            id: Math.floor(Math.random() * 1000),
            title: newTodo
        }
        onCreateTodo(request)
        setNewTodo('')
    }


    return (
        <div className='todo-create'>

            <input value={newTodo} onChange={(e) => setNewTodo(e.target.value)} className='todo-input' type='text' placeholder='Todo Giriniz' />
            <button onClick={createATodo} className='todo-create-button'>Todo Oluştur</button>
        </div>
    )
}

export default TodoCreate