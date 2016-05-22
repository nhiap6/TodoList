import React , {Component, PropTypes} from 'react';

import Todo from './Todo';

export default class Todos extends Component{


 constructor(props){
    super(props);

 }

 checkEnter = (event) => {
   if(event.key === 'Enter'){
     this.handleInput(event);
   }
}

handleInput = (event) => {
   const {addTodo , hideTodoInput , index} = this.props;
   var value = event.target.value;
   addTodo(value,index);
   hideTodoInput(index);
}

showInput = () => {
    const {index, showTodoInput} = this.props;
    console.log(index);
    showTodoInput(index);
}

 render(){

 const {state , showTodoInput , index, showEditTodoInput , editTodo} = this.props;
 const TodosStyle = {
    border: '2px solid black',
    display: 'inline-block',
   width: '300px',
    marginLeft: '20px',
    paddingRight:'10px',
    paddingLeft:'10px',
 }

 const ListStyle = {
    listStyle: 'none'
 }

 const ListNameStyle = {
    textAlign:'center',
    borderBottom:'2px solid black',
 }

 const AddTaskStyle = {
    marginLeft:'20px',
    marginBottom:'10px'
 }

 const TodosBoxStyle = {
    padding:'10px',
    display:'inline-block',
    border: '2px solid black',
    margin:'10px',
 }

 const InputForTodoStyle = {
    marginLeft:'10px',
 }

 var inputForTodo = '';

    if(state.show_input)
    inputForTodo = <input style = {InputForTodoStyle} type='text' placeholder = 'Unesite novi todo ovdje' onKeyPress = {this.checkEnter} onBlur = {this.handleInput} />;

  return(
    <div style = {TodosBoxStyle}>
    <div>
    <button style = {AddTaskStyle} onClick = {this.showInput} >Add Task</button>
     {inputForTodo}
     </div>

    <div style = {TodosStyle}>
    <h2 style={ListNameStyle}>{state.title}</h2>
    <ul style = {ListStyle}>
     {
           state.list_items.map( (data,position) => {
           return <Todo
           key = {position}
           listNumber = {index}
           position = {position}
           text = {data.text}
           edit = {data.edit}
           showEditTodoInput = {showEditTodoInput}
           editTodo = {editTodo} />
        })
     }
    </ul>
    </div>
    </div>
    );

 }

}