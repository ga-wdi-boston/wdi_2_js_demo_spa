var ToDoApp = ToDoApp || {};

ToDoApp.ToDoList = {
  addTasks: function() {
    var task = [];
    task.push(new ToDoApp.Task('Clean Car', 'nada', 'Incomplete', '3'));
    task.push(new ToDoApp.Task('Buy Groceries', 'nada', 'Incomplete', '3'));
    task.push(new ToDoApp.Task('Dry Cleaners', 'nada', 'Incomplete', '3'));
    task.push(new ToDoApp.Task('Wash Dishes', 'nada', 'Incomplete', '3'));
  return task;
},

init: function(taskElement) {
  this.$listElement = taskElement;
  return this.addTasks();
},

render: function(tasks) {
  var id = 1;
  tasks.forEach(function(task) {
    task.render(this.$listElement, id);
    id++;
}, this)
}
};
