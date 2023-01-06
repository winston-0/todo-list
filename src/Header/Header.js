import React from 'react';
import ReactDOM from 'react-dom';
import { NewTaskForm } from '../NewTaskForm/NewTaskForm';

export default function Header({onAddTask}) {
    return (
        <header>
            <h1>todos</h1>
            <NewTaskForm onAddTask={onAddTask}/>
        </header>
    )
}