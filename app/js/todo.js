/* global Todo */

var Todo = Todo || {};


Todo.List = {

  getTasks: function(){
    var tasks = [];

    tasks.push(new Todo.Task('task 1', 'task 1 description'));
    tasks.push(new Todo.Task('task 2', 'task 2 description'));

    return tasks;

  },

  init: function(appListElement){
    this.$ListElement = appListElement;
    return this.getTasks();
  },

  render: function(tasks){
    var id = 1;
    tasks.forEach(function(task){
      task.render(this.$ListElement, id);
      id ++;
    }, this);

  }



}
