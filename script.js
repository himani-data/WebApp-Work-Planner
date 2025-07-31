document.addEventListener("DOMContentLoaded",()=>{
  const storedTasks =JSON.parse(localStorage.getItem('tasks'))

  if(storedTasks){
    storedTasks.forEach((tasks)=>tasks.push(tasks))
  updateTaskList();
  updateStats();
  }

})

let tasks = [];
const saveTask=()=>{
  localStorage.setItem('tasks',JSON.stringify(tasks))
}

const addtask = () => {
  const taskinput = document.getElementById("taskinput");
  const text = taskinput.value.trim();
  if (text) {
    tasks.push({ text: text, completed: false });
    taskinput.value = "";
    updateTaskList();
    updateStats();
    saveTask();
  }
};

const updateTaskList = () => {
  const taskList = document.getElementById("tasks");
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const listItem = document.createElement("li");

    listItem.innerHTML = `
      <div class="taskItem">
        <div class="task ${task.completed ? "completed" : ""}">
          <input type="checkbox" class="checkbox" ${
            task.completed ? "checked" : ""
          } />
          <p>${task.text}</p>
        </div>

        <div class="icons">
          <img src="./edit.png" onClick="editTask(${index})" />
          <img src="./bin.png" onClick="deleteTask(${index})" />
        </div>
      </div>
    `;

    const checkbox = listItem.querySelector(".checkbox");
    checkbox.addEventListener("change", () => toggleTaskComplete(index));

    taskList.appendChild(listItem);
  });
};

document.getElementById("newtask").addEventListener("click", function (e) {
  e.preventDefault();
  addtask();
});

// Stub functions for editTask, deleteTask, toggleTaskComplete
function editTask(index) {
const taskinput=document.getElementById('taskinput')
taskinput.value=tasks[index].text

tasks.splice(index,1);{
updateTaskList();
  updateStats();
  saveTask();
}

}

function deleteTask(index) {
  tasks.splice(index, 1);
  updateTaskList();
  updateStats();
  saveTask();
}

function toggleTaskComplete(index) {
  console.log("toggleTaskComplete called for index:", index);
  tasks[index].completed = !tasks[index].completed;
  updateTaskList();
  updateStats();
  saveTask();
}


const updateStats = () => {
  const completeTasks = tasks.filter((task) => task.completed).length;
  const totalTask = tasks.length;
  const progressBar = document.getElementById("progress");
  const progress = totalTask === 0 ? 0 : (completeTasks / totalTask) * 100;

 

 progressBar.style.width = `${progress}%`;
   
    // Optional: Update number count
  document.getElementById("number").innerText = `${completeTasks}/${totalTask}`;
  if(tasks.length && completeTasks==totalTask){
    blast();
  }
};
  



  

const blast=()=>{
  const count = 200,
  defaults = {
    origin: { y: 0.7 },
  };

function fire(particleRatio, opts) {
  confetti(
    Object.assign({}, defaults, opts, {
      particleCount: Math.floor(count * particleRatio),
    })
  );
}

fire(0.25, {
  spread: 26,
  startVelocity: 55,
});

fire(0.2, {
  spread: 60,
});

fire(0.35, {
  spread: 100,
  decay: 0.91,
  scalar: 0.8,
});

fire(0.1, {
  spread: 120,
  startVelocity: 25,
  decay: 0.92,
  scalar: 1.2,
});

fire(0.1, {
  spread: 120,
  startVelocity: 45,
});

}