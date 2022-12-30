import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Header/Header';
import TaskList from './TaskList/TaskList';
import Footer from './Footer/Footer';
import './index.css'

const data = {
    task1 : 'Completed task',
    task2 : 'Editing task',
    task3 : 'Active task'
}

function TodoApp() {
    return (
        <section className='todoapp'>
            <Header/>
            <section className='main'>
                <TaskList data={data}/>
                <Footer/>
            </section>
        </section>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<TodoApp/>);