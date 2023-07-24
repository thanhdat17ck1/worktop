import React from 'react'
import Work from '../Work/Work';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import Request from '../../../Request';

const ListPost = ({Mytoken}) => {
  const [work, setWork] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      console.log(Mytoken,"a");
      try {
        const response = await axios.get(
          `${Request.baseUrl}/api/post/ListPostOfUser?idUser=${Mytoken}&pageindex=1`
        );
        setWork(response.data.data);
        // setPageIndex(response.data.TotalPage[0].TotalPages)
        // setPageIndex1(response.data.TotalPage[0].TotalPages)
        console.log(work);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <Work works={work} />
    </div>
  )
}

export default ListPost
