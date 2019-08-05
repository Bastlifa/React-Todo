import React from "react"
import { StyledForm } from '../../styledComps'

const TodoForm = (props) =>
{
    const { handleTextInput, currentInputText, addTodo, clearCompleted } = props

    return (
        <StyledForm className="todo-form" onSubmit={event => event.preventDefault()}>
            <input type="text" onChange={handleTextInput} value={currentInputText} placeholder={`todo`}/>
            <button onClick={addTodo}>Add Todo</button>
            <button onClick={clearCompleted}>Clear Completed</button>
        </StyledForm>
    )
}

export default TodoForm