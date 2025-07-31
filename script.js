let tasks=[];

const addtask=()=>{
    const taskinput=document.getElementById('taskinput');
    const text=taskinput.value.trim();
if(text){
    tasks.push({text:text,completed:false});
    tasks.value="";
    updateTaskList();
}
};

const updateTaskList=()=>{
    const taskList =document.getElementById('tasks')
    taskList.innerHTML="";

    tasks.forEach((task,index)=>{`
        const listItem=document.createElement('li');

        listItem.innerHTML=
        <div class="taskItem">
        <div class="task ${task.completed? "completed" : ""}">
            <input type ="checkbox" class="checkbox" ${task.completed ? "checked" : ""}/>
            <p>${task.text}</p>
        </div>

        <div class ='icons'>
            <img src="./edit.png" onClick="editTask(${index})" />
            <img src="./bin.png" onClick="deleteTask(${index})" />
        </div>
        </div>
        `;
       listItem.addEventListener('change',()=> toggleTaskComplete(index));
       taskList.append(listItem);
    });
};

document.getElementById("newtask").addEventListener("click",function(e){
    e.preventDefault();
    addtask();
}

);


