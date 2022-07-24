import React from "react";
import {BrowserRouter as Router, Link} from 'react-router-dom'
import '../header/Header.css'
const Header = () =>{
  return(
     <>
        
    <header className="header">
      <h1 className="title">Mc<span>2</span></h1>
     <nav className="nav-router">
        <ul className="list-router">
          <li>
            <Link className="link-login" to="/login">Login</Link>
          </li>

          <li>
            <Link className="link-register" to="/cadastro">Register</Link>
          </li>
        </ul>

     </nav> 

    </header>
     
 
     </>
   
  )
}

export default Header