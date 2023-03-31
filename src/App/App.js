import { React, useState, useEffect, useMemo } from 'react'

import Header from '../Header/Header'
import TaskList from '../TaskList/TaskList'
import Footer from '../Footer/Footer'
import '../index.css'

export default function TodoApp() {
  const createTask = (value, min = '05', sec = '00') => {
    return {
      id: Math.random() * 20,
      value,
      isImportant: false,
      isDone: false,
      whenCreated: new Date().toISOString(),
      min,
      sec,
    }
  }

  const initialDataCreate = useMemo(() => {
    const initialData = [createTask('go walk'), createTask('finish kata'), createTask('drink coffe')]
    return initialData
  }, [])

  const [data, setData] = useState(JSON.parse(localStorage.getItem('data')) || initialDataCreate)
  const [filter, setFilter] = useState(JSON.parse(localStorage.getItem('filter')) || 'all')

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(data))
  }, [data])

  useEffect(() => {
    localStorage.setItem('filter', JSON.stringify(filter))
  }, [filter])

  const saveTime = (id, min, sec) => {
    const indexOfItem = data.findIndex((el) => el.id === id)
    const newItem = { ...data[indexOfItem], min, sec }
    const newData = [...data.slice(0, indexOfItem), newItem, ...data.slice(indexOfItem + 1)]
    setData(newData)
  }

  const deleteTask = (id) => {
    const indexOfItem = data.findIndex((el) => el.id === id)
    const newData = [...data.slice(0, indexOfItem), ...data.slice(indexOfItem + 1)]
    setData(newData)
  }

  const editTask = (value, id) => {
    const indexOfItem = data.findIndex((el) => el.id === id)
    const newItem = { ...data[indexOfItem], value: value }
    const newData = [...data.slice(0, indexOfItem), newItem, ...data.slice(indexOfItem + 1)]
    setData(newData)
  }

  const markDoneTask = (id) => {
    const indexOfItem = data.findIndex((el) => el.id === id)
    setData((data) => {
      const newItem = {
        ...data[indexOfItem],
        isDone: !data[indexOfItem]['isDone'],
      }
      const newData = [...data.slice(0, indexOfItem), newItem, ...data.slice(indexOfItem + 1)]
      return newData
    })
  }

  const remainingTasks = () => {
    const completedTasks = data.filter((el) => el.isDone).length
    return data.length - completedTasks
  }

  const addTask = ({ value, min, sec }) => {
    if (min === '') {
      min = '0' + min
    }
    if (sec === '') {
      sec = '0' + sec
    }
    let newTask = createTask(value, min.length === 1 ? '0' + min : min, sec.length === 1 ? '0' + sec : sec)
    setData((data) => {
      const newData = [newTask, ...data.slice(0)]
      return newData
    })
  }

  const filterStatus = (status) => {
    setFilter(status)
  }

  const filterTask = (condition) => {
    if (condition === 'all') {
      return [...data]
    } else if (condition === 'completed') {
      return data.filter((el) => el.isDone === true)
    } else if (condition === 'active') {
      return data.filter((el) => el.isDone === false)
    }
  }
  const clearAllCompleted = () => {
    const newArr = data.filter((el) => !el.isDone)
    setData(newArr)
  }

  const visisbleElements = filterTask(filter)

  return (
    <section className="todoapp">
      <Header onAddTask={addTask} />
      <section className="main">
        <TaskList
          onEdit={editTask}
          data={visisbleElements}
          onDeleteTask={deleteTask}
          onMarkDoneTask={markDoneTask}
          onSaveTime={saveTime}
        />
        <Footer deleteCompleted={clearAllCompleted} onFilter={filterStatus} remainingTasks={remainingTasks} />
      </section>
    </section>
  )
}
