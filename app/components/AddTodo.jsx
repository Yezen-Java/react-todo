var React = require('react');

var AddTodo = React.createClass({

onSubmit: function (e) {
  e.preventDefault();
 var AddTodoInput = this.refs.TodoInput.value;
 if(AddTodoInput.length >0){
   this.refs.TodoInput.value = '';
   this.props.handleAddTodo(AddTodoInput);
 }else{
   this.refs.TodoInput.focus();
 }
},

render: function () {

  return(
    <div className = "container__footer">
      <form ref="form" onSubmit={this.onSubmit} className="countdown-form">
        <input type="text" ref="TodoInput" placeholder="What do you need to do"/>
        <button className="button expanded">Add Todo</button>
      </form>
    </div>
  )
}

});

module.exports = AddTodo;
