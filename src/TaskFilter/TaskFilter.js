import React, { useState } from 'react'

export default function TaskFilter(props) {
  const { onFilter } = props

  const [activeButton, setActiveButton] = useState('all')

  const filterbuttons = [{ label: 'all' }, { label: 'active' }, { label: 'completed' }]
  const changeButton = (e) => {
    setActiveButton(e.target.textContent)
  }
  const buttons = filterbuttons.map((el) => {
    const { label } = el
    return (
      <li key={Math.random() + 1}>
        <button
          className={activeButton === label ? 'selected' : null}
          onClick={(e) => {
            onFilter(label)
            changeButton(e)
          }}
          type="button"
        >
          {label}
        </button>
      </li>
    )
  })
  return <ul className="filters">{buttons}</ul>
}
