import React from "react";
import style from "./index.module.scss";
import { useEffect } from "react";
import WorkHome from "../../components/WorkHome/WorkHome";
import { useState } from "react";
import axios from "axios";
import Request from "../../Request";
import img1 from "../../images/1-C1-346x 577.jpg";
import img2 from "../../images/3-C1-346x 577.jpg";

const Index = () => {
  const [work, setWork] = useState([]);
  const [pageIndex, setPageIndex] = useState(1);
  const [pageIndex1, setPageIndex1] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${Request.baseUrl}/api/post/detail?idUser=-1&pageindex=${pageIndex}&keyword=&tenvitri=`
        );
        setWork(response.data.data);
        // setPageIndex(response.data.TotalPage[0].TotalPages)
        setPageIndex1(response.data.TotalPage[0].TotalPages);
        console.log(work);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [pageIndex]);

  const TotalPage = Array.from(Array(pageIndex1), (_, index) => index + 1);
  const handleClick = (index) => {
    setActiveIndex(index);
  }
 
  return (
    <div className={style["l-container"]}>
      <div className={style["banner"]}></div>
      <WorkHome work={work} />

      <ul
        onClick={(e) => setPageIndex(e.target.value)}
        className={style["pagination"]}
      >
        <li value={1} onClick={() => handleClick(0)}>
          First
        </li>
        {TotalPage.map((number, index) => (
          <li
            key={number}
            value={number}
            className={activeIndex === index ? style["active"] : ""}
            onClick={() => handleClick(index)}
          >
            {number}
          </li>
        ))}
        <li
          value={TotalPage[TotalPage.length - 1]}
          onClick={() => handleClick(TotalPage.length - 1)}
        >
          Last
        </li>
      </ul>
      <div className={style["section-center-banners"]}>
        <div className={style["item"]}>
          <img src={img1} alt="" />
        </div>
        <div className={style["item"]}>
          <img src={img2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Index;
