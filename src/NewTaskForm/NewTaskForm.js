import React from 'react';
import ReactDOM from 'react-dom';


export function NewTaskForm() {
    return (
       <input type='text' className='new-todo' placeholder='What needs to be done?' autoFocus></input>
    );
}