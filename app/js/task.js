'use strict';

var Todo=Todo||{};

Todo.Task= function(title,description){
  this.title = title;
  this.description = description;

}

Todo.Task.prototype.render= function($listElement, id){
 $listElement.append('<li id= "task->' + id+ '" >' + this.title + '</li>')

}
