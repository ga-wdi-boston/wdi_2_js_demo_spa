
var ToDoApp = ToDoApp || {};

ToDoApp.ToDoList = {

  // 7. The addTasks method is called via the init method (#6 below)
  addTasks: function () {

    // 8. A new local var called tasks is initialized as an empty array
    var tasks = [];

    // 9. The tasks array is populated with new objects being
    // pushed in one by one via a task constructor **(next go to todo_task.js)**
    tasks.push(new ToDoApp.Task("wash dishes", "soap and water rinse", 54, "Not Started"));
    tasks.push(new ToDoApp.Task("clean room", "pick up dirty socks", 63, "In Progress"));
    tasks.push(new ToDoApp.Task("pick up brother from school", "direction are in car", 54, "Completed"));
    tasks.push(new ToDoApp.Task("", "soap and water rinse", 54, "Not Started"));

    // 12. Once all Tasks are constructed and pushed into local tasks array,
    // the tasks array is returned from the method
    return tasks;
  },


  // 4. Initializes init function with one arg
  init: function (appToDoListElement) {

    // 5. Sets the DOM Element (#todoapp-tasks) for the ToDoList
    // (as passed thru allTasks var in todo-app.js, then to
    // appToDoListElement)
    this.$toDoListElement = appToDoListElement;

    // 6. Returns all the todolist tasks by calling on the addTasks method
    return this.addTasks();
  },

  // 15. Render method called from todo_app.js, with tasks passed as arg
  // (this is the tasks array stored in var allTasks in todo-app.js, those that were
  // returned from the addTasks method above)
  render: function (tasks) {
    // 16. var id initialized at 1, will be incremented as forEach below
    // is run on each task object in the tasks/allTasks array
    var id = 1;
    // 17. forEach method called on tasks array with anonymous function
    tasks.forEach(function(task){
      // 18. forEach's anonymous function called on render method **in todo-task.js**
      task.render.(this.$toDoListElement, id);
      id++;
    }, this)
  }

// Closing brace for ToDoApp.ToDoList
};
