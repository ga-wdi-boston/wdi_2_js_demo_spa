var todo = todo || {};

todo.list = {
  getTasks: function() {
    var tasks = [];

    task.push(new todo.task('Wash Dog', "Needs Bath", 453, 'Not Started'));
    return tasks;
  },

  init: function(appPlayListElement) {
      // set the DOM Element for the play list
      this.$playListElement = appPlayListElement;
      // return all the playlist songs
      return this.getTasks();
},

  render: function(tasks){
    var id = 1;
    tasks.forEach(function(tasks){
      this.$playListElement.append('<li>' + tasks.title + '</li>');
      id++;
    }, this);
  }
};
