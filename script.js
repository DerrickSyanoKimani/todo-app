// DOM elements used by the todo app
const addBtn = document.getElementById('addBtn');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Tasks stored in memory and synced to localStorage
let tasks = [];

function createTask(taskText) {
    // Create a task list item with click-to-complete and delete controls
    const li = document.createElement('li');
    li.textContent = taskText;

    li.addEventListener('click', function() {
        li.classList.toggle('completed');
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', function(event) {
        event.stopPropagation();

        tasks = tasks.filter(function(task){
            return task !== taskText;
        });

        localStorage.setItem('tasks', JSON.stringify(tasks));
        li.remove();
    });

    taskList.appendChild(li);
    li.appendChild(deleteBtn);
}



// Add a new task when the add button is clicked
addBtn.addEventListener('click', function() {
    const taskText = taskInput.value.trim();

    // Do nothing if the input is empty or only whitespace
    if (taskText === '') {
        return;
    }

    tasks.push(taskText);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    console.log(tasks);
    createTask(taskText);

    // Clear and focus the input for the next task
    taskInput.value = '';
    taskInput.focus();
});

// Allow submitting a new task by pressing Enter inside the input
taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addBtn.click();
    }
});

// Load previously saved tasks from localStorage
const savedTasks = localStorage.getItem('tasks');

if (savedTasks) {
    tasks = JSON.parse(savedTasks);

    tasks.forEach(function(taskText) {
        createTask(taskText);
    });
}
     
    
    