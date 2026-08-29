let taskInput = document.getElementById("taskInput");
let addBtn = document.getElementById("addBtn");
let tasksContainer = document.getElementById("tasksContainer");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function displayTasks() {
    tasksContainer.innerHTML = "";

    tasks.forEach(function (task, index) {

        let taskDiv = document.createElement("div");
        taskDiv.className = "d-flex justify-content-between align-items-center bg-light p-2 mb-2 rounded";

        taskDiv.innerHTML = `
            <span>${task}</span>
            <button class="btn btn-danger btn-sm" onclick="deleteTask(${index})">
                Delete
            </button>
        `;

        tasksContainer.appendChild(taskDiv);
    });
}

addBtn.addEventListener("click", function () {

    let task = taskInput.value.trim();

    if (task !== "") {

        tasks.push(task);

        localStorage.setItem("tasks", JSON.stringify(tasks));

        taskInput.value = "";

        displayTasks();
    }
});

function deleteTask(index) {

    tasks.splice(index, 1);

    localStorage.setItem("tasks", JSON.stringify(tasks));

    displayTasks();
}

displayTasks();