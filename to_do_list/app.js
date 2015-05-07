

//For the Spotify app I went through in 2 steps, but this time I am going to go through in many.
//follow the numbers to get from function call to rendering of to do list.

var toDoList = toDoList || {};

toDoList.taskList = {
//4. this function returns our array of tasks
  getTasks: function(){
    var tasks = [];
    tasks.push({title: "take out trash", status: "incomplete"});
    tasks.push({title: "cut grass", status: "in progress"});
    tasks.push({title: "set the table", status: "complete"});
    tasks.push({title: "beat up little brother", status: "in progess"});
    return tasks;
  },

  init:function(listLocation){
//2. this causes $location to be set as our target element variable
    this.$location = listLocation;
//3. and the getTasks function to be run
    return this.getTasks();
//5. which are returned by the function
  },

  render:function(tasks){
//8. which parses through each element in the array
    tasks.forEach(function(task){
//9. and appends a <li> item to the target <ul> specified in $location (see step 2)
    this.$location.append('<li>' + task.title + "</li>")
  }, this)
  }

};

// 1. toDoList.taskList.init is run on the DOM element #tasks.
var tasks = toDoList.taskList.init($('#tasks'));
//6. and storted in the variable tasks

//7. the tasks array of objects is fed into the render function
toDoList.taskList.render(tasks);
//10. once the <ul> has been populated, the function is complete.
