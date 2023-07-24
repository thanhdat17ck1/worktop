import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import style from './detailWork.module.scss'
import BoxInfoDetail from './BoxInfoDetail'
import Request from '../../Request'

const DetailWork = ({Mytoken}) => {
    const {id} = useParams()
    const [data, setData] = useState([])
    const [vitri, setVitri] = useState([])
    // useEffect(() => {
    //     const fetchData = async() => {
    //         let detailPost = await axios.get(`https://localhost:44393/api/post/getdetail?post=${id}`)
    //         setData(detailPost)
    //         console.log(data);
    //     }
    //     fetchData()
       
    // },[id])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${Request.baseUrl}/api/post/getdetail?post=${id}`)
                setData(response.data.data);
                setVitri(response.data.ViTri);
              } catch (error) {
                console.error(error);
              }
        };
    
        fetchData();
      }, [id]);
    
  return (
    <div className={style["l-container"]}>
        <BoxInfoDetail data={data} vitri={vitri} Mytoken={Mytoken}/>
      
    </div>
  )
}

export default DetailWork
