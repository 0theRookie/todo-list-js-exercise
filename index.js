// Arrays to keep track of each task's state
const taskTitles = [];
const taskComplete = [];

// Create a new task by adding to the arrays
// A new task will be created as incomplete
function newTask(title, description) {
  const task = {
    title        : title,
    description  : description,
    complete     : false,

// Print the state of a task to the console in a nice readable way    
    logState     : function(){
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },

// Mark a task as complete by setting the task's status in the `taskComplete` array to `true`
    markComplete : function(){
      this.complete = true;
    }
  };
  return task;
};

// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", "Clean poop out of litter box."); // task 0
const task2 = newTask("Do Laundry", "Clean clothes"); // task 1
const tasks = [task1, task2];

task1.logState(); // Clean Cat Litter has not been completed
task1.markComplete();
task1.logState(); // Clean Cat Litter has been completed

console.log(tasks);