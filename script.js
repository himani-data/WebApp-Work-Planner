let task=[];

const addtask=()=>{
    const taskinput=document.getElementById('taskinput');
    const text=taskinput.value.trim();
if(text){
    task.push({text:text,completed:false});
}
console.log(task);
};


document.getElementById("newtask").addEventListener("click",function(e){
    e.preventDefault();
    addtask();
}

);


