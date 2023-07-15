import React, { useState } from 'react'
import style from './boxInfoDetail.module.scss'
import Request from '../../Request';
import axios from 'axios';

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



const BoxInfoDetail = ({data, vitri}) => {
    console.log(data,"data")
    const [clicked, setClicked] = useState(false)
    const className = clicked ? 'clicked' : '';
    const handleUngTuyen = () => {
        setClicked(!clicked)
    }
    const handleNopCv = () => {
        alert("a")
    }
    const handleCancleNopCV = () => {
        setClicked(!clicked)
    }
    const chooseFile = () => {
        let inputFile = document.getElementById("pdfInput").files[0];

        pdfToByteArray(inputFile, function(byteArray) {
            let binaryString = "";
            for (let i = 0; i < byteArray.length; i++) {
              binaryString += String.fromCharCode(byteArray[i]);
            }
        
            // Convert binary string to base64
            let base64Data = btoa(binaryString);
            downloadFileFromBlob(base64Data)
        });
    }

    function pdfToByteArray(file, callback) {
        var reader = new FileReader();
    
        reader.onload = function(e) {
          var arrayBuffer = e.target.result;
          var byteArray = new Uint8Array(arrayBuffer);
    
          callback(byteArray);
        };
    
        reader.readAsArrayBuffer(file);
      }

      function downloadFileFromBlob(base64Data) {
        var apiUrl = `${Request.baseUrl}/api/User/DownloadBlob1`;
      
        // Gửi byte array bằng Axios
        axios.post(apiUrl, { pdfData: base64Data, userId: 4, postId: 11 })
          .then(function(response) {
            console.log("Byte array sent successfully.");
          })
          .catch(function(error) {
            console.log("Error sending byte array:", error);
          });
      }
  return (
    <div className={style["detail-work"]}>
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
                <div className={style["bg-white"] + " " + style["p-15"] + " " + style["diachi"]}>
                    Địa chỉ:
                    <ul>
                        {
                            vitri.map((x, index) => (
                                <li key={index}>{x.DiaDiem}</li>
                            ))
                        }
                    </ul>
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
                <div>
                    <h3>Cách thức ứng tuyển</h3>
                    <div>
                        <p>Ứng viên nộp hồ sơ trực tuyến bằng cách bấm Ứng tuyển ngay dưới đây.</p>
                        <div>
                            <button onClick={handleUngTuyen}>Ứng tuyển ngay</button>
                            <button>Lưu tin</button>
                        </div>
                        <span>Hạn nộp hồ sơ: {formatDate(work.Time_remaining)}</span>
                    </div>
                </div>
                <div className={style["modal-apply-cv"] + " " + style[className]}>
                    <div className={style["modal-content"]}>
                        <div>
                            <h3>Ứng tuyển</h3>
                        </div>
                        <div className={style["file"]}>
                            <input type="file" onChange={chooseFile} id='pdfInput' />
                            <button onClick={handleNopCv}>Nộp CV</button>
                            <button onClick={handleCancleNopCV}>Hủy</button>
                        </div>
                    </div>
                </div>
            </>
        ))}
    </div>
  )
}

export default BoxInfoDetail
