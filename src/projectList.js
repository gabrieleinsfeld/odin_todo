export default function updateProjectList(array){
    const list = array
    return function(newProject = ''){
        if(newProject != ''){
            list.push(newProject)
        }
        return list
    }
}