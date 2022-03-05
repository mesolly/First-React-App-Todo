import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {Link } from "react-router-dom";
export const Header = (prop) => {

  const[mode,setMode] = useState('Light') ;

  const[myStyle,setmyStyle] = useState(
    {
      color: 'red',
      backgroundColor: 'red'
    }
  );

  const changeMode = () =>{
    if(mode=='Light'){
      setMode('Red') ;
      setmyStyle(
        {
          color: 'red',
          backgroundColor: 'white'
        }
      )
    }else{
      setMode('Light') ;
      setmyStyle(
        {
          color: 'red',
          backgroundColor: 'red'
        }
      )
    }
  }
  return (
    <>
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container" style={myStyle} >
    <Link className="navbar-brand" to="/">{prop.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/myTodo">My Todos</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/addTodo" >Add Todo</Link>
        </li>
      </ul>
      
      <button onClick={changeMode} className="btn btn-outline-success my-2 my-sm-0" type="submit">{mode}</button>
    

    </div>
  </div>
</nav>

    </>
  )
}

Header.defaultProps={
  title : "Hello"
}
Header.propTypes = {
  title : PropTypes.string
}