import updateProjectList from "./projectList";
import loadProject from "./loadProject";
import Project from "./project";
import Todo from "./todo";



const update = updateProjectList([])
const container = document.getElementById('projects')
const currProject = new Project('Default Project') 
const randomTodo = new Todo('Random Task', 'This is a task description','This is the due date', 'Low')
currProject.addTodo(randomTodo)
update(currProject)
export default function loadPage(){
    projects.innerHTML = ''
    const list = update()
    for (let index = 0; index < list.length; index++) {
        const element = list[index];
        // Create a div for the new project
        const newProject = document.createElement('div')
        projects.appendChild(newProject)

        // Create the title of the div
        const titleDiv = document.createElement('h1')
        titleDiv.textContent = element.title
        newProject.appendChild(titleDiv)  
        

        titleDiv.addEventListener('click', ()=>{
            loadProject(element)
        })
    }
    const newProjectBtn = document.createElement('button')
    newProjectBtn.textContent = 'New Project'
    newProjectBtn.addEventListener('click', ()=>{
        const dialog = document.getElementById('new_project_info')
        dialog.showModal()
        const projectTitleInput = document.getElementById('project_title')
        const submitInput = document.getElementById('get_project_title')
        submitInput.replaceWith(submitInput.cloneNode(true));
        const newSubmitInput = document.getElementById('get_project_title');
        newSubmitInput.addEventListener('click', (e) => {
            e.preventDefault();
            dialog.close();
            const pj = new Project(projectTitleInput.value);   
            // Clear the input fields
            projectTitleInput.value = '';     
            update(pj)
            loadPage()
        })
    })
    projects.appendChild(newProjectBtn)
    loadProject(currProject)
    
}