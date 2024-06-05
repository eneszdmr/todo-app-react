import React, { useState } from 'react'
import { MdDelete } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { FaCheckSquare } from "react-icons/fa";
import '../css/Todo.css'


function Todo({ todosList, enes, bayram }) {
    const { id, title } = todosList;
    const [edit, setEdit] = useState(false);
    const [newtodo, setNewtodo] = useState(title);

    const updateTodo = () => {
        const request = {
            id: id,
            title: newtodo
        }
        bayram(request)
        setEdit(false)
    }

    return (
        <div className='todo'>
            <div>
                {
                    edit ? <input className='todo-input' style={{ width: '300px' }} value={newtodo}
                        onChange={(e) => setNewtodo(e.target.value)} /> : title
                }
            </div>
            <div className='todo-icons'>
                <MdDelete onClick={() => enes(id)} />
                {
                    edit ? <FaCheckSquare onClick={updateTodo} /> : <FiEdit onClick={() => setEdit(true)} />
                }

            </div>
        </div>
    )
}

export default Todo