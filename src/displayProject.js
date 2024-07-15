export default function displayProject(project){
    const container = document.getElementById('container')
    container.textContent = ''
     // Create a div for the new project
     const newProject = document.createElement('div')
     container.appendChild(newProject)

     // Create the title of the div
     const titleDiv = document.createElement('h1')
     titleDiv.textContent = project.title
     newProject.appendChild(titleDiv) 
    for (let index = 0; index < project.list.length; index++) {
        const element = project.list[index];
        // Create a div for the todos
        const t = document.createElement('div')
        newProject.appendChild(t)

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