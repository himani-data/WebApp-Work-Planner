let tasks = [];

const addtask = () => {
  const taskinput = document.getElementById("taskinput");
  const text = taskinput.value.trim();
  if (text) {
    tasks.push({ text: text, completed: false });
    taskinput.value = "";
    updateTaskList();
    updateStats();
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
  // TODO: Implement edit task functionality
//   console.log("Edit task at index:", index);
const taskinput=document.getElementById('taskinput')
taskinput.value=tasks[index].text

tasks.splice(index,1);{
updateTaskList();
  updateStats();
}

}

function deleteTask(index) {
  tasks.splice(index, 1);
  updateTaskList();
  updateStats();
}

function toggleTaskComplete(index) {
  console.log("toggleTaskComplete called for index:", index);
  tasks[index].completed = !tasks[index].completed;
  updateTaskList();
  updateStats();
}


const updateStats = () => {
  const completeTasks = tasks.filter((task) => task.completed).length;
  const totalTask = tasks.length;
  const progressBar = document.getElementById("progress");

 

 progressBar.style.width = `${progress}%`;
   
  
  

  
};
