/* global Todo */

var Todo = Todo || {};

Todo.List = {
  getTasks: function(){
    var tasks = [];
    tasks.push({title: 'eggs', description: 'shop for eggs', id: 0, status: 'done'});
    tasks.push({title: 'bacon', description: 'shop for bacon', id: 1, status: 'done'});
    tasks.push({title: 'oj', description: 'shop for oj', id: 2, status: 'done'});
    return tasks;
  },

  init: function(appListElement){
    this.$listElement = appListElement;
    return this.getTasks();
  },

  render: function(tasks){
    tasks.forEach(function(tasks){
      this.$listElement.append('<li>' + task.title + '</li>');
    }, this)
  }
}
