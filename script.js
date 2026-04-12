// ==================== DOM Elements ====================
// Select the add button element
const addBtn = document.getElementById('addBtn');
// Select the input field where users type tasks
const taskInput = document.getElementById('taskInput');
// Select the container list where tasks will be displayed
const taskList = document.getElementById('taskList');

// ==================== Add Button Click Handler ====================
// Add click event listener to the add button
addBtn.addEventListener("click", function() {
    // Get the task text and remove leading/trailing whitespace
    const taskText = taskInput.value.trim();
    
    // Check if the input is empty
    if (taskText === "") {
        // Stop execution if nothing was entered
        return;
    }

    // Log the task to the console for debugging
    console.log(taskText);

    // ========== Create Task Item ==========
    // Create a new list item element
    const li = document.createElement("li");
    // Set the text content of the list item to the task
    li.textContent = taskText;

    // Add click event listener to toggle task completion
    li.addEventListener("click", function() {
        // Toggle the completed class to visually mark the task as done
        li.classList.toggle("completed");
    });

    // ========== Create Delete Button ==========
    // Create a delete button for the task
    const deleteBtn = document.createElement("button");
    // Set the button text to "Delete"
    deleteBtn.textContent = "Delete";

    // Add click event listener to delete the task
    deleteBtn.addEventListener("click", function(event) {
        // Stop the click event from bubbling up to the list item
        event.stopPropagation();
        // Remove the list item from the DOM
        li.remove();
    });

    // ========== Add Items to Page ==========
    // Add the new list item to the task list
    taskList.appendChild(li);
    // Add the delete button as a child of the list item
    li.appendChild(deleteBtn);

    // Clear the input field for the next task
    taskInput.value = "";
    taskInput.focus();
});

taskInput.addEventListener("keypress", function(event)
{   if (event.key === "Enter") {
        addBtn.click();
    }
});


     
    
    