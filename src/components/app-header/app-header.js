import React from 'react'
import './app-header.css'

const AppHeader = ({amountTodo, amountDone}) => {
    return (
        <div className = 'app-header d-flex'>
            <h1>My todo</h1>
            <h2>{amountTodo} todo, {amountDone} done</h2>
        </div>
    )
}

export default AppHeader

                