import {React, Component} from 'react';
import ReactDOM from 'react-dom';

export default class Task extends Component {

    render() {
        const {value, isDone, onDeleteTask, onMarkDoneTask} = this.props;
        return (
            <li className={isDone ? "completed" : null}>
            <div className='view'>
                <input className='toggle' type="checkbox" onClick={onMarkDoneTask}/>
                <label>
                    <span className='description'>{value}</span>
                </label>
                <button className='icon icon-edit'></button>
                <button className='icon icon-destroy' onClick={onDeleteTask}></button>
            </div>
            </li>
        );
    }
}