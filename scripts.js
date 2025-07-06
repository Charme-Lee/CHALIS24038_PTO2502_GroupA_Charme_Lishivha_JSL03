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
document.addEventListener("DOMContentLoaded", () => {
  // Prompt user for task details
  function getTaskDetails(task) {
    const taskTitle = prompt(`Enter the title for Task ${task}:`);
    const taskDescription = prompt(`Enter the description for Task ${task}:`);

    let taskStatus = prompt(
      `Enter the status for Task ${task} (todo, doing, done):`
    );

    // Change status to lowercase
    taskStatus = taskStatus.toLowerCase();

    // Repeat the prompt until a valid status is received
    while (!["todo", "doing", "done"].includes(taskStatus)) {
      alert("Invalid status! Please enter one of: todo, doing, done.");
      taskStatus = prompt(
        `Enter the status for Task ${task} (todo, doing, done):`
      ).toLowerCase();
    }

    return {
      title: taskTitle,
      description: taskDescription,
      status: taskStatus,
    };
  }

  // Record the task details
  const FirstTask = getTaskDetails(1);
  const SecondTask = getTaskDetails(2);

  const allTasks = [FirstTask, SecondTask];
  const completedTasks = allTasks.filter((task) => task.status === "done");

  // Log outputs
  if (completedTasks.length > 0) {
    completedTasks.forEach((task) => {
      console.log(`Title: "${task.title}", Status: "done"`);
    });
  } else {
    console.log("No tasks completed, let's get to work!");
  }
});
