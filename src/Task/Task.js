import React from 'react';
import ReactDOM from 'react-dom';

export default function Task({value}) {
    return (
        <div className='view'>
            <input className='toggle' type="checkbox"/>
            <label>
                <span className='description'>{value}</span>
            </label>
            <button className='icon icon-edit'></button>
            <button className='icon icon-destroy'></button>
        </div>
    );
}