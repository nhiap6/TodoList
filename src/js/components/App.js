import React , {Component, PropTypes} from 'react';

import Todos from './Todos';

export default class App extends Component {

constructor(props){
super(props);

}
render(){
    const {state,showTodoInput, hideTodoInput,addTodo,addTodos , showEditTodoInput, editTodo} = this.props;
    const addButtonStyle = {
        margin: '50px',
        borderRadius:'3px'
    }

    const NewListButton = {
        textAllign:'center',
        display:'block',
        margin:'20px',
    }

    return (
     <div>
     <button style = {NewListButton} onClick = {addTodos}>Add New List</button>

      {
        state.todos.map( (data, index) => {
          return <Todos
          key = {index}
          index = {index}
          state = {state.todos[index]}
          showTodoInput = {showTodoInput}
          hideTodoInput = {hideTodoInput}
          addTodo = {addTodo}
          showEditTodoInput = {showEditTodoInput}
          editTodo = {editTodo} />

      }) }

    </div>
    );
}

}