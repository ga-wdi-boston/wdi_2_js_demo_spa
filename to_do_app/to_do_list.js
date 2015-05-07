//global name
'use strict';
var toDoList = toDoList||{};

toDoList.taskList = {
  getTasks:function(){
  //4. define tasks and then return it
    var tasks = [];
    tasks.push({title:'take out trash', status:'incomplete'});
    tasks.push({title:'Cut Grass', status:'in progress'});
    tasks.push({title:'Set the Table', status:'complete'});
    tasks.push({title:'Beat up little brother', status:'in progress'});
    //5 return array tasks and then go back to todoAPP.js
    return tasks;
  },
  //2. init function takes location from when it was called in step 1
  init:function(listLocation){
    this.$listLocation = listLocation;
  //3. getTasks()
    return this.getTasks();
  },
  //7 render tasks
  render:function(tasks){
  //for every task
    tasks.forEach(function(task){
      //9 apend the location with a new list location with the task title
      this.$listLocation.append('<li>' + task.title + '</li>');
    },this);
  }
};
