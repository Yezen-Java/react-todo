import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
var expect = require('expect');

import firebase, {firebaseRef} from 'app/firebase';
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

  it('should genetate update todo actions',()=>{
    var action={
      type:'UPDATE_TODO',
      id:'123',
      updates:{completed:false}
    };

    var res = actions.updateTodo(action.id,action.updates);

    expect(res).toEqual(action);

  });

  describe('Tests with firebase todos',()=>{
    var testTodoRef;

    beforeEach((done)=>{
      var todosRef = firebaseRef.child('todos');
      todosRef.remove().then(()=>{
        testTodoRef = firebaseRef.child('todos').push();

        return testTodoRef.set({
          text:'something to do',
          completed: false,
          createdAt:22323232
        });
      }).then(()=>{
            done();
          }).catch(done);


    });

    afterEach((done)=>{
      testTodoRef.remove().then(()=>{
        done();
      });
    });

    it('should toggle todo and dispatch update todo action',(done)=>{
      const store = createMockStore({});
      const action = actions.startToggleTodo(testTodoRef.key,true);

      store.dispatch(action).then(()=>{
        const mackActions = store.getActions();
        expect(mockActions[0]).toInclude({
          type:'UPDATE_TODO',
          id:testTodoRef
        });

        expect(mockActions[0].updates).toInclude({
          completed:true
        });

        expect(mockActions[0].updates.completedAt).toExist();

        done();

      },done);
      done();

    });

    it('should dispatch todos from firebase database',(done)=>{
      const store = createMockStore({});
      const action = actions.startAddTodos();
      store.dispatch(action).then(()=>{
        const mackActions = store.getActions();
        expect(mackActions[0].type).toEqual('ADD_TODOS');
        expect(mackActions[0].todos.length).toEqual(1);
        expect(mackActions[0].todos[0]).toEqual('something to do');
        done();
      },done);
      done();
    });

  });
});
