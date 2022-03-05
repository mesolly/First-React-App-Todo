import logo from './logo.svg';
import './App.css';
import {Header} from "./MyComponent/Header";
import {Footer} from "./MyComponent/Footer";
import {AddTodo} from "./MyComponent/AddTodo";
import {Todos} from "./MyComponent/Todos";
import React, { useState,useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Body } from './MyComponent/Body';


function App() {
  let initTodo ;
  if(localStorage.getItem("todos")===null){
    initTodo = [] ;
  }else{
    initTodo = JSON.parse(localStorage.getItem("todos")) ;
  }
  const onDelete = (todo) =>{
    console.log("On Delete",todo) ;
    setTodos(todos.filter((t)=>{
        return t!=todo ;
    }))
    localStorage.setItem("todos",JSON.stringify(todos)) ;
  }

  const addTodo = (title,desc) => {
    let sno ;
    if(todos.length===0)
      sno = 1 ;
    else
      sno = todos[todos.length-1].Sno + 1 ;
    console.log('Adding Todo',title,desc) ;
    
    const myTodo = {
      Sno: sno ,
      Task : title,
      Desc : desc
    }
    setTodos([...todos,myTodo]);
    console.log(myTodo) ;
  }

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos)) ;
  }, [todos])
  
  return (
    <Router>
    <Header title={"My Todo List"}/>
    <Routes>
        <Route path="/" element={<Body/>}/>
        <Route path="/addTodo" element={<AddTodo addTodo = {addTodo}/>}/>
        <Route path="/myTodo" element = {<Todos todos = {todos} onDelete = {onDelete}/>}/>
      </Routes>
    </Router>
  );
}

export default App;
