let tasks = [];

const priorityValue = {
"High": 1,
"Medium": 2,
"Low": 3
};

function createTask(subject, topic, priority, duration) {
return {
id: Date.now() + Math.random(),
subject: subject,
topic: topic,
priority: priority,
duration: Number(duration),
completed: false
};
}

function addTask() {
const subject = document.getElementById("subject").value.trim();
const topic = document.getElementById("topic").value.trim();
const priority = document.getElementById("priority").value;
const duration = document.getElementById("duration").value;

if (!subject || !topic || !duration || Number(duration) <= 0) {
    alert("Please enter valid task details.");
    return;
}

const task = createTask(subject, topic, priority, duration);
tasks.push(task);

sortTasks();
displayTasks();
clearInputs();


}

function sortTasks() {
tasks.sort((a, b) => {
return priorityValue[a.priority] - priorityValue[b.priority];
});
}

function displayTasks() {
const taskList = document.getElementById("taskList");
taskList.innerHTML = "";

tasks.forEach(task => {
    const div = document.createElement("div");
    div.className = "task";

    div.innerHTML = `
        <div class="${task.completed ? "completed" : ""}">
            <strong>${task.subject}</strong> - ${task.topic}<br>
            Priority: ${task.priority} |
            Duration: ${task.duration} minutes
        </div>

        <div>
            <button onclick="completeTask(${task.id})">
                ${task.completed ? "Undo" : "Complete"}
            </button>

            <button class="delete" onclick="deleteTask(${task.id})">
                Delete
            </button>
        </div>
    `;

    taskList.appendChild(div);
});

updateProgress();


}

function completeTask(id) {
const task = tasks.find(task => task.id === id);

if (task) {
    task.completed = !task.completed;
    displayTasks();
}


}

function deleteTask(id) {
tasks = tasks.filter(task => task.id !== id);
displayTasks();
}

function calculateProgress(taskList) {
if (taskList.length === 0) {
return 0;
}

const completed = taskList.filter(task => task.completed).length;
return Math.round((completed / taskList.length) * 100);


}

function updateProgress() {
const progress = calculateProgress(tasks);

document.getElementById("progressText").textContent =
    `${progress}% completed`;

document.getElementById("progressBar").style.width =
    `${progress}%`;


}

function clearInputs() {
document.getElementById("subject").value = "";
document.getElementById("topic").value = "";
document.getElementById("duration").value = "";
}

// Export functions for Node.js testing
if (typeof module !== "undefined") {
module.exports = {
createTask,
calculateProgress,
sortTasks,
priorityValue
};
}
