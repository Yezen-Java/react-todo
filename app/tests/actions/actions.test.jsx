var expect = require('expect');
var actions = require('actions');

describe('Actions',()=>{
  it('should generate search test action',()=>{
    var action = {
      type: 'SET_SEARCH_TEXT',
      setSearchText: 'some text'
    };

    var res = actions.setSearchText(action.setSearchText);

    expect(res).toEqual(action);

  });

  it('should generate toggle show completed actions',()=>{
    var action = {
      type:'TOGGLE_SHOW_COMPLETED'
    };

    var res = actions.toggleShowCompleted();

    expect(res).toEqual(action);


  });



  it('should generate add todo actions',()=>{
    var action = {
      type: 'ADD_TODO',
      text: 'thing to do'
    };
    var res = actions.addTodo(action.text);

    expect(res).toEqual(action);
  });

  it('should genetate toggle todo actions',()=>{
    var action={
      type:'TOGGLE_TODO',
      id:'123'
    };

    var res = actions.toggleTodo(action.id);

    expect(res).toEqual(action);



  });
});
