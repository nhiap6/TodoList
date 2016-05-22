import React , {Component, PropTypes} from 'react';

export default class Todo extends Component{

    constructor(props){
        super(props);
    }

    handleShowTodoEdit = () => {
       const { position, listNumber, showEditTodoInput} = this.props;
       showEditTodoInput(listNumber,position);
    }

    checkForEnter = (e) => {
        if(e.key === 'Enter'){
            this.handleEditTodo(e);
        }
    }

    handleEditTodo = (e) => {
        const {editTodo, position, listNumber} = this.props;
        var info = {
           text: e.target.value,
           itemPosition: position,
           listNumber:listNumber
        };
        editTodo(info);
    }

    render(){
        const{text , position, edit,listNumber } = this.props;
        //console.log(edit);
        const TodoStyle = {
            marginBottom:'7px',
            cursor:'pointer',
        }

        var listItem;

        if(edit){
            listItem = <input autoFocus type = 'text' defaultValue = {text}  onKeyPress = {this.checkForEnter} onBlur = {this.handleEditTodo} />;
        }
        else{
            listItem = <li style = {TodoStyle} onClick = {this.handleShowTodoEdit}>{position+1}.  {text}</li>;
        }

        return(
            <div>
          {listItem}
          </div>
        );
    }
}