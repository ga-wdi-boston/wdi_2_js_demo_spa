var toDoList = toDoList || {};
// 3. Creat Constructor function for tasks
toDoList.Task = function (taskTitle, taskStatus) {
  this.title = taskTitle;
  this.status = taskStatus;
};
//4. Create accessor function for render
toDoList.Task.prototype.render = function ($location, id) {
  $location.append('<li id="song-' + id + '">' + this.title + '</li>');

}
