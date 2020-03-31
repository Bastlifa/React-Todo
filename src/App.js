import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm'
import TodoList from './components/TodoComponents/TodoList';
import './App.css'

import { AppContainer } from './styledComps'


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
    constructor()
    {
        super()
        this.state = {
            todoData: [],
            currentInputText: "",
            currentSearchInput: "",
        }
    this.handleTextInput = this.handleTextInput.bind(this)
    }

  // handleTextInput = (event) => this.setState({currentInputText: event.target.value})

    fetchFromLS = () =>
    {
        if (localStorage.getItem("todoData"))
        {
        let tempData = JSON.parse(localStorage.getItem("todoData"))
        this.setState({todoData: tempData})
        this.setState({displayedTodos: tempData})
        }
    }

    pushToLS = () =>
    {
        localStorage.setItem("todoData", JSON.stringify(this.state.todoData))
    }

    componentDidMount()
    {
        this.fetchFromLS()
    }

    componentDidUpdate(prevState)
    {
        if (this.state.todoData !== prevState.todoData) this.pushToLS()
    }

    handleTextInput(event)
    {
        this.setState({currentInputText: event.target.value})
    }

    handleSearchInput = event =>
    {
        this.setState({currentSearchInput: event.target.value})
        console.log('currentSearchInput', this.state.currentSearchInput)
    }

    addTodo = event =>
    {
        const tempTodos = this.state.todoData

        if (this.state.currentInputText === "") return
        
        tempTodos.push({
        task: this.state.currentInputText,
        id: Date.now(),
        completed: false
        })
        this.setState({todoData: tempTodos})
        this.setState({currentInputText: ""})
        
    }

    clearCompleted = _ =>
    {
        let tempTodos = this.state.todoData.filter(todo => todo.completed === false)
        this.setState({todoData: tempTodos})
        
    }

    toggleCompleted = (event, todoID) =>
    {
        event.stopPropagation()
        event.target.classList.toggle("completed")
        let tempTodos = this.state.todoData.map(todo => todo.id === todoID ? ({...todo, completed: !todo.completed}) : todo )
        this.setState({todoData: tempTodos})
    }

    render() {
        const { todoData, currentSearchInput } = this.state
        const displayedTodos = todoData.filter(todo => todo.task.toLowerCase().includes(currentSearchInput.toLowerCase()))
        return (
        <AppContainer>
            <br />
            <h2>Eli's Todo App!</h2>
            <TodoForm 
            handleTextInput={this.handleTextInput} 
            currentInputText={this.state.currentInputText} 
            addTodo={this.addTodo}
            clearCompleted={this.clearCompleted}
            handleSearchInput={this.handleSearchInput}
            currentSearchInput={this.state.currentSearchInput}
            />
            <TodoList 
                data-cy="todoList"
                todoData={displayedTodos} 
                toggleCompleted={this.toggleCompleted}
            />
            
        </AppContainer>
        );
    }
}

export default App;
