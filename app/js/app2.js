var toDoList = toDoList || {};

toDoList.taskList = {
  getTasks: function(){
    var tasks = [];
    tasks.push({title: "take out trash", status: "incomplete"});
    tasks.push({title: "cut grass", status: "in progress"});
    tasks.push({title: "set the table", status: "complete"});
    tasks.push({title: "beat up little brother", status: "in progess"});
    return tasks;
  },

  init:function(listLocation){
    this.$location = listLocation;
    return this.getTasks();
  },

  render:function(tasks){
    tasks.forEach(function(task){
    this.$location.append('<li>' + task.title + "</li>")
  }, this)
  }

};


var tasks = toDoList.taskList.init($('#tasks'));

toDoList.taskList.render(tasks);
