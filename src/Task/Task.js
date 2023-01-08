import {React, Component} from 'react';
import ReactDOM from 'react-dom';

export default class Task extends Component {
    state = {
        checkboxStatus : false
    }
    changeCheckBoxStatus = (e) => {
        this.setState({
            checkboxStatus: e.target.checked
        })
    }
    render() {
        const {value, isDone, onDeleteTask, onMarkDoneTask} = this.props;
        const {checkboxStatus} = this.state;
        return (
            <li className={isDone ? "completed" : null}>
            <div className='view'>
                <input onChange={(e) => this.changeCheckBoxStatus(e)} checked={checkboxStatus || isDone} className='toggle' type="checkbox" onClick={onMarkDoneTask}/>
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