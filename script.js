let task=[];

const addtask=()=>{
    const taskinput=document.getElementById('taskinput');
    const text=task.value.trim();
if(text){
    task.push({text:text,completed:false});
    task.value="";
    updateTaskList();
}
};

const updateTaskList=()=>{
    const taskList =document.getElementById('task')
    task.innerHTML=''

    task.forEach(task=>{
        const listItem
    })
}

document.getElementById("newtask").addEventListener("click",function(e){
    e.preventDefault();
    addtask();
}

);


