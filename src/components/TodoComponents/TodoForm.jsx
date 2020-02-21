import React from "react"
import { StyledForm } from '../../styledComps'

const TodoForm = (props) =>
{
    const { handleTextInput, currentInputText, addTodo, clearCompleted, handleSearchInput, currentSearchInput } = props

    return (
        <StyledForm className="todo-form" onSubmit={event => event.preventDefault()}>
            <input type="text" onChange={handleTextInput} value={currentInputText} placeholder={`todo`}/>
            <input type="text" onChange={handleSearchInput} value={currentSearchInput} placeholder={`Search Todos`}/>
            <button onClick={addTodo}>Add Todo</button>
            <button onClick={clearCompleted}>Clear Completed</button>
        </StyledForm>
    )
}

export default TodoForm