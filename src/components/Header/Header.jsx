import React from 'react'
import { Link, NavLink } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Login from '../../pages/Login/Login';
import Category from '../../pages/category/Create';
import Edit from '../../pages/category/Edit';
import Create from '../../pages/work/Create';
import ListWork from '../../pages/work/ListWork';
import style from './header.module.scss'
import logo from '../../images/logo.png'
import DetailWork from '../../pages/work/DetailWork';
import Index from '../../pages/Home';
import AdminCreateCategory from '../../Admin/pages/category/AdminCreateCategory';
import HomeAdmin from '../../Admin/pages/Home/HomeAdmin';
import Register from '../../pages/register/register';
import ListPost from '../managerClient/ListPost/ListPost';
import DetailPostByUser from '../../pages/Manager/DetailPostByUser';

// function Menu({ role }) {
//   const handleLogout = () => {
//     localStorage.removeItem("token_user")
//     window.location.reload();
//   }
// }
const handleLogout = () => {
  localStorage.removeItem("token_user")
  window.location.reload();
}
const Header = ({token}) => {
    
   let role = token.role;
   let userId = token.nameid;
  console.log(userId,"userId");
  return (
    <div>
      {
        Number(role) === 0 ?
          <div className='c-headerAdmin'>
            <Link to={'/admin'}>Quay về trang quản lí</Link>
          </div>
        :
          ''
      }
      
      <div className={style['c-header']}>
        <div className={style['c-header__left']}>
          <Link to={'/'}><img src={logo} alt="logo" /></Link>
          <ul className={style['menu']}>
            <li>
              <Link to={'/listwork'}>Việc làm</Link>
            </li>
            {Number(role) === 1 ?
              <>
                <li>
                  <Link to='/work'>Đăng tuyển dụng</Link>
                </li>
                <li>
                  <Link to='/listpost'>Quản lí bài đăng tuyển</Link>
                </li>
              </>
              :
              ''
            }
          </ul>
        </div>
        <div className={style['c-header__right']}>
          
          {role ? 
            <Link to='/logout' onClick={handleLogout} className={`${style.button} ${style.logout}`}>Đăng xuất</Link>
          :
            <>
              <Link to='/login' className={`${style.button} ${style.login}`}>Đăng nhập</Link>
              <Link to='/register' className={`${style.button} ${style.register}`}>Đăng Ký</Link>
            </>
          }
        </div>
      </div>
      

      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/listwork" element={<ListWork />} />
        <Route path="/listwork/:id" element={<DetailWork Mytoken={token}/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {
        Number(role) === 0 ? 
        <>
          <Route path="/admin/" element={<HomeAdmin />} />
          <Route path="/admin/category/create" element={<AdminCreateCategory />} />
          <Route path="/category" element={<Category />} />
          <Route path="/category/:id" element={<Edit />} /> 
        </>
        : 
        <>
          Number(role) === 1 ?
          <>
            <Route path="/work" element={<Create Mytoken={token.nameid} />} />
            <Route path="/listpost" element={<ListPost userId={userId} />} />
            <Route path="/detailpost/:id" element={<DetailPostByUser userId={userId} />} />
          </>
          :
          ''
        </>
        }
      </Routes>
    </div>
  )
}

export {Header}
