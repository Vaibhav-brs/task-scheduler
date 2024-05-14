let tasks = [];

function addTask() {
  const taskInput = document.getElementById("task").value.trim();
  const priorityInput = document.getElementById("priority").valueAsNumber;

  if (taskInput && !isNaN(priorityInput) && priorityInput > 0) {
    tasks.push({ task: taskInput, priority: priorityInput });
    displayTasks();
    document.getElementById("task").value = "";
    document.getElementById("priority").value = "";
  } else {
    alert("Please enter a valid task and priority (greater than 0).");
  }
}

function displayTasks() {
  const taskListDiv = document.getElementById("taskList");
  taskListDiv.innerHTML = "<strong>Tasks:</strong><br>";

  tasks.forEach((task, index) => {
    taskListDiv.innerHTML += `${index + 1}. ${task.task} (Priority: ${task.priority})<br>`;
  });
}

function scheduleTasks() {
  tasks.sort((a, b) => b.priority - a.priority);

  const outputDiv = document.getElementById("output");
  outputDiv.innerHTML = "<strong>Scheduled Tasks:</strong><br>";

  tasks.forEach((task, index) => {
    outputDiv.innerHTML += `${index + 1}. ${task.task}<br>`;
  });

  tasks = []; // Clear tasks after scheduling
}
