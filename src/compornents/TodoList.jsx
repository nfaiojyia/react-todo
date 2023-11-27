import React from 'react'
import Todo from './Todo'

const TodoList = ({ todos, compltedToggle }) => {
    return todos.map((todo) => <Todo todo={todo} key={todo.id} compltedToggle={compltedToggle} />);
};

export default TodoList
