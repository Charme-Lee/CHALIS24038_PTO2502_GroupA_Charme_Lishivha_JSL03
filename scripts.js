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
function addTask() {
  // This fulfills the requirement to alert the user when the limit is reached.
  if (tasks.length >= taskLimit) {
    alert(
      "There are enough tasks on your board, please check them in the console."
    );
    return;
  }

  // Prompts for task details & handles the 'Cancel' options during the process.
  const newTaskTitle = prompt("Enter task title:");
  if (newTaskTitle === null) return;

  const newTaskDescription = prompt("Enter task description:");
  if (newTaskDescription === null) return;

  let newTaskStatus = prompt(
    "Enter task status (todo, doing, done):"
  ).toLowerCase();
  if (newTaskStatus === null) return;

  // Input validation loop to ensure the task status is one of the allowed values
  while (
    newTaskStatus !== "todo" &&
    newTaskStatus !== "doing" &&
    newTaskStatus !== "done"
  ) {
    alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
    newTaskStatus = prompt(
      "Enter task status (todo, doing, done):"
    ).toLowerCase();
    if (newTaskStatus === null) return;
    // Allowing the user to cancel re-prompt
  }

  // Create a unique incremental ID for the new task based on the last task's ID.
  const lastTaskId = tasks.length > 0 ? tasks[tasks.length - 1].id : 0;
  const newTask = {
    id: lastTaskId + 1,
    title: newTaskTitle,
    description: newTaskDescription,
    status: newTaskStatus,
  };

  tasks.push(newTask);
}

// Filters the main tasks array to return only tasks marked as "done".

function filterCompletedTasks() {
  return tasks.filter((task) => task.status === "done");
}
//  Logs all tasks i.e completed tasks to the console.
function logTasksToConsole() {
  console.log("All Tasks:", tasks);
  const completedTasks = filterCompletedTasks();
  console.log("Completed Tasks:", completedTasks);
}

// Executes when the web page has fully loaded.
window.onload = function () {
  // Prompts the user to add tasks until the task threshold is met.
  if (tasks.length < taskLimit) {
    const remainingTasks = taskLimit - tasks.length;
    for (let i = 0; i < remainingTasks; i++) {
      addTask();
    }
  }
  // This specifically triggers the task limit alert.
  addTask();
  // Logs all tasks to the console for review.
  logTasksToConsole();
};
