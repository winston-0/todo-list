import React from 'react';
import ReactDOM from 'react-dom';
import Task from '../Task/Task';

function TaskList({data}) {
    let tasks = [];
    for(let i in data) {
        tasks.push(<li><Task value={data[i]}/></li>);
    }
    return (
        <section>
            <ul className='taskList'>
                {tasks};
            </ul>
        </section>
    );
}

