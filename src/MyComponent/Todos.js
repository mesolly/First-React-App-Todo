import React from 'react'
import {TodoItem} from './TodoItem'

export const Todos  = (props) => {
    return (
    <div className="container my-3">
        <h3 className="text-center py-3 my-3">Todo List</h3>
           {props.todos.length===0?"No Todos to show":
           props.todos.map((todo)=>{
            return <TodoItem todo = {todo} key = {todo.Sno} onDelete = {props.onDelete}/>
       })}
    </div>
  )
}
