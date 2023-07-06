import React from "react";
import style from "./WorkHome.module.scss";
import { Link } from "react-router-dom";

const WorkHome = ({ work }) => {
  console.log(work, "kk");
  return (
    <>
      <div className={style["list-job"]}>
        {work?.map((work) => (
          <div className={style["box"]}>
            <div className={style["box-top"]}>
              <div className={style["img"]}>
                <img
                  src="https://cdn-new.topcv.vn/unsafe/200x/filters:format(webp)/https://static.topcv.vn/company_logos/cong-ty-tnhh-giai-phap-kinh-doanh-the-he-moi-vnng-640fe72f8540f.jpg"
                  alt=""
                />
              </div>
              <div className={style["box-info"]}>
                <div>
                  <Link
                    to={`/listwork/${work.id}`}
                    key={work.id}
                    className={style["title"]}
                  >
                    {work.title}
                  </Link>
                  <p className={style["companyName"]}>{work.fullname}</p>
                </div>
              </div>
            </div>
            <div className={style["box-bottom"]}>
              <p className={style["wage"]}>{work.wage}</p>
              <div className={style["label-content"]}>
                <label className="location">{work.TenViTri}</label>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default WorkHome;
