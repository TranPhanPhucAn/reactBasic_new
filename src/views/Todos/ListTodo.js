import React from "react";
import './ListToDo.scss';
import AddTodo from "./AddTodo";
import { toast } from 'react-toastify';

class ListToDo extends React.Component{
    state = {
        listTodos: [
            { id: 'todo1', title: 'Doing homework' },
            { id: 'todo2', title: 'Making video' },
            { id: 'todo3', title: 'Fixing bug' }            
        ],
        editTodo: {
            
        }
    }
    AddNewTodo = (todo) => {
        this.setState({
            listTodos: [...this.state.listTodos, todo],
        })
        toast.success("Wow so easy!")
    }
    handleDeleteTodo = (todo) => {
        let currentListTodos = this.state.listTodos;
        currentListTodos = currentListTodos.filter(item => item.id !== todo.id)
        this.setState({
            listTodos: currentListTodos,

        })
        toast.success("Delete succeed!")

    }
    handleEditTodo = (todo) => {
        let { editTodo,listTodos } = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0;
        //save
        if (isEmptyObj === false && editTodo.id === todo.id)
        {
            let listTodosCopy = [...listTodos];
            //todo.title = editTodo.title;
            let objIndex = listTodosCopy.findIndex(obj => obj.id === todo.id);
            listTodosCopy[objIndex].title = editTodo.title;
            this.setState({
                listTodos: listTodosCopy,
                editTodo:{}
            })
            toast.success("Update todo succeed!")

            return;
        }
        this.setState({
             editTodo: todo
        })
    }
    handleOnchangeEditTodo = (event) => {
        let editTodoCopy = { ...this.state.editTodo };
        editTodoCopy.title = event.target.value;
        this.setState({
            editTodo: editTodoCopy
        })
    }
    render() {
        let { listTodos,editTodo } = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0;
        return (
            <>
            <p>
          {/* Edit <code>src/App.js</code> and save to reload. */}
                Simple Todo Apps with react.js
            </p>
            <div className="List-todo-container">
                <AddTodo
                AddNewTodo={this.AddNewTodo}
                />
                <div className="list-todo-content">
                    
                    {listTodos && listTodos.length>0 && listTodos.map((item, index) => {
                        return (
                            <div className="todo-child" key={item.id}>
                                {isEmptyObj === true ?
                                <span>{index + 1} - {item.title} </span>
                                    :
                                    <>
                                        {editTodo.id===item.id ?
                                        <span>
                                                {index + 1} - <input value={editTodo.title}
                                        onChange={(event)=>this.handleOnchangeEditTodo(event)} />                                        
                                        </span>
                                            :
                                        <span>{index + 1} - {item.title} </span>
                                            
                                        }
                                        
                                    </>                                
                                }                                
                                <button
                                    onClick={() => this.handleEditTodo(item)}>
                                    {
                                        isEmptyObj === false && editTodo.id === item.id ? 'Save' : 'Edit'                                        
                                    }
                                </button>
                                <button className="delete"
                                onClick={()=>this.handleDeleteTodo(item)}>
                                    Delete
                                </button>                                                                    
                            </div>
                        )
                    })
                        
                    }
                    
                                      
                </div>
            </div>
            </>
       )
        
    }
}

export default ListToDo;