/*global Todo */

var Todo = Todo || {};

Todo.Tasklist = {
  getTasks: function(){
    var tasks = [];
    tasks.push(new Todo.Task("Grocery shopping", 10, "buy milk",  "done"));
    tasks.push(new Todo.Task("Babysit",  2, "babysit a boy and girl", "in progress"));
    tasks.push(new Todo.Task("Do homework", 3, "GA work" , "done"));

  return tasks;
  },

  init: function(appTaskListElement){
    this.$taskListElement = appTaskListElement;
    return this.getTasks();

  },

  render: function(tasks){

var id = 1;
    tasks.forEach(function(task){
    task.render(this.$taskListElement, id);
    id++;
  }, this);

    }
  };





