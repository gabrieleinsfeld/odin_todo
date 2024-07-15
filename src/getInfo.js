import Todo from "./todo"

export default function getInfo(){
    const dialog = document.getElementById('info_display')
    dialog.showModal()
    const titleInput = document.getElementById('title')
    const descriptionInput = document.getElementById('description')
    const dueDateInput = document.getElementById('due_date')
    const priorityInput = document.getElementById('priority')
    const submitInput = document.getElementById('submit')
    return new Promise((resolve) => {
        submitInput.addEventListener('click', (e) => {
            e.preventDefault();
            dialog.close();

            const newTodo = new Todo(
                titleInput.value,
                descriptionInput.value,
                dueDateInput.value,
                priorityInput.value
            );

            // Clear the input fields
            titleInput.value = '';
            descriptionInput.value = '';
            dueDateInput.value = '';
            priorityInput.value = '';

            resolve(newTodo);
        }, { once: true }); // Ensures the event listener is removed after the first call
    });
}

