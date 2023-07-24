import logo from '../../images/logo.png'
import style from './Footer.module.scss'

const Footer = () => {
  return (
    <div className={style["c-footer"]}>
        <div className={style["l-container"]}>
            <div className={style["c-footer__box"]}>
                <div className={style["logo"]}>
                    <img src={logo} alt="" />
                </div>
                <ul>
                    <li>Trang chủ</li>
                    <li>Việc làm</li>
                    <li>Chính sách bảo mật</li>
                </ul>
            </div>
        </div>
    </div>
    
  )
}

export default Footer
