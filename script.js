// DOM elements used by the todo app
const addBtn = document.getElementById('addBtn');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Tasks stored in memory and persisted to localStorage for persistence across reloads
let tasks = [];

function createTask(task) {
    // Create a task list item, with click-to-complete and delete controls
    const li = document.createElement('li');
    li.textContent = task.text;

    if (task.completed) {
    li.classList.add('completed');
}

    li.addEventListener('click', function() {
        task.completed = !task.completed;
        li.classList.toggle('completed');
        localStorage.setItem('tasks', JSON.stringify(tasks));
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', function(event) {
        event.stopPropagation();

        tasks = tasks.filter(function(savedTask){
            return savedTask.text !== task.text;
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

    // Ignore empty input or whitespace-only values
    if (taskText === '') {
        return;
    }

    tasks.push({
        text: taskText,
        completed: false
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
    console.log(tasks);

    createTask({
    text: taskText,
    completed: false
});

    // Reset the input for the next task
    taskInput.value = '';
    taskInput.focus();
});

// Submit new task by pressing Enter in the input field
taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addBtn.click();
    }
});

// Load saved tasks from localStorage on page load
const savedTasks = localStorage.getItem('tasks');

if (savedTasks) {
    tasks = JSON.parse(savedTasks);

    tasks.forEach(function(taskText) {
        createTask(taskText);
    });
}
     
    
    