import React from 'react'
import { MdDelete } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import '../css/Todo.css'
function Todo() {
    return (
        <div className='todo'>
            <div>
                ben ilk todoyum
            </div>
            <div className='todo-icons'>
                <MdDelete />
                <FiEdit />
            </div>
        </div>
    )
}

export default Todo