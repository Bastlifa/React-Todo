/// <reference types="cypress" />

describe('visits website', () =>
{
    beforeEach(() =>
    {
        cy.visit('index.html')
    })
    it('types text into the todo field', () =>
    {
        cy.get("[data-cy=todo-form]").type("first todo{enter}")
        cy.get("[data-cy=todo-form]").type("test todo{enter}")
        cy.get("[data-cy=todo-form]").type("third todo{enter}")
        cy.get("[data-cy=todo-h3]").contains("test").should("have.text", "test todo")
    })
    it('adds a todo, clicks it to complete, checks if completed', () =>
    {
        cy.get("[data-cy=todo-form]").type("test todo{enter}")
        const todo = cy.get("[data-cy=todo-h3]").contains("test todo")
        todo.parent().click().should("have.class", "completed")
        todo.should("have.css", "text-decoration", "line-through solid rgb(0, 0, 0)")
    })
    it('Clears completed todos when the tasks are done', () =>
    {
        cy.get("[data-cy=todo-form]").type("test todo{enter}")
        cy.get("[data-cy=todo-form]").type("test todo 2{enter}")
        cy.get("[data-cy=todo-form]").type("test todo 3{enter}")
        const todo = cy.get("[data-cy=todo-h3]").contains("test todo")
        todo.each($el =>
        {
            $el.click()
        })
        cy.get("button").contains("Clear Completed").click()
    })
    it('Should search the todos, filtering what\'s visible', () =>
    {
        cy.get("[data-cy=todo-form]").type("Hello{enter}")
        cy.get("[data-cy=todo-form]").type("Goodbye{enter}")
        cy.get("[data-cy=todo-form]").type("Aloha{enter}")
        cy.get("[data-cy=todo-form]").type("Testword{enter}")
        cy.get("[data-cy=todo-form]").type("Another Hello{enter}")
        cy.get("[data-cy=todo-form]").type("Good Bye{enter}")
        cy.get("[data-cy=search]").type("Hello")
        cy.get("[data-cy=todoList] > div").should("have.length", 2)
    })
})