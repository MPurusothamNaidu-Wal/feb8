import PropTypes from 'prop-types'
import { useState } from "react";
function Todo(props){
    let [todo, setWork] = useState([]);
    function addWork(event){
        event.preventDefault();
        let formTag = event.target;
        let inputTag = formTag.todo;

        let newTodo = [...todo,inputTag.value];
        setWork(newTodo);
    }
    function removeAll(){
        setWork([]);
    }
    return(
        <div className="divTodo">
            <h1 className='h1Todo'>Todo App</h1>
            <div className="TodoForm">
                <form onSubmit={addWork}>
                    <input className="Todoinput" type="text" name="todo" /><br />
                    <button className="TodoSubmit">Add work</button>
                </form>
                <button className="TodoSubmit" onClick={removeAll}>Remove from the list</button>
            </div>
            
            {
                todo.map(function (val , index){
                    return(
                        <div className='divInner'>{val} 
                        <h5>Time:{props.time}: {props.minutes}</h5></div>    
                    )
                })
            }
        </div>
    )
}
export default Todo;