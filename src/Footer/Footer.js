import React from 'react';
import ReactDOM from 'react-dom';
import TaskFilter from '../TaskFilter/TaskFilter';

export default function Footer() {
    return (
        <footer className='footer'>
            <span className='todo-count'>{document.querySelectorAll('.todo-list li').length} items left</span>
            <TaskFilter/>
            <button className='clear-completed'>Clear completed</button>
        </footer>
    )
}