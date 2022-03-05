import React from 'react'


export const Footer = () => {
  let foot = {
  position: "relative",
   left: "0",
   bottom: "0",
   width: "100%"
  }
  return (
    <footer className="flex-shrink-0 py-4 bg-dark text-white-50" style ={foot}>
     <p className="text-center">Copyright &copy; Your Website</p>
  </footer>
  )
}
