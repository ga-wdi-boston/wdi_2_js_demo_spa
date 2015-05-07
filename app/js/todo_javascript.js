
'use strict';
/*Global variable*/
var Todo=Todo||{};

Todo.List= {
  getTasks: function(){
    var tasks =[];
    tasks.push(new Todo.Task("shopping","just shop"));
    tasks.push(new Todo.Task("do something","just do something"));
    return tasks;


  },
  init: function(appListElement){
    this.$listElement = appListElement;
    return this.getTasks();

  },
  render: function(todo){
    var id =1;
    todo.forEach(function(task){
      task.render(this.$listElement,id);
      id++;
     },this);
  }
};
