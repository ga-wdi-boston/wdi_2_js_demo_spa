/* global Todo, $*/

var Todo = Todo || {};


Todo.TaskList = {
  tasks: [],
  generateTasks: function(){
  this.tasks.push(new Todo.Task('Do Homework', 'work from GA'));
  this.tasks.push(new Todo.Task('Get Groceries', 'Lemonade, Cheese, Wine'));
  this.tasks.push(new Todo.Task('Movie', 'Go to the video store'));
  },
  addTask: function(title, description, priority){
    // debugger;
    this.tasks.push({
      'title': title,
      'description': description
    });
  },
  init: function(appTasklistElement){
    // 3. set Todo's javascript element (TasklistElement) to the element passed to the init function (DOM ELEMENT).
    this.$TasklistElement = appTasklistElement;
    return this.generateTasks();
  },

  render: function(tasks){
    var id=0;
    this.tasks.forEach(function(task){
      task.render(this.$TasklistElement);
      id++
    }, this);
  }
  // removeTask: function(title){
  //   var indexVal = this.tasks.indexOf(title);

  // }
};
