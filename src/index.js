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
        ]   
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

    render() {
        const {data} = this.state;
        return (
            <section className='todoapp'>
                <Header/>
                <section className='main'>
                    <TaskList data={data} onDeleteTask={this.deleteTask} onMarkDoneTask={this.markDoneTask}/>
                    <Footer remainingTasks={this.remainingTasks}/>
                </section>
            </section>
        )
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<TodoApp/>);