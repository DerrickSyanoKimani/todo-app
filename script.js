// DOM references
const addBtn = document.getElementById('addBtn');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');



let tasks = [];

function createTask(taskText) {
    // Build a new task list item with completion and delete behavior
    const li = document.createElement('li');
    li.textContent = taskText;

    li.addEventListener('click', function() {
        li.classList.toggle('completed');
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', function(event) {
        event.stopPropagation();
        li.remove();
    });

    taskList.appendChild(li);
    li.appendChild(deleteBtn);
}



// Handle click events on the add button
addBtn.addEventListener('click', function() {
    const taskText = taskInput.value.trim();

    // Ignore empty tasks
    if (taskText === '') {
        return;
    }

    tasks.push(taskText);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    console.log(tasks);
    createTask(taskText);

    // Reset the input field after adding a task
    taskInput.value = '';
    taskInput.focus();
});

taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addBtn.click();
    }
});

const savedTasks = localStorage.getItem('tasks');

if (savedTasks) {
    tasks = JSON.parse(savedTasks);

    tasks.forEach(function(taskText) {
        createTask(taskText);
    });
}
     
    
    