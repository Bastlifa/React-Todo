// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react"
import Todo from './Todo'

const TodoList = (props) =>
{
    const { todoData, toggleCompleted } = props
    return (
        <div data-cy="todoList">
            {todoData.map(todo => 
                {
                    console.log(todo.completed)
                    return (
                        <Todo todo={todo} key={todo.id} toggleCompleted={toggleCompleted} compClass={todo.completed ? "completed" : ""}/>
                    )
                })}
        </div>
    )
}

export default TodoList