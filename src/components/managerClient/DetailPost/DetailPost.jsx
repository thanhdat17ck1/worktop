import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom'
import Request from '../../../Request';
import TinyMCEEditor from '../../TinyMCEEditor';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DetailPost = () => {
    const {id} = useParams();
    const [post, setPost] = useState([])
    const [category, setCategory] = useState([])
    const [content, setContent] = useState('');
    const [frmData, setFrmData] = useState({
        title: '',
        description: '',
        wage: '',
        time_remaining: '',
        category: '',
        vitri: '',
        level: '',
        Id_category: ''
      });
      
      useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(
              `${Request.baseUrl}/api/post/DetailPostOfUser?idUser=2&idPost=${id}`
            );
            setPost(response.data.data)
            console.log(post);
            const postData = response.data.data;
            
            if (postData.length > 0) {
              const post = postData[0];
              const { title, postDescription, wage, Time_remaining, Level, Id_category } = post;
              
              setFrmData(prevData => ({
                ...prevData,
                title,
                description: postDescription,
                wage,
                time_remaining: Time_remaining,
                Level,
                Id_category
              }));
              setContent(postDescription)
              console.log(postDescription,"frmData");
            }
          } catch (error) {
            console.error(error);
          }
        };
      
        fetchData();
      }, [id]);
      
      

    //   const [frmData, setFrmData] = useState(post.map(p => (
    //     {
    //     title: p.title,
    //     description: '',
    //     wage: '',
    //     time_remaining: new Date().toISOString().split('T')[0]
    //     // Thêm các trường khác tùy ý
    //     }
    //   )) );
     
      const handleEditorChange = (newContent) => {
        setContent(newContent);
      };
      useEffect(() => {
        const getCategory = async () => {
          let categoryFromServer = await fetchCategory();
          setCategory(categoryFromServer)
        } 
        getCategory();
      },[])
      const fetchCategory = async() => {
        
        const res = await axios.get(`${Request.baseUrl}/api/category/get`)
        return res.data;
      }
      const handleChange = (event) => {
        setFrmData({
          ...frmData,
          [event.target.name]: event.target.value
        });
      };
      const handleSubmit = (e) => {
        e.preventDefault();
        let formData = new FormData(e.target);
        formData.append("idPost", id);
        formData.append("idUser", 2);
        formData.append('description', content);
        // Chuyển đổi FormData thành đối tượng JSON
        let jsonData = Object.fromEntries(formData);
      
        console.log(jsonData);
        let data = {
          "title": jsonData.title,
          "description": jsonData.description,
          "level": jsonData.level,
          "wage": jsonData.wage,
          "idCategory": jsonData.idCategory,
          "idPost":jsonData.idPost,
          "idUser":jsonData.idUser,
          "Time_remaining": jsonData.Time_remaining,
          "ViTri": jsonData.ViTri
        }
      
        axios
          .post(`${Request.baseUrl}/api/post/create`, data)
          .then((res) => {
            console.log(res);
            if(res.data === "403") {
              
            }
            else {
              // setFrmData({
              //   title: '',
              //   description: '',
              //   wage: '',
              //   time_remaining: new Date().toISOString().split('T')[0]
              // })
              toast("Cập nhật thành công");
            }
          })
          .catch((err) => {
            console.error(err);
          });
      };

    const level = [
      {
        id: 1,
        name: "thực tập"
      },
      {
        id: 2,
        name: "1 năm kinh nghiệm"
      },
      {
        id: 3,
        name: "trên 1 năm kinh nghiệm"
      },
      {
        id: 4,
        name: "2 năm kinh nghiệm"
      },
      {
        id: 5,
        name: "trên 2 năm kinh nghiệm"
      },
      {
        id: 6,
        name: "3 đến 5 năm kinh nghiệm"
      },
      {
        id: 7,
        name: "trên 5 năm kinh nghiệm"
      },
    ]

    const vitri = [
      {
        id: 1,
        name: "Hồ Chí Minh"
      },
      {
        id: 2,
        name: "Hà Nội"
      },
      {
        id: 3,
        name: "Đà Nẵng"
      }
    ]
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        {
            post.map(p => (
                <>
                    <div>
                        <label htmlFor="">Tiêu đề</label>
                        <input type="text" placeholder='Tiêu đề' name='title' value={frmData.title} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="">Mô tả</label>
                        {/* <textarea name="description" id="" cols="30" rows="10" value={frmData.description} /> */}
                        <TinyMCEEditor
                        initialValue={frmData.description}
                        handleEditorChange={handleEditorChange}
                        value={frmData.description}
                        />
                    </div>
                    <div>
                        <label htmlFor="">Trình độ</label>
                        <select name="level" id="">
                          {
                            level.map((x, index) => (
                              <option value={x.id} key={index} selected={frmData.Level === x.id ? true: false}>{x.name}</option>
                            ))
                          }
                        </select>
                    </div>
                    <div>
                        <label htmlFor="">Mức lương</label>
                        <input type="text" placeholder='Mức lương' name='wage' value={frmData.wage} onChange={handleChange} />
                    </div>
                    
                    <div>
                        <label htmlFor="">Chuyên mục {frmData.Id_category}</label>
                        <select name="idCategory" id="">
                        {
                            category.map((x, index) => {
                            return <option value={x.id} key={index} selected={(index + 1) === frmData.Id_category ? true : false}>{x.CategoryName}</option>
                            })
                        }
                        </select>
                    </div>
                    <div>
                        <label htmlFor="">Vị trí</label>
                        <select name="ViTri" id="">
                          {
                          vitri.map(x => (
                            <option value={x.id} selected={x.id === frmData.ViTri}>{x.name}</option>
                          ))
                          }
                        </select>
                    </div>
                    <div>
                        <label htmlFor="">Ngày hết hạn</label>
                        <input type="date" name='Time_remaining' value={frmData.time_remaining.split("T")[0]} onChange={handleChange} />
                    </div>
                    <button type='submit'>Cập nhật công việc</button>
                </>
            ))
        }
        
      </form>
      <ToastContainer />
    </div>
  )
}

export default DetailPost
