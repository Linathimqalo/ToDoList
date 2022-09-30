import React from 'react';
import ToDo from './ToDo';

const ToDoList = ({toDoList, handleToggle, handleFilter}) => {
    return (
        /*Maps through the array and removes the toggled tasks */
        <div>
            {toDoList.map(todo => {
                return (
                    <ToDo todo={todo} handleToggle={handleToggle} handleFilter={handleFilter}/>
                )
            })}
            
            <button onClick={handleFilter}>Clear Completed</button>
        </div>
    );
};

export default ToDoList;