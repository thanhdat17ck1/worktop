import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import style from './register.module.scss'
import logo from '../../images/logo.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Request from '../../Request';

const Register = () => {
    const [username, setUsername] = useState("");
    const [pawssword, setPassword] = useState("");
    const [fullname, setFullname] = useState("");
    const [permission, setPermission] = useState(2);
    // const [showPermission, setShowPermission] = useState(2);
    const [showPassword, setShowPassword] = useState(true);
    const navigate = useNavigate();
    const onSubmit = async () => {
        try {
            const res = await axios.post(`${Request.baseUrl}/api/User/PostUser`, null , {
                params: {
                    username: username,
                    password: pawssword,
                    userid: -1,
                    fullname: fullname,
                    permission: permission
                }
            },{
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: 'Bearer yourAccessToken'
                }
              });
            console.log(typeof res.data,"e")
            if(res.data === 200) {
              setUsername('')
              setPassword('')
              setFullname('')
              setPermission('')
              toast("Tài khoản tạo thành công!");
            }
            else if(res.data === 406) {
              toast("Tài khoản đã tồn tại!");
            }
            else {
              toast("Vui lòng nhập đủ thông tin!");
            }
            // localStorage.setItem("token_user", JSON.stringify(res))
            // if(Number(jwt_decode(JSON.stringify(res)).role) !== 0) {
            //   navigate('/listwork');
            // }
            // else {
            //   navigate('/category');
            // }
            // const token = res;
            
        }catch (error){
            console.log('Error:', error);
        }
        
    }
  const handleClickPermisson = (e) => {
    setPermission(e.target.value)
  }
  return (
    <div className={style['form']}>
      <div className={style['inner']}>
        <div className={style['header']}>
          <img src={logo} alt="logo" />
          <p className={style['txt']}>
            <span>Chào mừng bạn đến với TopCV</span>
            Cùng xây dựng một hồ sơ nổi bật và nhận được các cơ hội sự nghiệp lý tưởng
          </p>
        </div>
        <div className={style['form-group']}>
          <label htmlFor="">Tên công ty</label>
          <div className={style['input-group']}>
            <input type="text" placeholder='Nhập tên công ty' onChange={(e) => setFullname(e.target.value)} value={fullname} />
          </div>
        </div>
        <div className={style['form-group']}>
          <label htmlFor="">Tài khoản</label>
          <div className={style['input-group']}>
            <input type="text" placeholder='Nhập tên tài khoản' onChange={(e) => setUsername(e.target.value)} value={username} />
          </div>
        </div>
        <div className={style['form-group']}>
            <label htmlFor="">Mật khẩu</label>
            <div className={style['input-group']}>
              <input type={showPassword ? 'password' : 'text'} placeholder='Nhập mật khẩu' onChange={(e) => setPassword(e.target.value)} value={pawssword}/>
              <button onClick={() => setShowPassword(!showPassword)}>{showPassword ? 'show' : 'hide'}</button>
            </div>
        </div>
        <div className={style['form-group']}>
            <label htmlFor="">Vai trò</label>
            <div className={style['input-group-permission']}>
              <input type="radio" id='uv' name='permission' value="2" checked={Number(permission) === 2} onClick={handleClickPermisson} />
              <label htmlFor="uv" onClick={handleClickPermisson}>Ứng viên</label>
              <input type="radio" id='ntd' name='permission' value="1" checked={Number(permission) === 1} onClick={handleClickPermisson} />
              <label htmlFor="ntd" onClick={handleClickPermisson} >Nhà tuyển dụng</label>
            </div>
        </div>
        <button className={style['submit']} onClick={onSubmit}>Đăng ký</button>
        <div className={style['register']}>
          Bạn đã có tài khoản?
          <Link to={'/login'}> Đăng nhập ngay</Link>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default Register
