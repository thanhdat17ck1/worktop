import axios from "axios";
import React, { useEffect, useState } from "react";
import Work from "./Work";
import style from './listwork.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import TinhThanh from "../../components/TinhThanh/TinhThanh";
import Request from '../../Request'

const ListWork = () => {
  const [work, setWork] = useState([]);
  const [pageIndex, setPageIndex] = useState(1)
  const [pageIndex1, setPageIndex1] = useState([])
  const [activeIndex, setActiveIndex] = useState(0);
  const [vitri, setVitri] = useState("");
  const [search, setSearch] = useState("")
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${Request.baseUrl}/api/post/detail?pageindex=${pageIndex}&keyword=${search}&tenvitri=${vitri}`
        );
        setWork(response.data.data);
        // setPageIndex(response.data.TotalPage[0].TotalPages)
        setPageIndex1(response.data.TotalPage[0].TotalPages)
        console.log(work);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [pageIndex, vitri]);
  console.log(Request.baseUrl,"request");
  const TotalPage = Array.from(Array(pageIndex1), (_, index) => index + 1);
  const handleClick = (index) => {
    setActiveIndex(index);
  }
  console.log(TotalPage,"TotalPage");
  const HandleFind = () => {
    setPageIndex(1)
    setActiveIndex(0)
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${Request.baseUrl}/api/post/detail?pageindex=${pageIndex}&keyword=${search}&tenvitri=${vitri}`
        );
        setWork(response.data.data);
        // setPageIndex(response.data.TotalPage[0].TotalPages)
        setPageIndex1(response.data.TotalPage[0].TotalPages)
        console.log(work);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }

  return (
    <div className={style["l-container"]}>
      <div className={style["banner"]}>
        <div className={style["search"]}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <input type="text" placeholder="Tìm công việc, vị trí bạn muốn ứng tuyển" value={search} onChange={
            (e) => setSearch(e.target.value)} 
          />
        </div>
        <button onClick={HandleFind}>Tìm kiếm</button>
        <TinhThanh setVitri={setVitri} />
      </div>
      <div className={style["job-body"]}>
        <div className={style["job-body__left"]}>
          <Work works={work} />
         
         {TotalPage.length > 0 ? 
            <ul onClick={(e) => setPageIndex(e.target.value)} className={style["pagination"]}>
              <li value={1} onClick={() => handleClick(0)}>First</li>
              {TotalPage.map((number, index) => (
                <li key={number} value={number}  className={activeIndex === index ? style["active"] : ''}
                onClick={() => handleClick(index)}>{number}</li>
              ))}
              <li value={TotalPage[TotalPage.length - 1]} onClick={() => handleClick(TotalPage.length - 1)}>Last</li>
            </ul>
          :
            <p>Địa điểm hiện tại chưa đăng tuyển dụng</p>
          }
        </div>
        <div className={style["job-body__right"]}>
          <div className={style["interested"]}>
            <h3>Có thể bạn quan tâm</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListWork;
