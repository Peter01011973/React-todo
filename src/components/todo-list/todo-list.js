import React from 'react';
import TodoListItem from '../todo-list-item/todo-list-item'
import './todo-list.css'

const TodoList = ({ todos, onToggleImportant, onToggleDone, onDelete, onEditComplite }) => { 
    const items = todos.map(
        item => {
            let {id, ...todoItem} = item
            return (
                <li key = {id} className="list-group-item">
                    <TodoListItem 
                        {...todoItem}
                        onToggleImportant = {() => onToggleImportant(id)}
                        onToggleDone = {() => onToggleDone(id)}
                        onDelete = {() => onDelete(id)}
                        onEditComplite = {(label) => onEditComplite(label, id)}
                    />
                </li>
            )
        }
    )
    
    return (
        <ul className="list-group todo-list">
            {items}
        </ul>
    )
}

export default TodoList