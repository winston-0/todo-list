import React from 'react';
import ReactDOM from 'react-dom';
import Task from '../Task/Task';

export default function TaskList({data, deleteTask}) {
    let tasks = data.map((el) => {
        return <Task key={el.id} value={el.value} id={el.id} deleteTask={deleteTask}/>
    })
    return (
            <ul className='todo-list'>
                {tasks}
            </ul>
    );
}

