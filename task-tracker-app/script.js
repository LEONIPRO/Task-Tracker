// script.js
// Section 1: TODOs
// TODO: Register submissions from the user on the form.
let taskName = document.getElementById('taskName').value
let taskDescription = document.getElementById('taskDescription').value
let taskDeadLine = document.getElementById('taskDeadLine').value

console.log(taskName, taskDescription, taskDeadLine)
// TODO: Determine the value of the data submitted and add it to a JavaScript array calle
// TODO: Call the render function to update the table with the new tasks


const taskForm = document.getElementById('taskForm');
const taskTable = document.getElementById('taskTable');



// Function to handle form submissions
function handleSubmission(event) {
    event.preventDefault();
    // TODO: Get form input values
    // TODO: Validate input fields
    // TODO: Update the tasks array
    render();
}
// Function to render tasks in the table
function render() {
    // TODO: Use array methods to create a new table row of data for each item in the array
taskTable.innerHTML = tasks.map(task => `
<tr>
    <td>${task.name}</td>
    <td>${task.description}</td>
    <td>${task.deadline}</td>
    <td><button onclick="markTaskComplete(this)">Complete</button></td>
    <td><button onclick="removeTask(this)">Remove</button></td>
</tr>
`).join('');

}
// Function to initialize the table
function init() {
    taskTable.innerHTML = ''; // Clear the table
    tasks = []; // Reset the tasks array
    render(); // Call the render function
}

// Event listener for form submission
taskForm.addEventListener('submit', handleSubmission);

// Call the init function to set up the initial state of the app
init();


// script.js
// Section 3: Cached Element References
const taskForm = null;
const taskTable = null;