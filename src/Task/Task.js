import {React, Component} from 'react';
import ReactDOM from 'react-dom';
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import { parseISO } from 'date-fns';

export default class Task extends Component {
    state = {
        checkboxStatus : false,
        editing: false,
        editingValue: this.props.value
    }
    static defaultProps = {
        isDone: false,
        whenCreated: new Date().toISOString(),
    }
    changeCheckBoxStatus = (e) => {
        this.setState({
            checkboxStatus: e.target.checked
        })
    }
    editTask = () => {
        this.setState((state) => {
            return {
                editing: !state.editing
            }
        })
    }
    changeInputValue = (e) => {
        this.setState({
            editingValue: e.target.value
        }) 
    }

    render() {
        const {value, isDone, onDeleteTask, onMarkDoneTask, whenCreated, onEdit, id} = this.props;
        const {checkboxStatus, editing, editingValue} = this.state;
        return (
            <li className={isDone ? "completed" : null || editing ? 'editing' : null}>
            <div className='view'>
                <input onChange={(e) => this.changeCheckBoxStatus(e)} checked={checkboxStatus || isDone} className='toggle' type="checkbox" onClick={onMarkDoneTask}/>
                <label>
                    <span className='description'>{value}</span>
                    <span className='created'>{formatDistanceToNow(parseISO(whenCreated))} ago</span>
                </label>
                <button onClick={this.editTask} className='icon icon-edit'></button>
                <button className='icon icon-destroy' onClick={onDeleteTask}></button>
            </div>

             {editing === true ?
             (<form onSubmit={(e) => {e.preventDefault(); onEdit(editingValue, id); this.editTask()}}>
                <input onChange={(e) => this.changeInputValue(e)} value={editingValue} type='text' className='edit'></input>
              </form>)
             : null}
            </li>
        );     
    }
}