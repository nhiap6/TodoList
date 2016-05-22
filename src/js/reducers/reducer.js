
const realInitState = {
    todos: [],
}

const todosReducer = (state = [], action) => {
    switch(action.type){

       case 'ADD_TODOS':
       return [...state, action.todos]; // action.todos = {title, show_input, list_items}

       default:
       return state;

    }
}

const todo = (state = {} , action) => {

    switch(action.type){


    case 'ADD_TODO':
    return Object.assign( {}, state , {list_items: [...state.list_items, action.todo] } )


    case 'SHOW_INPUT':
    return Object.assign({} , state , {show_input:true});

    case 'HIDE_INPUT':
    return Object.assign({} , state , {show_input:false});


    case 'SHOW_EDIT_TODO_INPUT':
    var index = action.itemPosition;
    return Object.assign({}, state,  {list_items: [...state.list_items.slice(0,index) , Object.assign({}, state.list_items[index] , {edit:true}) ,...state.list_items.slice(index+1)] } )

    case 'EDIT_TODO':
    var index = action.itemPosition;
    var text = action.text;
    return Object.assign({}, state,  {list_items: [...state.list_items.slice(0,index) , Object.assign({}, state.list_items[index] , {edit:false, text    }) ,...state.list_items.slice(index+1)] } )



    default:
    return state


    }

}

const reducer = (state = realInitState,action) => {

     switch(action.type){

     case 'ADD_TODOS':
     return  Object.assign( {}, state ,  {todos: todosReducer(state.todos, action) } )


    case 'ADD_TODO':
    var index = action.index;
    return Object.assign( {} , state, { todos: [...state.todos.slice(0,index) ,todo(state.todos[index], action) , ...state.todos.slice(index+1) ] } )


    case 'SHOW_INPUT':
    var index = action.index;
    return Object.assign( {} , state, { todos: [...state.todos.slice(0,index) ,todo(state.todos[index], action) , ...state.todos.slice(index+1) ] } )


    case 'HIDE_INPUT':
    var index = action.index;
    return Object.assign( {} , state, { todos: [...state.todos.slice(0,index) , todo(state.todos[index], action) , ...state.todos.slice(index+1) ] } )


    case 'SHOW_EDIT_TODO_INPUT':
    var index = action.listNumber;
    return Object.assign( {} , state, { todos: [...state.todos.slice(0,index) , todo(state.todos[index], action) , ...state.todos.slice(index+1) ] } )

    case 'EDIT_TODO':
    var index = action.listNumber;
    return Object.assign( {} , state, { todos: [...state.todos.slice(0,index) , todo(state.todos[index], action) , ...state.todos.slice(index+1) ] } )


     default:
     return state;

    }

}

export default reducer;


