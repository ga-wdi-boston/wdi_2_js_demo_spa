/* global toDoList */

// 5. if toDoList is undefined give it a value of an object literal

var toDoList = toDoList || {}

// 6. The toDoList object's "taskList" property is a different object literal
toDoList.taskList = {
  var getTasks = function () {
    var tasks = [];
// 7. Create the 4 objects (4 tasks) and push them into the tasks array
    tasks.push(new toDoList.Task("take out trash", "incomplete"));
    tasks.push(new toDoList.Task("cut grass", "in progress"));
    tasks.push(new toDoList.Task("set the table", "complete"));
    tasks.push(new toDoList.Task("beat up little bro", "in progress"));
  return tasks;
  },
  // 8. Create an init function to run each song in the songs array into the playlist
  init: function(listLocation) {
  this.$location=listLocation;
  // set the DOM element for the tasklist
  //returns an array of tasks
  return this.getTasks();
},
// 9. For each task in the tasks array, add it to the taskList object and add the title
  render: function(tasks) {
    tasks.forEach(function(tasks){
      this.$location.append('<li>' + task.title + '</li>');
    }, this)
  }
};


