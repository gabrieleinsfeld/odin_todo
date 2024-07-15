
import getInfo from "./getInfo"
import loadPage from "./loadPage"


export default function loadProject(project){ 
    const todos = document.getElementById('todos')
    todos.textContent = ''
     // Create a div for the new project
    const newProjectDiv = document.createElement('div')
    newProjectDiv.setAttribute('id', 'project_name')
    todos.appendChild(newProjectDiv)
    const todoContainer = document.createElement('div')
    todoContainer.setAttribute('id', 'todo_container')
    todos.appendChild(todoContainer)
    // Create the title of the div
    const titleDiv = document.createElement('div')
    titleDiv.textContent = project.title
    newProjectDiv.appendChild(titleDiv) 
    const submitInput = document.createElement('button')
    submitInput.addEventListener('click', ()=>{
        getInfo().then((newTodo) => {
            project.addTodo(newTodo)
            loadProject(project)
        })
    })
    submitInput.textContent = 'Add todo'
    newProjectDiv.appendChild(submitInput)



    for (let index = 0; index < project.list.length; index++) {
        const element = project.list[index];
        // Create a div for the todos
        const t = document.createElement('div')
        todoContainer.appendChild(t)
        t.classList.add('card')

        // Create title for the todo
        const todoTitle = document.createElement('h3')
        todoTitle.textContent = element.title
        t.appendChild(todoTitle)

        // Create description for the todo
        const todoDescription = document.createElement('p')
        todoDescription.textContent = element.description
        t.appendChild(todoDescription)

        // Create dueDate for the todo
        const todoDueDate = document.createElement('p')
        todoDueDate.textContent = element.dueDate
        t.appendChild(todoDueDate)

        // Create priority for the todo
        const todoPriority = document.createElement('p')
        todoPriority.textContent = element.priority
        t.appendChild(todoPriority)
    }
}