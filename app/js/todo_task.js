
var ToDoApp = ToDoApp || {};

// 10. The Task constructor below is used each time the push method is
// called within the addTasks method (in todo_list.js)
ToDoApp.Task = function (taskTitle, taskDescription, taskID, taskStatus) {
    // 11. The constructor accepts four arguments and creates four properties
    // for each Task object **(next go to todo_list.js)**
    this.title = taskTitle;
    this.description = taskDescription;
    this.id = taskID;
    this.status = taskStatus;
};

// 18. Render method below called on via forEach within render method in ToDoList
// The method takes two args
ToDoApp.Task.prototype.render = function($toDoListElement,id){
  // The $toDoListElement jQuery element (assigned to ul with
  // id #todoapp-tasks in steps 3-4) has an append method called on it.
  // The append method is rendering the task into the HTML, specifically extracting
  // id and title, along with li tags to wrap each task in
  $toDoListElement.append('<li id="task-' + id + '" >' + this.title + '</li>');
}


