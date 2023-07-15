import axios from 'axios'
import React, { useEffect, useState } from 'react'
import TinyMCEEditor from '../../components/TinyMCEEditor';
import Request from '../../Request';

const Create = ({Mytoken}) => {
  const [frmData, setFrmData] = useState({
    title: '',
    description: '',
    wage: '',
    time_remaining: new Date().toISOString().split('T')[0]
    // Thêm các trường khác tùy ý
  });
  const [category, setCategory] = useState([])
  const [content, setContent] = useState('');
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
    formData.append("idPost", -1);
    formData.append("idUser", Mytoken);
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
          setFrmData({
            title: '',
            description: '',
            wage: '',
            time_remaining: new Date().toISOString().split('T')[0]
          })
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };
  
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="">Tiêu đề</label>
        <input type="text" placeholder='Tiêu đề' name='title' value={frmData.title} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="">Mô tả</label>
        {/* <textarea name="description" id="" cols="30" rows="10" value={frmData.description} onChange={handleChange} /> */}
        <TinyMCEEditor
          initialValue=""
          handleEditorChange={handleEditorChange}
        />
      </div>
      <div>
        <label htmlFor="">Trình độ</label>
        <select name="level" id="">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
        </select>
      </div>
      <div>
        <label htmlFor="">Mức lương</label>
        <input type="text" placeholder='Mức lương' name='wage' value={frmData.wage} onChange={handleChange} />
      </div>
      
      <div>
        <label htmlFor="">Chuyên mục</label>
        <select name="idCategory" id="">
          {
            category.map((x, index) => {
              return <option value={x.id} key={index}>{x.CategoryName}</option>
            })
          }
        </select>
      </div>
      <div>
        <label htmlFor="">Vị trí</label>
        <select name="ViTri" id="">
          <option value="1">Hồ Chí Minh</option>
          <option value="2">Hà Nội</option>
          <option value="3">Đà Nẵng</option>
        </select>
      </div>
      <div>
        <label htmlFor="">Ngày hết hạn</label>
        <input type="date" name='Time_remaining' onChange={handleChange} />
      </div>
      <button type='submit'>Tạo công việc</button>
      </form>
    </div>
  )
}

export default Create
