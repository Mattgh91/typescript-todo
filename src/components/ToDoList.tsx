import React from 'react';
import './TodoList.css'

interface ToDoListProps {
    toDos: {id: string, text: string}[];
    toDoDeleteHandler: (toDoId: string) => void;
}

const ToDoList: React.FC<ToDoListProps> = ({ toDos, toDoDeleteHandler }) => {
    return (
        <ul>
            {toDos.map(todo => (
                <li key={todo.id}>
                    <span>{todo.text}</span>
                    <button onClick={() => toDoDeleteHandler(todo.id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
};

export default ToDoList;
