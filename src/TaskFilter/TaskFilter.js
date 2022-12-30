import React from 'react';
import ReactDOM from 'react-dom';

export default function TaskFilter() {
    return (
        <ul className='filters'>
            <li>
                <button className='selected'>All</button>
            </li>
            <li>
                <button>Active</button>
            </li>
            <li>
                <button>Completed</button>
            </li>
        </ul>
    )
}