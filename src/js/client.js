import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';

import App from './components/App';
import reducer from './reducers/reducer';

const app = document.getElementById('app');
const store = createStore(reducer);

const showTodoInput = (index) => {
   store.dispatch({type: 'SHOW_INPUT' , index: index});
}

const hideTodoInput = (index) => {
   store.dispatch({type: 'HIDE_INPUT' , index: index });
}

const addTodo = (value,index) => {
    console.log('value',value);
   store.dispatch({type: 'ADD_TODO', index:index ,todo: {id:Date.now() , text: value , edit:false }})
}

const addTodos = () => {
    store.dispatch({
         type: 'ADD_TODOS',
         todos:{
         title:'list title',
         show_input:false,
         list_items :[] }
});
}

const showEditTodoInput = (listNumber, itemPosition) => {
   store.dispatch( {type: 'SHOW_EDIT_TODO_INPUT' , listNumber , itemPosition});
}

const editTodo = (info) => {
    const {listNumber, itemPosition , text} = info;
    store.dispatch({ type: 'EDIT_TODO', listNumber, itemPosition, text })
}

const render = () => {
    console.log('State',store.getState());
    ReactDOM.render(

        <App
        state = {store.getState() }
        showTodoInput = {showTodoInput}
        hideTodoInput = {hideTodoInput}
        addTodo = {addTodo}
        addTodos = {addTodos}
        showEditTodoInput = {showEditTodoInput}
        editTodo = {editTodo} />
         ,app);
}

render();
store.subscribe(render);