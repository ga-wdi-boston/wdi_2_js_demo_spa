var toDoAPP = toDoAPP || {};

toDoAPP.TaskList = {
  getTasks: function(){
    var tasks = [];
    tasks.push(new toDoAPP.task('clean room', 'vaccum, make bed', 'not done'));
    tasks.push(new toDoAPP.task('do dishes', 'put dishes in dishwasher', 'done'));
    tasks.push(new toDoAPP.task('do laundry', 'do all whites', 'in progress'));
    tasks.push(new toDoAPP.task('go grocery shopping', 'make list', 'not done'));

    return tasks;
  },

  init: function(appTasklistElement){

    this.$taskListElement = appTasklistElement;

    return this.getTasks();
  },

  render: function(tasksArray){

    var id = 1

    tasksArray.foreach(function(task){

      task.render(this.$taskListElement, id);
      id++;
    }, this)
  }
};
