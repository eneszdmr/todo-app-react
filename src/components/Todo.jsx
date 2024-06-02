import React from 'react'
import { MdDelete } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import '../css/Todo.css'
function Todo({ todosList }) {
    const { id, title } = todosList;

    return (
        <div className='todo'>
            <div>
                {title}
            </div>
            <div className='todo-icons'>
                <MdDelete />
                <FiEdit />
            </div>
        </div>
    )
}

export default Todo