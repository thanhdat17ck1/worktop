import React from 'react'
import style from './boxInfoDetail.module.scss'

function formatDate(dateString) {
    var date = new Date(dateString);

    var day = date.getDate();
    var month = date.getMonth() + 1; // Lưu ý: Tháng trong JavaScript bắt đầu từ 0 (0 - 11)
    var year = date.getFullYear();

    // Đảm bảo định dạng ngày và tháng có hai chữ số
    day = (day < 10) ? "0" + day : day;
    month = (month < 10) ? "0" + month : month;

    var formattedDate = day + "/" + month + "/" + year;

    return formattedDate;
}

const BoxInfoDetail = ({data}) => {
    console.log(data,"data");
  return (
    <div>
        {data.map((work) => (
            <>
                <div>
                    <div className={style["box"]}>
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
                                <p>Hạn nộp hồ sơ: {formatDate(work.Time_remaining)}</p>
                            </div>
                            </div>
                            <div className={style["box-info__right"]}>
                            <p className={style["wage"]}>{work.wage}</p>
                            <span>Ứng tuyển</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style["bg-white"] + " " + style["p-15"]}>
                    <div className={style["description"]}>
                        <h3>Chi tiết tin tuyển dụng</h3>
                        <div>

                        </div>
                        <div className='job-data' dangerouslySetInnerHTML={{ __html: work.postDescription }}>
                            {/* {work.postDescription} */}
                        </div>
                    </div>
                </div>
                
            </>
        ))}
    </div>
  )
}

export default BoxInfoDetail
