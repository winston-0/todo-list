import React from 'react';
import ReactDOM from 'react-dom';
import Task from '../Task/Task';

export default function TaskList({data, onDeleteTask, onMarkDoneTask}) {
    let tasks = data.map((el) => {
        const {id, ...otherProps} = el;
        return <Task
         {...otherProps} 
         key={id} 
         onDeleteTask={() => onDeleteTask(el.id)}
         onMarkDoneTask={() => onMarkDoneTask(el.id)}
        />
    })
    return (
            <ul className='todo-list'>
                {tasks}
            </ul>
    );
}

