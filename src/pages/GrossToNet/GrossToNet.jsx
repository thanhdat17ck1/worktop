import React from "react";
import style from "./GrossToNet.module.scss";

const GrossToNet = () => {
  return (
    <div id={style['salary-page']}>
        <div id="calculate-salary-section" className={style["box-white"]}>
        <h1 className={style["title"]}>
            Công cụ tính lương Gross sang Net và ngược lại [Chuẩn 2023]
        </h1>
        <p className={style["text-muted-content"]}>
            Áp dụng mức giảm trừ gia cảnh mới nhất 11 triệu đồng/tháng (132 triệu
            đồng/năm) với nguời nộp thuế và 4,4 triệu đồng/tháng với mỗi người phụ
            thuộc (Theo Nghị quyết số 954/2020/UBTVQH14)
            <br />
            <br />
            Áp dụng{" "}
            <a href="#" className="text-highlight">
            mức lương tối thiểu vùng
            </a>{" "}
            mới nhất có hiệu lực từ ngày 01/07/2022 (Theo điều 3, Nghị định
            38/2022/NĐ-CP)
        </p>
        <form action id={style["salary-from"]}>
            <div id={style["salary-calculate-options"]} className="mb-12px">
            <div className={style["salary-calculate"]}>
                <p className={style["rule"]}>Áp dụng quy định:</p>{" "}
                <div className={`${style["d-flex"]} ${style["mb-1"]}`}>
                <span className={style["w-50"]}>
                    <label
                    className={`${style["custom-text-blue"]} ${style["radio-inline"]}`}
                    style={{ cursor: "pointer" }}
                    >
                    <input
                        id="salary-option-1"
                        type="radio"
                        name="salary_option"
                        defaultValue={1}
                        defaultChecked="checked"
                        style={{ marginRight: "5px" }}
                    />
                    Từ 01/07/2022
                    <span className="icon-radio " />
                    </label>{" "}
                    <span className={style["new"]}>(Mới nhất)</span>{" "}
                    <a
                    href="#"
                    data-toggle="modal"
                    data-target="#new_option_detail_modal"
                    className={`${style["hover-gray"]} ${style["ml-8"]}`}
                    >
                    <i
                        data-toggle="tooltip"
                        data-placement="top"
                        title
                        data-original-title="Xem chi tiết"
                        className="fa fa-question-circle"
                    />
                    </a>
                </span>{" "}
                <span className="w-50 ">
                    <label className={style["radio-inline"]} style={{ cursor: "pointer" }}>
                    <input
                        id="salary-option-2"
                        type="radio"
                        name="salary_option"
                        defaultValue={2}
                        style={{ marginRight: "5px" }}
                    />
                    Từ 01/07/2020 - 30/06/2022
                    <span className="icon-radio " />
                    </label>{" "}
                    <a
                    href="#"
                    data-toggle="modal"
                    data-target="#old_option_detail_modal"
                    className={`${style["hover-gray"]} ${style["ml-8"]}`}
                    >
                    <i
                        data-toggle="tooltip"
                        data-placement="top"
                        title
                        data-original-title="Xem chi tiết"
                        className="fa fa-question-circle"
                    />
                    </a>
                </span>
                </div>{" "}
                <div className={`${style["d-flex"]} ${style["list-salary"]}`}>
                <div>
                    <p className={style["mb-8"]}>Lương cơ sở:</p>{" "}
                    <span className={style["text-green"]}>1,490,000đ</span>
                </div>{" "}
                <div>
                    <p className={style["mb-8"]}>Giảm trừ gia cảnh bản thân:</p>{" "}
                    <span className={style["text-green"]}>11,000,000đ</span>
                </div>{" "}
                <div>
                    <p className={style["mb-8"]}>Người phụ thuộc:</p>{" "}
                    <span className={style["text-green"]}>4,400,000đ</span>
                </div>
                </div>
            </div>
            </div>{" "}
            <div className={`${style["input-salary"]} ${style["mb-12px"]}`}>
            <div className={`${style["d-flex"]} ${style["gap-47px"]} ${style["mb-24"]}`}>
                <div className={`${style["w-50"]} ${style["d-flex"]} ${style["flex-lg-column"]}`}>
                <label htmlFor className={`${style["mb-16"]} ${style["other"]} ${style["mb-24"]}`}>
                    Thu Nhập:
                </label>{" "}
                <div className={style["input-data"]}>
                    <span className="icon">
                    <i className="fa-solid fa-dollar-sign" />
                    </span>{" "}
                    <input
                    type="text"
                    name="luong"
                    defaultValue
                    className={style["border-hover"]}
                    />{" "}
                    <span className={style["caption"]}>(VNĐ)</span>
                </div>
                </div>{" "}
                <div className={`${style["w-50"]} ${style["d-flex"]} ${style["flex-lg-column"]}`}>
                <label htmlFor className={`${style["mb-16"]} ${style["other"]}`}>
                    Số người phụ thuộc:
                </label>{" "}
                <div className={style["input-data"]}>
                    <span className="icon">
                    <i className="fa-solid fa-user-group" />
                    </span>{" "}
                    <input
                    type="text"
                    name="nguoiPhuThuoc"
                    defaultValue
                    className={style["border-hover"]}
                    />{" "}
                    <span className={style["caption"]}>(Người)</span>
                </div>
                </div>
            </div>{" "}
            <div className={`${style["bao-hiem"]} ${style["d-flex"]} ${style["flex-lg-column"]} ${style["mb-14"]}`}>
                <label htmlFor className={`${style["title"]} ${style["mb-6"]}`}>
                Mức lương đóng bảo hiểm:
                </label>{" "}
                <div className={`${style["d-flex"]} ${style["gap-47px"]} ${style["items-center"]}`}>
                <label className={`${style["radio-inline"]} ${style["w-50"]} ${style["mb-0"]}`}>
                    <input
                    type="radio"
                    name="dongBaoHiem"
                    defaultValue="trenChinhThuc"
                    defaultChecked="checked"
                    />{" "}
                    <span>Trên lương chính thức</span>{" "}
                    <span className={style["icon-radio"]} />
                </label>{" "}
                <div className={`${style["d-flex"]} ${style["w-50"]} ${style["mr-auto"]} ${style["align-items-center"]}`}>
                    <label className="radio-inline other">
                    <input type="radio" name="dongBaoHiem" defaultValue="khac" />{" "}
                    <span className={style["icon-radio"]} /> <span>Khác:</span>
                    </label>{" "}
                    <div className={style["input-data"]}>
                    <span className={style["icon"]}>
                        <i className="fa-solid fa-dollar-sign" />
                    </span>{" "}
                    <input
                        type="text"
                        name="luongDongBaoHiem"
                        className="border-hover"
                    />{" "}
                    <span className={style["caption"]}>(VNĐ)</span>
                    </div>
                </div>
                </div>
            </div>{" "}
            <div className={style["region"]}>
                <p className="mb-16 ">
                <strong className={style["title"]}>Vùng: </strong>{" "}
                <a href="#" className="small new">
                    (Giải thích)
                </a>
                </p>{" "}
                <div className={style["label-input"]}>
                <label className={style["radio-inline"]}>
                    <input
                    type="radio"
                    name="vung"
                    defaultValue={1}
                    defaultChecked="checked"
                    />{" "}
                    I
                    <span className={style["icon-radio"]} />
                </label>{" "}
                <label className={style["radio-inline"]}>
                    <input type="radio" name="vung" defaultValue={2} /> II
                    <span className={style["icon-radio"]} />
                </label>{" "}
                <label className={style["radio-inline"]}>
                    <input type="radio" name="vung" defaultValue={3} /> III
                    <span className={style["icon-radio"]} />
                </label>{" "}
                <label className={style["radio-inline"]}>
                    <input type="radio" name="vung" defaultValue={4} /> IV
                    <span className={style["icon-radio"]} />
                </label>
                </div>
            </div>{" "}
            <div className={style["d-flex"]} />
            </div>
        </form>
        <div className={style["text-center"]} style={{ marginTop: "20px" }}>
            <a href="#" className={`${style["btn"]} ${style["btn-topcv-primary"]} ${style["btn-primary-hover"]}`}>
            GROSS <i className="fa-solid fa-arrow-right"></i> NET
            </a>
            <a href="#" className={`${style["btn"]} ${style["btn-topcv-primary"]} ${style["btn-secondary-hover"]}`}>
            NET <i className="fa-solid fa-arrow-right"></i> GROSS
            </a>
        </div>
        </div>
    </div>
  );
};

export default GrossToNet;
