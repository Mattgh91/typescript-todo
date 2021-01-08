import React, { useState } from 'react';
import './App.css';
import ToDoList from './components/ToDoList';
import NewToDo from './components/NewToDo';
import ToDoStateModel from './models/todostate.model';

const App: React.FC = () => {
    const [toDos, setToDos] = useState<ToDoStateModel[]>([]);

    const toDoAddHandler = (text: string) => {
        console.log('text:', text);
        setToDos(prevToDos => [
            ...prevToDos,
            { id: Math.random().toString(), text: text }
        ]);
    };

    const toDoDeleteHandler = (toDoId: string) => {
        setToDos(prevToDos => {
            return prevToDos.filter(todo => todo.id !== toDoId);
        })
    };

    return (
        <div className="App">
            <NewToDo toDoAddHandler={toDoAddHandler} />
            <ToDoList toDos={toDos} toDoDeleteHandler={toDoDeleteHandler} />
        </div>
    );
};

export default App;
