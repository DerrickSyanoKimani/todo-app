const addBtn = document.getElementById('addBtn');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');


addBtn.addEventListener("click", function()
    {
        const taskText = taskInput.value;
        console.log(taskText);
    });