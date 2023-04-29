import React from 'react'
import {Link,Outlet} from "react-router-dom";
import "./style/Global.scss"

const Layout = () => {
  return (
    <>
    
    <header>
      <div className="company-icon">
        <Link to="/"><i class="fa-solid fa-cat" id = "cat-icon"></i></Link>
      </div>
      <div className="search-box">
        <input type="text" placeholder="Search..." />
      </div>
        <div className="auth-buttons">
            <button onclick="window.location.href = '/';">Register</button>
            <button onclick="window.location.href = '/';">Login</button>
        </div>
    </header>
    <Outlet/>
    <footer>
      <p>© 2023 Course for You</p>
    </footer>
    </>
  )
}

export default Layout