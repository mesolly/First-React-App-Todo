import React from 'react'

export const TodoItem = ({todo,onDelete}) => {
  return (
    <div className="container my-3">
        <h4>{todo.Task}</h4>
        <p>{todo.Desc}</p>
        <button className="btn btn-danger" onClick={()=>{onDelete(todo)}}>Done</button>
    </div>
  )
}

