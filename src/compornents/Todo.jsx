import React from 'react'
import GetDate from "./GetDate";

const Todo = ({ todo, compltedToggle }) => {
    const handleTodoClick = () => {
        compltedToggle(todo.id);
    };

    return (
        <div className="TodoList">
            <label>
                <input type="checkbox" checked={todo.complated} readOnly onChange={handleTodoClick} />
            </label>
            {todo.name}
            <label className="CreateDate">
                <GetDate />
            </label>
        </div>
    )
}

export default Todo
