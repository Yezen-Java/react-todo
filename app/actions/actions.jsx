export var setSearchText = (setSearchText)=>{
  return{
    type: 'SET_SEARCH_TEXT',
    setSearchText
  }
};

export var toggleShowCompleted = ()=>{
  return {
    type:'TOGGLE_SHOW_COMPLETED'
  };
};

export var addTodo = (text)=>{
  return {
    type:'ADD_TODO',
    text
  };

};


export var toggleTodo = (id)=>{
  return {
    type:'TOGGLE_TODO',
    id
  };
};
