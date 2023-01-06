import React from 'react';
import ReactDOM from 'react-dom';
import TaskFilter from '../TaskFilter/TaskFilter';

export default function Footer({remainingTasks, onFilter}) {
    return (
        <footer className='footer'>
            <span className='todo-count'>{remainingTasks()} items left</span>
            <TaskFilter onFilter={onFilter}/>
            <button className='clear-completed'>Clear completed</button>
        </footer>
    )
}