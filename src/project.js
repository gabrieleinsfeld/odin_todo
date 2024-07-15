export default class Project {
    constructor(title){
        this.title = title
        this.list = []
    }
    addTodo(todo){
        this.list.push(todo)
        console.log(this.list)
    }
    removeTodo(todo){
        console.log(this.list)
        for (let index = 0; index < this.list.length; index++) {
            const element = this.list[index];
            console.log(element.title, '+', todo.title)
            if (element.title == todo.title){
                this.list.splice(index,1)
                console.log('true')
                console.log(this.list)
                return true
            }
        }
        return false
    }
    
}