import React, { useState } from 'react'
export const Body = () => {
  const[mode,setMode] = useState('dark') ;
  const[myStyle,setmyStyle] = useState(
    {
      color: 'Black',
      backgroundColor: 'White'
    }
  );

  const changeMode = () =>{
    if(mode=='light'){
      document.body.style.backgroundColor = 'white';
      setMode('dark') ;
      setmyStyle(
        {
          color: 'Black',
        }
        
      )
    }else{
      setMode('light') ;
      document.body.style.backgroundColor = 'black';
      setmyStyle(
        {
          color: 'White',
          //backgroundColor: 'Black'
        }
      )
    }
  }
  return (
    <>
    <div className = 'container' style={myStyle} >
    <div className ="container-xxl display-1 text-center" >
        React Based Todo Web-App
    </div>
    
    <div class="border border-light p-3 mb-4">
        <div class="text-center">
        <button onClick={changeMode} type="button" className={`btn btn-${mode} btn-lg`}>{mode}</button>
        </div>
    </div>
    </div>
    </>
  )
}
