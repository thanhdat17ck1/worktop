import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import Request from '../../Request';
import style from './LoginAndRegister.module.scss'

const LoginAndRegister = () => {
  const [activeTab, setActiveTab] = useState('login');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [textError, setTextError] = useState("");
  const navigate = useNavigate();
  let slug = window.location.pathname;
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, email)
    let data = {
        "username": email,
        "password": password
      }
      console.log(data);
      try {
          
          const res = await axios.post(`${Request.baseUrl}/api/User/Login`, data, {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer yourAccessToken`
            }
          });
          
          console.log(res.config.data,"res1")
          delete res.config.data
          if(res.data.data === 409) {
            setTextError(res.data.message)
          }
          else if(res.data.data === 408) {
            setTextError(res.data.message)
          }
          else if(res.data.data === 407) {
            setTextError(res.data.message)
          }
          else {
            localStorage.setItem("token_user", JSON.stringify(res))
            if(slug === "/login") {
              if(Number(jwt_decode(JSON.stringify(res)).role) !== 0) {
                navigate('/listwork');
              }
              else {
                navigate('/category');
              }
             
            }
            else {
                window.location.reload();
            }
            // setUsername('')
            // setPassword('')
          }
          
          // const token = res;
      }catch (error){
          console.log('Error:', error);
      }
  };
  return (
    <div className={style["tab-container"]}>
      <div className={style["box"]}>
        <div className={style["tab-buttons"]}>
          <button
            className={style["register"]}
            onClick={() => handleTabClick('login')}
          >
            Đăng ký
          </button>
          <button
            className={style["login"]}
            onClick={() => handleTabClick('register')}
          >
            Đăng nhập
          </button>
        </div>

        <div className={style["tab-content"]}>
          {activeTab === 'register' && 
          <div>
              <h1>Chào mừng bạn đã quay trở lại</h1>
              <form onSubmit={handleSubmit}>
                <div className={style["field-wrap"]}>
                  <label>
                    Tài khoản<span className="req">*</span>
                  </label>
                  <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    autoComplete="off"
                  />
                </div>
                <div className={style["field-wrap"]}>
                  <label>
                    Mật khẩu<span className="req">*</span>
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    autoComplete="off"
                  />
                </div>
                <p className="forgot">
                  <a href="#">Quên mật khẩu</a>
                </p>
                <button className={style["button"]} type="submit">
                  Đăng nhập
                </button>
              </form>
          </div>
          }
          {activeTab === 'login' && 
          <div>
              <h1>Đăng ký tài khoản</h1>
              <form onSubmit={handleSubmit}>
                <div className="top-row">
                  <div className={style["field-wrap"]}>
                    <label>
                      Họ tên<span className="req">*</span>
                    </label>
                    <input
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                      autoComplete="off"
                    />
                  </div>
                  <div className={style["field-wrap"]}>
                    <label>
                      Tài khoản<span className="req">*</span>
                    </label>
                    <input
                      type="text"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      required
                      autoComplete="off"
                    />
                  </div>
                </div>
                {/* <div className={style["field-wrap"]}>
                  <label>
                    Email Address<span className="req">*</span>
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    autoComplete="off"
                  />
                </div> */}
                <div className={style["field-wrap"]}>
                  <label>
                    Mật khẩu<span className="req">*</span>
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    autoComplete="off"
                  />
                </div>
                <button type="submit" className={style["button"]}>
                  Đăng ký
                </button>
              </form>
          </div>
          }
        </div>
      </div>
    </div>
  );
};

export default LoginAndRegister;
