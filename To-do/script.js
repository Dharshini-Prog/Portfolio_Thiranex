const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let currentFilter = "all";

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks() {

    taskList.innerHTML = "";

    let filteredTasks = tasks;

    if (currentFilter === "active") {
        filteredTasks = tasks.filter(task => !task.completed);
    }

    if (currentFilter === "completed") {
        filteredTasks = tasks.filter(task => task.completed);
    }

    filteredTasks.forEach((task, index) => {

        const li = document.createElement("li");

        if (task.completed) {
            li.classList.add("completed");
        }

        li.innerHTML = `
            <span>${task.text}</span>

            <div class="actions">
                <button class="complete-btn">
                    ${task.completed ? "Undo" : "Done"}
                </button>

                <button class="edit-btn">
                    Edit
                </button>

                <button class="delete-btn">
                    Delete
                </button>
            </div>
        `;

        li.querySelector(".complete-btn")
        .addEventListener("click", () => {
            task.completed = !task.completed;
            saveTasks();
            renderTasks();
        });

        li.querySelector(".edit-btn")
        .addEventListener("click", () => {

            const newText = prompt(
                "Edit Task",
                task.text
            );

            if (newText) {
                task.text = newText;
                saveTasks();
                renderTasks();
            }
        });

        li.querySelector(".delete-btn")
        .addEventListener("click", () => {

            tasks.splice(index, 1);

            saveTasks();
            renderTasks();
        });

        taskList.appendChild(li);
    });
}

addBtn.addEventListener("click", () => {

    const text = taskInput.value.trim();

    if (!text) return;

    tasks.push({
        text,
        completed:false
    });

    taskInput.value = "";

    saveTasks();
    renderTasks();
});

document
.querySelectorAll("[data-filter]")
.forEach(btn => {

    btn.addEventListener("click", () => {

        currentFilter = btn.dataset.filter;

        renderTasks();
    });
});

renderTasks();