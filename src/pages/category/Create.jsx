import React, { useState } from 'react'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Request from '../../Request'

const Category = () => {
    const [category, setCategory] = useState("");
    const [slug, setSlug] = useState("");
    const [descripion, setDescripion] = useState("");
    
      const handleAddCategory = async () => {
        if(category.trim() === '') {
            toast.error('Thêm thất bại', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        }
        else {
            try {
                const res = await axios.post(`${Request.baseUrl}/api/category/create`, null, {
                    params: {
                        categoryId : -1,
                        categoryname : category,
                        slug : slug,
                        descripion: descripion
                    }
                    
                },{
                    headers: {
                      'Content-Type': 'application/json',
                      Authorization: 'Bearer yourAccessToken'
                    }
                  });
                  console.log(res)
                  
                  if(res.data === "true") {
                    toast.success('Thêm thành công', {
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        });
                  }
                  else {
                    toast.error('Thêm thất bại', {
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        });
                  }
                  
            }catch (error){
                console.log('Error:', error);
            }
            setCategory("")
            setDescripion("")
            setSlug("")
        }
      }
  return (
    <div>
      <div>
        <div>
            <label htmlFor="">Tên chuyên mục (*)</label>
            <input type="text" placeholder='Nhập tên chuyên mục' onChange={(e) => setCategory(e.target.value)} value={category}/>
        </div>
        <div>
            <label htmlFor="">Đường dẫn</label>
            <input type="text" placeholder='Nhập đường dẫn' onChange={(e) => setSlug(e.target.value)} value={slug}/>
        </div>
        <div>
            <label htmlFor="">Mô tả</label>
            <input type="text" placeholder='Nhập mô tả' onChange={(e) => setDescripion(e.target.value)} value={descripion}/>
        </div>
        <button onClick={handleAddCategory}>Thêm</button>
        <ToastContainer />
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <td>Tên chuyên mục</td>
              <td>Đường dẫn</td>
              <td>Mô tả</td>
            </tr>
          </thead>
          <tbody>
            <tr>

            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Category
