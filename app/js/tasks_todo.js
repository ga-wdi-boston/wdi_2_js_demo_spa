/* global ToDoList */

var ToDoList = ToDoList || {};


ToDoList.TaskList = {
  getTasks: function() {
    // 5. define the variable tasks to be an emtpy array
    var tasks = [];
    // 8. push the tasks into the array using the constructor defined inside task.js and return all the tasks in the variable set in step 5.
    tasks.push(new ToDoList.Task('Learn JQuery','Practice a lot'));
    tasks.push(new ToDoList.Task('Bake Cupcakes','Red velvet'));
    tasks.push(new ToDoList.Task('Eat Cupcakes','Eat them cupcakes, nom nom nom'));
    tasks.push(new ToDoList.Task('Sleep','at least 8 hours'));
    return tasks;
  },

  init: function(appTaskListElement){
   // 3. set the task list $taskListElement to the <div> with the id="todo-items" of the DOM, html page.
    this.$taskListElement = appTaskListElement;
    // 4. invoke gettasks above
    return this.getTasks();
  },

  // 10. I call the function "render" plugging all the songs from point 5.
  // This function sets a variable id and sets it to an initial value of 1.
  // then I iterate over the tasks of the array (referring to them from what I set in the init function) and
  // incrementing the id by one.
  render: function(tasks) {
    var id = 1;
    tasks.forEach(function(task){
      task.render(this.$taskListElement, id);
      id++;
    }, this)
  }

};

