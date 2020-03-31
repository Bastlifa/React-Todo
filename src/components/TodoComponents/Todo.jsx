import React from "react"
import { TodoH2Div, TodoH3 } from '../../styledComps'

import './Todo.css'

const Todo = (props) =>
{
    const { todo, toggleCompleted, compClass } = props

    return (
        <TodoH2Div onClick={event => toggleCompleted(event, todo.id)} className={compClass} >
            <TodoH3 data-cy="todo-h3">{todo.task}</TodoH3>
        </TodoH2Div>
    )
}

export default Todo