var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');
var {Provider} = require('react-redux');
import {configure} from 'configureStore';
import ConnectTodoList,{TodoList} from 'TodoList';
import ConnectedTodo,{Todo} from 'Todo';

describe('TodoList',()=>{
  it('should exist',()=>{
    expect(TodoList).toExist();
  });

  it('should render one Todo component for each todo list', ()=>{
    var todos = [{
      id:1,
      text: 'Do something',
      completed:false,
      completedAt:undefined,
      createdAt:500

    },{
      id:2,
      text: 'Do something',
      completed:false,
      completedAt:undefined,
      createdAt:500
    }];
    var store = configure({
      todos
    });
    var provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <ConnectTodoList/>
      </Provider>
    );

    var todolist = TestUtils.scryRenderedComponentsWithType(provider,ConnectTodoList)[0];
    var todosComponents = TestUtils.scryRenderedComponentsWithType(todolist,ConnectedTodo);

    expect(todosComponents.length).toBe(todos.length);

  });
  it('should render empty message when there is no todos', ()=>{
    var todos = [];
    var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
    var $el = $(ReactDOM.findDOMNode(todoList));
    expect($el.find('.container__message').length).toBe(1);

  });
});
