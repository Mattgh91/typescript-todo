import React, { useRef } from 'react';
import './NewTodo.css';

interface NewToDoProps {
    toDoAddHandler: (text: string) => void,
}

const NewToDo: React.FC<NewToDoProps> = ({ toDoAddHandler }) => {
    const textInputRef = useRef<HTMLInputElement>(null);

    const toDoSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredText = textInputRef.current!.value;

        toDoAddHandler(enteredText);
    };

    return (
        <form onSubmit={toDoSubmitHandler}>
            <div className="form-control">
                <label htmlFor="todo-text"> Todo Text</label>
                <input type="text" id="todo-text" ref={textInputRef} />
            </div>
            <button type="submit">ADD TODO</button>
        </form>
    );
};

export default NewToDo;
