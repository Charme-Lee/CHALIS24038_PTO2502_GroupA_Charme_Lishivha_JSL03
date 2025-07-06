// Initial task array with predefined tasks.
const initialTasks = [
  {
    id: 1,
    title: "Launch Epic Career",
    description: "Create a killer Resume",
    status: "todo",
  },
  {
    id: 2,
    title: "Master JavaScript",
    description: "Get comfortable with the fundamentals",
    status: "doing",
  },
  {
    id: 3,
    title: "Contribute to Open Source Projects",
    description:
      "Gain practical experience and collaborate with others in the software development community",
    status: "done",
  },
];
d;

// Initialize the main tasks array
let tasks = [...initialTasks];

// Defines the threshhold for the tasks allowed
// Set to 6 to accommodate 3 initial tasks + 3 new tasks.
const taskLimit = 6;

/*
Manages user input for creating a new task.
Requests title, description, and status, ensuring the status is valid.
Checks if the task limit has been reached and notifies the user if so. 
*/
function addTask(){
  // This fulfills the requirement to alert the user when the limit is reached.
  if (tasks.length >= taskLimit) {
    alert("There are enough tasks on your board, please check them in the console.");
    return;
  }

    // Prompts for task details & handles the 'Cancel' options during the process.
    const newTaskTitle = prompt("Enter task title:");
    if (newTaskTitle === null) return;
  
    const newTaskDescription = prompt("Enter task description:");
    if (newTaskDescription === null) return;
  
    let newTaskStatus = prompt("Enter task status (todo, doing, done):").toLowerCase();
    if (newTaskStatus === null) return;
  
    // Input validation loop to ensure the task status is one of the allowed values
    while (newTaskStatus !== "todo" && newTaskStatus !== "doing" && newTaskStatus !== "done") {
      alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
      newTaskStatus = prompt("Enter task status (todo, doing, done):").toLowerCase();
      if ( newTaskStatus === null ) return;
      // Allowing the user to cancel re-prompt
  }