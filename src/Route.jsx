import React from 'react'
import { Link, NavLink } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Login from '../../pages/Login';
import Category from '../../pages/category/Create';
import Edit from '../../pages/category/Edit';
import Create from '../../pages/work/Create';
import ListWork from '../../pages/work/ListWork';
import style from './header.module.scss'
import logo from '../../images/logo.png'
import DetailWork from '../../pages/work/DetailWork';
import Index from '../../pages/Home';

function Menu({ role }) {
  const handleLogout = () => {
    localStorage.removeItem("token_user")
    window.location.reload();
  }
  return (
    <ul className={style["menu"]}>
      {Number(role) === 0 && (
        <>
          <li><NavLink to="/category">Category</NavLink></li>
          <li><NavLink to="/logout" onClick={handleLogout}>logout</NavLink></li>
        </>
      )}
      {Number(role) === 1 && (
        <>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/work">work</NavLink></li>
          <li><NavLink to="/listwork">List work</NavLink></li>
          <li><NavLink to="/logout" onClick={handleLogout}>logout</NavLink></li>
        </>
      )}
      {(role === undefined || role === null) && (
        <li><NavLink to="/login">Login</NavLink></li>
      )}
    </ul>
  );
}

const Header = ({token}) => {
    
   let role = token.role;
  return (
    <div>
      <header className={style["c-header"]}>
        <div className={style["c-header__left"]}>
          <Link to="/" className={style["logo"]}><img src={logo} alt="" /></Link>
          <Menu role={role} />
        </div>
      </header>
      
      <Routes>
        <Route path="/login" element={<Login />} />
        {
        Number(role) === 0 ? 
        <>
          <Route path="/category" element={<Category />} />
          <Route path="/category/:id" element={<Edit />} /> 
        </>
        : 
        <>
          Number(role) === 1 ?

          <>
            <Route path="/" element={<Index />} />
            <Route path="/work" element={<Create Mytoken={token.nameid} />} />
            <Route path="/listwork" element={<ListWork  />} />
            
          </>
          :
          <>
            <Route path="/listwork/:id" element={<DetailWork Mytoken={token.nameid}/>} />
          </>
        </>
        }
      </Routes>
    </div>
  )
}

export {Header}
