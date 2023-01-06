import React from 'react';
import ReactDOM from 'react-dom';

export default function TaskFilter({onFilter}) {
    return (
        <ul className='filters'>
            <li>
                <button onClick={()=>onFilter('all')} className='selected'>All</button>
            </li>
            <li>
                <button onClick={()=>onFilter('active')}>Active</button>
            </li>
            <li>
                <button onClick={()=>onFilter('completed')}>Completed</button>
            </li>
        </ul>
    )
}