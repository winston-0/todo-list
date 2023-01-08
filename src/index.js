import {React, Component} from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Header/Header';
import TaskList from './TaskList/TaskList';
import Footer from './Footer/Footer';
import './index.css'



class TodoApp extends Component {
    maxID = 0;
    state = {
        data: [
            this.createTask('finish education'),
            this.createTask('drink some coffe'),
            this.createTask('go pee'),
        ],
        filter: 'all'
    }

    createTask(value) {
        return {
            id: this.maxID += 1,
            value,
            isImportant: false,
            isDone: false,
        }
    }
    deleteTask = (id) => {
        this.setState(() => {
            const {data} = this.state;
            const indexOfItem = data.findIndex(el => el.id === id);
            const newData = [...data.slice(0, indexOfItem), ...data.slice(indexOfItem + 1)];
            return {
                data: newData
            }
        })
    }
    markDoneTask = (id) => {
        this.setState(({data}) => {
            const indexOfItem = data.findIndex(el => el.id === id);
            const newItem = {...data[indexOfItem], isDone: !data[indexOfItem]['isDone']};
            const newData = [...data.slice(0, indexOfItem), newItem, ...data.slice(indexOfItem + 1)];
            return {
                data: newData
            }
        })
    }
    remainingTasks = () => {
        const {data} = this.state;
        const completedTasks = data.filter(el => el.isDone).length;
        return data.length - completedTasks;
    }
    addTask = (value) => {
        let newTask = this.createTask(value);
        this.setState(({data}) => {
            const newData = [newTask, ...data.slice(0)];
            return {
                data: newData
            }
        })
    }
    FilterStatus = (status) => {
        const {filter} = this.state;
        if(status === 'all') {
            this.setState({
                filter: 'all'
            })
        } else if(status === 'completed') {
            this.setState({
                filter: 'completed'
            }) 
        } else if(status === 'active') {
            this.setState({
                filter: 'active'
            })
        }
    }
    filterTask = (condition) => {
        const {data} = this.state;
        if(condition === 'all') {
            return  [...data];
        } else if(condition === 'completed') {
            return  data.filter(el => el.isDone === true);
        } else if(condition === 'active') {
            return  data.filter(el => el.isDone === false);
        }
    }
    clearAllCompleted = () => {
        const {data} = this.state;
        const newArr = data.filter(el => !el.isDone);
        this.setState({
            data: newArr
        })
    }
    render() {
        const {data, filter} = this.state;
        let visisbleElements = this.filterTask(filter);
        return (
            <section className='todoapp'>
                <Header onAddTask={this.addTask}/>
                <section className='main'>
                    <TaskList data={visisbleElements} onDeleteTask={this.deleteTask} onMarkDoneTask={this.markDoneTask}/>
                    <Footer deleteCompleted={this.clearAllCompleted} onFilter={this.FilterStatus} remainingTasks={this.remainingTasks}/>
                </section>
            </section>
        )
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<TodoApp/>);