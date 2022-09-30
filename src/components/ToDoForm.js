import React, { useState } from 'react';

const ToDoForm = ({ addTask }) => {

    const [ userInput, setUserInput ] = useState('');

    /*Handle change and reflect most recent input */
    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    /*Used to add the input to the array */
    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(userInput);
        setUserInput("");
    }
    return (
        /*The form of the button and the input textbox */
        <form onSubmit={handleSubmit}>
            <input 
            value={userInput} 
            type="text" 
            onChange={handleChange} 
            placeholder="Enter New Task..."/>

            <button>Submit</button>
        </form>
    );
};

export default ToDoForm;