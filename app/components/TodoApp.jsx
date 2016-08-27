var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');

var TodoApp = React.createClass({

  getInitialState: function(){
    return{
      todos:[
        {
          id:1,
          text:'Walk the dog'
        },{
          id:2,
          text:'Clean the yeard'
        },
        {
          id:3,
          text:'Do some stuff'
        },
        {
          id:4,
          text:'Do some stuff'
        }
      ]
    };
  },

  handleAddTodo: function (text) {
    alert('new todo:' + text);
  },

  render: function () {
    var {todos} = this.state;
    return(
      <div>
        <TodoList todos={todos}/>
        <AddTodo handleAddTodo={this.handleAddTodo}/>
      </div>
    )
  }
});

module.exports = TodoApp;
