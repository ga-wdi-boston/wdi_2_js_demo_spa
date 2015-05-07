/* global Todo */

var Todo = Todo || {};


Todo.List = {

  //5. Declare tasks to be an empty array, push our new Todo.List objects into tasks array
  getTasks: function(){
    var tasks = [];
    tasks.push(new Todo.Task('Shopping', 'groceries'));
    tasks.push(new Todo.Task('Books', 'for fun'));
    //7. Returning the array tasks which contain two objects which each have three properties
    return tasks;
  },


  init:function(appListElement){
    //3. Set this.$playListElement to the input paramater (<ul> selecter)
    //set the DOM element for the tasks
    this.$listElement = appListElement;
    //4. Invoking Tasks function
    //return all tasks
    return this.getTasks();
  },


  render: function(tasks){
    //9.Set id
    var id = 1;
    //10. Loop through every task in the task array
    tasks.forEach(function(task){
      //11. Do a thing to a song
      task.render(this.$listElement, id);
      id++;
    }, this)
  }
};
