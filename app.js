let todo=[]
let task=prompt("say somthing")
while(true)
{
    
    if(task==="quit"){
        break
    }
    if(task==="new")
    {
        let newTask=prompt("Add a new task")
        todo.push(newTask)
    }
    else if(task==="delete")
    {
        let index=parseInt(prompt("Give the index of the task you want to delete"))
        if(!Number.isNaN(index)){
            todo.splice(index,1)
        }
        else{
            console.log("unknown number")
        }
    }
    else if(task==="list")
    {
        console.log("***************")
        for(let i of todo){
            console.log(`${todo.indexOf(i)}:${i}`)
        }
        console.log("***************")
    }
    task=prompt("say")
    task=task.trim()
}