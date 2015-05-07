// Establish global variable ToDo.

var ToDo = ToDo || {};


// This establishes a constructor function for each song. Establishes the arguments.
ToDo.Task = function(taskTitle, taskId, taskDescription, taskStatus){
  this.taskTitle = taskTitle;
  this.taskId = taskId;
  this.taskDescription = taskDescription;
  this.taskStatus = taskStatus;
  };

  // Sets html element for my list?
  init: function(appTaskListElement){
    this.$taskListElement = appTaskListElement;
    return this.getTasks();
  },
  // Render to html? (Rendering each individual task right?)
ToDo.Task.prototype.render = function($taskListElement){
  this.$taskListElement.append('<li id="song-' + id + '" >' + this.title + '</li>');
  }
};

