/* global Todo */

var Todo = Todo || {};

Todo.Tasklist = {
  getTasks: function(){
    var tasks = [];
    tasks.push(new Todo.Task("Walk the dog", 1, "Walk him forever", "not completed"));
    tasks.push(new Todo.Task("Buy things", 2, "buy milk and stuff", "not completed"));

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



/*


*/
