import React from 'react';
import ReactDOM from 'react-dom';
import Task from '../Task/Task';

export default function TaskList({data}) {
    let tasks = [];
    for(let i in data) {
        tasks.push(<li><Task value={data[i]}/></li>);
    }
    console.log(tasks)
    return (
        <section>
            <ul className='todo-list'>
                {tasks}
            </ul>
        </section>
    );
}

