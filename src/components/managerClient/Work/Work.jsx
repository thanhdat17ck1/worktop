import React from 'react'
import style from "../../../pages/work/listwork.module.scss";
import { Link } from 'react-router-dom';

function UpdateAt(date) {
    let currentDate = new Date(); // Lấy ngày hiện tại
    // Để tính số ngày giữa hai ngày, chúng ta trừ ngày trước đó từ ngày hiện tại và chia cho số milliseconds trong 1 ngày (86400000 milliseconds)
    let timeDifference = currentDate - new Date(date);
    let numberOfDays = Math.floor(timeDifference / (60 * 60 * 1000));
    if(numberOfDays > 24 && numberOfDays < 168) {
        return Math.floor(numberOfDays / 24) + " ngày"; 
    }
    if(numberOfDays < 24) {
        if(numberOfDays === 0) {
            return 1 + " giờ"; 
        }
        return numberOfDays + " giờ"; 
    }
    if(numberOfDays > 168 && numberOfDays < 672) {
        return Math.floor(numberOfDays / 168) + " tuần"; 
    }
    if(numberOfDays > 672 && numberOfDays < 8064) {
        return Math.floor(numberOfDays / 672) + " tháng"; 
    }
    if(numberOfDays > 8064) {
        return Math.floor(numberOfDays / 8064) + " năm"; 
    }
}

function HandleDate(date) {
    let currentDate = new Date(); // Lấy ngày hiện tại
    let targetDate = new Date(date); // Ngày cụ thể

    // Để tính số ngày còn lại, chúng ta trừ ngày hiện tại từ ngày cụ thể và chia cho số milliseconds trong 1 ngày (24 * 60 * 60 * 1000 milliseconds)
    let timeDifference = targetDate - currentDate;
    let numberOfDays = Math.ceil(timeDifference / (24 * 60 * 60 * 1000));
    if(numberOfDays < 0) {
      return false;
    }
    return  numberOfDays;
}

const Work = ({works}) => {
  console.log(works,"kk");
  return (
    <>
      {works?.map((work) => (
        <Link to={`/detailpost/${work.id}`} key={work.id} className={style["box"]}>
          <div className={style["img"]}>
            <img
              src="https://cdn-new.topcv.vn/unsafe/200x/filters:format(webp)/https://static.topcv.vn/company_logos/cong-ty-tnhh-giai-phap-kinh-doanh-the-he-moi-vnng-640fe72f8540f.jpg"
              alt=""
            />
          </div>
          <div className={style["box-info"]}>
            <div className={style["box-info__left"]}>
              <div>
                <h3 className={style["title"]}>{work.title}</h3>
                <p className={style["companyName"]}>{work.fullname}</p>
              </div>

              <div className={style["label-content"]}>
                <label className="location">{work.TenViTri}</label>
                <label className={style["time-remaining"]}>
                  {
                    HandleDate(work.Time_remaining) === false ? "hết hạn" : (<p>{"còn "}<span>{HandleDate(work.Time_remaining)}</span>{" ngày để ứng tuyển"}</p>)
                  } 
                </label>
                <label className="updateAt">Cập nhật {UpdateAt(work.updateAt)} trước</label>
              </div>
            </div>
            <div className={style["box-info__right"]}>
              <p className={style["wage"]}>{work.wage}</p>
              <span>Ứng tuyển</span>
            </div>
          </div>
        </Link>
      ))}
    </>
  )
}

export default Work
