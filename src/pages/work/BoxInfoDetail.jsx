import React, { useState } from "react";
import style from "./boxInfoDetail.module.scss";
import Request from "../../Request";
import axios from "axios";
import LoginAndRegister from "../../components/Modal/LoginAndRegister";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from "react-modal";
import { useEffect } from "react";

function formatDate(dateString) {
  var date = new Date(dateString);

  var day = date.getDate();
  var month = date.getMonth() + 1; // Lưu ý: Tháng trong JavaScript bắt đầu từ 0 (0 - 11)
  var year = date.getFullYear();

  // Đảm bảo định dạng ngày và tháng có hai chữ số
  day = day < 10 ? "0" + day : day;
  month = month < 10 ? "0" + month : month;

  var formattedDate = day + "/" + month + "/" + year;

  return formattedDate;
}

const BoxInfoDetail = ({ data, vitri, Mytoken }) => {
  console.log(Mytoken, "Mytoken");
  const [clicked, setClicked] = useState(false);
  const [role, setRole] = useState(true);
  const className = clicked ? "clicked" : "";
  const [checkChooseFile, setCheckChooseFile] = useState(false);
  const { id } = useParams();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  // const openModal = () => {
  //     setModalIsOpen(true);
  //   };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  const handleKeyDown = (event) => {
    if (event.keyCode === 27) {
      // 27 is the key code for "esc" key
      closeModal();
    }
  };

  useEffect(() => {
    // Add event listener when component mounts
    document.addEventListener("keydown", handleKeyDown);

    // Clean up the event listener when component unmounts
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  const handleUngTuyen = () => {
    if (Object.keys(Mytoken).length === 0) {
      setRole(false);
    } else {
      setClicked(!clicked);
    }
    setModalIsOpen(true);
  };
  const handleModalClose = () => {};
  const handleNopCv = () => {
    if (checkChooseFile === true) {
      let inputFile = document.getElementById("pdfInput").files[0];

      pdfToByteArray(inputFile, function (byteArray) {
        let binaryString = "";
        for (let i = 0; i < byteArray.length; i++) {
          binaryString += String.fromCharCode(byteArray[i]);
        }

        // Convert binary string to base64
        let base64Data = btoa(binaryString);
        downloadFileFromBlob(base64Data, Mytoken.nameid);
      });
      setClicked(!clicked);
      toast.success("Nộp CV thành công !", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      alert("Bạn chưa chọn file");
      console.log(id, "PostId");
    }
  };
  const handleCancleNopCV = () => {
    setClicked(!clicked);
  };
  const chooseFile = () => {
    setCheckChooseFile(true);
    // let inputFile = document.getElementById("pdfInput").files[0];

    // pdfToByteArray(inputFile, function(byteArray) {
    //     let binaryString = "";
    //     for (let i = 0; i < byteArray.length; i++) {
    //       binaryString += String.fromCharCode(byteArray[i]);
    //     }

    //     // Convert binary string to base64
    //     let base64Data = btoa(binaryString);
    //     downloadFileFromBlob(base64Data)
    // });
  };

  function pdfToByteArray(file, callback) {
    var reader = new FileReader();

    reader.onload = function (e) {
      var arrayBuffer = e.target.result;
      var byteArray = new Uint8Array(arrayBuffer);

      callback(byteArray);
    };

    reader.readAsArrayBuffer(file);
  }

  function downloadFileFromBlob(base64Data, userID) {
    let apiUrl = `${Request.baseUrl}/api/User/DownloadBlob1`;

    // Gửi byte array bằng Axios
    axios
      .post(apiUrl, { pdfData: base64Data, userId: userID, postId: id })
      .then(function (response) {
        console.log("Byte array sent successfully.");
      })
      .catch(function (error) {
        console.log("Error sending byte array:", error);
      });
  }

  async function fileToBase64(filePath) {
    try {
      // Fetch the file using the file path
      const response = await fetch(filePath);
      const arrayBuffer = await response.arrayBuffer();
  
      // Convert the array buffer to base64 string
      const base64String = btoa(
        new Uint8Array(arrayBuffer).reduce(
          (data, byte) => data + String.fromCharCode(byte),
          ''
        )
      );
  
      return base64String;
    } catch (error) {
      console.error('Error reading the file:', error);
      return null;
    }
  }

  const downloadFile = () => {
    let apiUrl = `${Request.baseUrl}/api/User/GetCV?CvName=CV-4-.pdf`;
    
    // let inputFile = document.getElementById("pdfInput").files[0];
    axios.get(apiUrl)
    .then(response => {
        fileToBase64(response)
        .then((base64String) => {
          if (base64String) {
            console.log('Base64 representation of the file:', base64String);
          } else {
            console.log('File conversion to base64 failed.');
          }
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    })
    .catch(error => {
      console.error('Error while downloading the file:', error);
    });
  };

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
          <div
            className={
              style["bg-white"] + " " + style["p-15"] + " " + style["diachi"]
            }
          >
            Địa chỉ:
            <ul>
              {vitri.map((x, index) => (
                <li key={index}>{x.DiaDiem}</li>
              ))}
            </ul>
          </div>
          <div className={style["bg-white"] + " " + style["p-15"]}>
            <div className={style["description"]}>
              <h3>Chi tiết tin tuyển dụng</h3>
              <div></div>
              <div
                className="job-data"
                dangerouslySetInnerHTML={{ __html: work.postDescription }}
              >
                {/* {work.postDescription} */}
              </div>
            </div>
          </div>

          {Object.keys(Mytoken).length === 0 || Mytoken.role === 2 ? (
            <>
              <div>
                <h3>Cách thức ứng tuyển</h3>
                <div>
                  <p>
                    Ứng viên nộp hồ sơ trực tuyến bằng cách bấm Ứng tuyển ngay
                    dưới đây.
                  </p>
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
                    <input type="file" onChange={chooseFile} id="pdfInput" />
                    <button onClick={handleNopCv}>Nộp CV</button>
                    <button onClick={handleCancleNopCV}>Hủy</button>
                  </div>
                </div>
              </div>
            </>
          ) : (
            ""
          )}

          {/* <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    contentLabel="Example Modal"
                >
                     {!role ? <LoginAndRegister /> : ''}
                </Modal> */}
          {modalIsOpen && (
            <div className={style["modal-container"]}>
              <div className={style["modal-overlay"]} onClick={closeModal} />
              {!role ? <LoginAndRegister /> : ""}
            </div>
          )}
        </>
      ))}
        <button onClick={downloadFile}>Download File</button>
      <ToastContainer />
    </div>
  );
};

export default BoxInfoDetail;
