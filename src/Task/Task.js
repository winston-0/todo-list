import {React, Component} from 'react';
import ReactDOM from 'react-dom';

export default class Task extends Component {
    state = {
        isDone: false,
    }
    markCompleted = () => {
        this.setState((state) => {
            return {
                isDone: !state.isDone
            }
        })
    }

    render() {
        const {value, deleteTask, id} = this.props;
        return (
            <li className={ this.state.isDone === true ? "completed" : null }>
            <div className='view'>
                <input className='toggle' type="checkbox" onClick={this.markCompleted}/>
                <label>
                    <span className='description'>{value}</span>
                </label>
                <button className='icon icon-edit'></button>
                <button className='icon icon-destroy' onClick={() => deleteTask(id)}></button>
            </div>
            </li>
        );
    }
}