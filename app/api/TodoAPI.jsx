var $ = require('jquery');

module.exports = {
  filterTodos: function (todos,showCompleted, searchText) {
    var filteredTodos = todos;

    //filter by showCompleted

    filteredTodos = filteredTodos.filter((todo)=>{
      return !todo.completed || showCompleted;
    });

    //filter by searchtext
    filteredTodos = filteredTodos.filter((todo)=>{
      var textSub = todo.text.toLowerCase();
      return searchText.length ===0 || textSub.indexOf(searchText)> -1;
    });



    //sort todos by non-completeted first

    filteredTodos.sort((a,b)=>{
      if(!a.completed && b.completed){
        return -1;
      }else if(a.completed && !b.completed){
        return 1;
      }else{
        return 0;
      }
    });

    return filteredTodos;
  }
};
