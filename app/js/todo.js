/* global Todo */

var Todo = Todo || {};

//construct our to do list object
Todo.List = {
  //getTasks is our first method
  getTasks: function() {
    // 5. Declare the empty array and push the new Todo.Task objects into the tasks array
    var tasks = [];
    tasks.push(new Todo.Task('food shopping', 'need groceries'));
    tasks.push(new Todo.Task('gift shopping', 'need mothers day presents'));

    // 7. Return the array of tasks, which contain the two objects I added to it (with two properties each)
    return tasks;
  },

  //we are initializing the function and it only takes one argument
  init: function(appListElement) {
    // 3. Set this.$listElement to the input parameter of our ul
    this.$listElement = appListElement;

    // 4. Invoke getTasks on this (the Todo list) and return all of the tasks
    return this.getTasks();
},

  render: function(tasks) {

    // 9. Set id
    var id = 1;

    // 10. Go through each element in the tasks array one by one and execute the function
    tasks.forEach(function(task) {

      // 11. Render each task and its id by invoking the render mthod with arguments this.$listElement and id
      task.render(this.$listElement, id);
      id++
    }, this)
  }

};
