import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class TaskFilter extends Component {
    state = {
        activeButton : 'all'
    }

    filterbuttons = [
        { label: 'all' },
        { label: 'active' },
        { label: 'completed' },
      ];
    changeButton = (e) => {
        this.setState({
            activeButton: e.target.textContent
        })
    }
    render() {
    const {onFilter} = this.props;
    const {activeButton} = this.state
    const buttons = this.filterbuttons.map((el) => {
        const { label} = el;
        return <li key={Math.random() + 1}>
            <button
                className={activeButton === label ? 'selected' : null}
                onClick={(e) => {onFilter(label); this.changeButton(e)}}
                type='button'>
            {label}</button>
        </li>
    })
      return (
        <ul className='filters'>
            {buttons}
        </ul>
    )
  }
}