import {React, Component} from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Header/Header';
import TaskList from './TaskList/TaskList';
import Footer from './Footer/Footer';
import './index.css'



class TodoApp extends Component {
    state = {
        data: [
            {id: 1, value: 'make website', isImportant: true},
            {id: 2, value: 'drink coffe', isImportant: false},
            {id: 3, value: 'go pee', isImportant: false}
        ]   
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

    render() {
        const {data} = this.state;
        return (
            <section className='todoapp'>
                <Header/>
                <section className='main'>
                    <TaskList data={data} deleteTask={this.deleteTask}/>
                    <Footer/>
                </section>
            </section>
        )
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<TodoApp/>);