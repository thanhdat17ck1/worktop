import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import style from './Login.module.scss'
import logo from '../../images/logo.png'
import Request from '../../Request';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [textError, setTextError] = useState("");
    const [showPassword, setShowPassword] = useState(true);
    const navigate = useNavigate();
    let slug = window.location.pathname;
    const onSubmit = async () => {
        let data = {
          "username": username,
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

              }
              setUsername('')
              setPassword('')
            }
            
            // const token = res;
        }catch (error){
            console.log('Error:', error);
        }
    }

  return (
    <div className={style['form']}>
      <div className={style['inner']}>
        <div className={style['header']}>
          <img src={logo} alt="logo" />
          <p className={style['txt']}>
            <span>Chào mừng bạn đã quay trở lại</span>
            Cùng xây dựng một hồ sơ nổi bật và nhận được các cơ hội sự nghiệp lý tưởng
          </p>
        </div>
        <div className={style['text-error']}>
          <span>{textError}</span>
        </div>
        <div className={style['form-group']}>
          <label htmlFor="">Tài khoản</label>
          <div className={style['input-group']}>
            <input type="text" placeholder='Nhập tài khoản' onChange={(e) => setUsername(e.target.value)} value={username} />
          </div>
        </div>
        <div className={style['form-group']}>
            <label htmlFor="">Mật khẩu</label>
            <div className={style['input-group']}>
              <input type={showPassword ? 'password' : 'text'} placeholder='Nhập mật khẩu' onChange={(e) => setPassword(e.target.value)} value={password}/>
              <button onClick={() => setShowPassword(!showPassword)}>{showPassword ? 'Hiển thị' : 'Ẩn'}</button>
            </div>
        </div>
        <div className={style['forgot-password']}>
          <Link to='/forgot-pasword'>Quên mật khẩu</Link>
        </div>
        <button className={style['submit']} onClick={onSubmit}>Đăng nhập</button>
        <div className={style['register']}>
          Bạn chưa có tài khoản? 
          <Link to={'/register'}> Đăng ký ngay</Link>
        </div>
      </div>
      
    </div>
  )
}

export default Login
