var todo = todo || {};

todo.list = {
  getSongs: function() {
    var task = [];

    task.push({'Wash Dog', description: 'Dog smells, give bath', id: 183, status: 'Not Done'});
    task.push({'Pay Taxes', description: 'Avoid jail', id: 629, status: 'Done'});
    task.push({'Start Project', description: 'Appease sadistic teachers', id: 227, status: 'Not Started'});
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
