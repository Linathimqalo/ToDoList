import React from 'react';

const ToDo = ({todo, handleToggle}) => {

    const handleClick = (e) => {
        e.preventDefault()
        handleToggle(e.currentTarget.id)
    }

    return (
        /*The strikethrough for our todo list and linked to the clear completed button. */
        <div 
        id={todo.id} 
        key={todo.id + todo.task} 
        name="todo" 
        value={todo.id} 
        onClick={handleClick} 
        className={todo.complete ? "todo strike" : "todo"}>
            {todo.task}
        </div>
    );
};

export default ToDo;