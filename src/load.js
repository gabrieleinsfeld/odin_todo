import Project from "./project"
import Todo from "./todo"
import getInfo from "./getInfo"
import displayProject from "./displayProject"

export default function loadPage(){
    const currProject = new Project('Default Project') 
    const randomTodo = new Todo('Random Task', 'This is a task description','This is the due date', 'Low')
    currProject.addTodo(randomTodo)
    
    displayProject(currProject)
    const newTodoBtn = document.getElementById('new_project')
    newTodoBtn.addEventListener('click', ()=>{
        getInfo().then((newTodo) => {
            currProject.addTodo(newTodo)
            displayProject(currProject)
        })
        

        
    })
}