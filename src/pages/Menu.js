import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom';
const Menu = () => {
    return (
        <>
         <nav className="navbar navbar-expand-lg navbar-light bg-black">
            <NavLink className="navbar-brand" to="#">
            <img src="assets/img/logo.png" alt="" style={{width: '80px', height: '70px',}}/>
              </NavLink>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                 <span className="navbar-toggler-icon"></span>
               </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ms-auto">
      <li className="nav-item active">
        <NavLink className="nav-link active" style={{color:'white'}} to="/">Đăng nhập <span className="sr-only">(current)</span></NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link"  style={{color:'white'}} to="/signup">Đăng kí</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link"  style={{color:'white'}} to="/reservation">Đặt phòng</NavLink>
      </li>
    </ul>
    
  </div>
</nav>   
        </>
    );
}

export default Menu;
