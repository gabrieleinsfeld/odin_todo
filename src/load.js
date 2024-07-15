import Project from "./project"
import Todo from "./todo"

export default function newTodo(){
    const newTodoBtn = document.getElementById('new_project')
    newTodoBtn.addEventListener('click', ()=>{
        getInfo()
    })

    function getInfo(){
        const dialog = document.getElementById('info_display')
        dialog.showModal()
        const titleInput = document.getElementById('title')
        const descriptionInput = document.getElementById('description')
        const dueDateInput = document.getElementById('due_date')
        const priorityInput = document.getElementById('priority')
        const submitInput = document.getElementById('submit')
        const inputs = [titleInput, descriptionInput, dueDateInput, priorityInput]
        submitInput.addEventListener('click', (e)=>{
            e.preventDefault()
            dialog.close()

            let i = [titleInput.value, descriptionInput.value, dueDateInput.value,priorityInput.value]
            const newTodo = new Todo(i[0],i[1],i[2],i[3])
            for (let index = 0; index < inputs.length; index++) {
                let element = inputs[index];
                element.value = ''
                
            }
        })
        return newTodo
    }
}