/*Global Spotify*/

//Our only global variable
//Look for Spotify and if it doesn't it will be undefined, which is false, and this will be an or and it will return the empty Hash.
//If Spotify does not have a value then give it a value of{}, an object
//Now spotify is an empty object
var ToDoList = ToDoList || {};

//#5 creates an empty array of tasks. Talks to the constructor in task.js
ToDoList.TaskList = {
  getTasks: function(){
    var tasks = [];
    //#6. push an object that presents a task into the local tasks array
    tasks.push(new ToDoList.Task('Learn JQuery', 'practice a lot'));
    tasks.push(new ToDoList.Task('Bake cupcakes', 'red velvet'));
    tasks.push(new ToDoList.Task('Eat cupcakes', 'eat them cupcakes nom nom nom'));
    tasks.push(new ToDoList.Task('Sleep', 'At least 8 hours'));
    //#7 return songs to line 32
    return tasks;
  },

 //#3 set the tasklist and save it on the tasklist and call get tasks
  init: function(appTaskListElement){
    //Set the DOM element for the tasklist in the html
    this.$taskListElement = appTaskListElement;
    // return all the tasklists
    //#4. Invoke getTasks above
    return this.getTasks();
  },

//#8 for every task in the tasks array we invoke the forEach anonymous finction. Next goes to task.js.
  render: function(tasks){
    var id= 1;
    //forEach iterates over the array and for each task it appends/adds it to the array
    tasks.forEach(function(task){
      //calling the function from the task.js
      //call the render method which passes in the DOM element and an ID
      task.render(this.$taskListElement, id);
      id++;
      //use the outer this as the inner this
    }, this)
  }
};


