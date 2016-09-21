import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
var expect = require('expect');
var actions = require('actions');


var createMockStore = configureMockStore([thunk]);

describe('Actions',()=>{
  it('should generate search test action',()=>{
    var action = {
      type: 'SET_SEARCH_TEXT',
      searchText: 'some text'
    };

    var res = actions.setSearchText(action.searchText);

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
      todo: {
        id:'123',
        text:'anything',
        completed:false,
        createdAT:0
        }
    };
    var res = actions.addTodo(action.todo);

    expect(res).toEqual(action);
  });

  it('should create todo add dispatch',(done)=>{
    const store = createMockStore({});
    const todoText = 'my todo item';

    store.dispatch(actions.startAddTodo(todoText)).then(()=>{
      const actions = store.getActions();
      expect(actions[0]).toInclude({
        type:'ADD_TODO'
      });
      expect(actions[0].todo).toInclude({
        text:todoText
      });
      done();
    }).catch(done);

  });



  it('should generate add todos action object',()=>{
    var todos = [{
      id:'111',
      text:'anything',
      completed:false,
      completedAt:undefined,
      createdAT:33000
    }];

    var action = {
      type:'ADD_TODOS',
      todos
    };

    var res = actions.addTodos(todos);

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
