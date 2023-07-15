import jwt_decode from 'jwt-decode';
import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UseToken = createContext()
const CheckToken = ({children}) => {
    const token = localStorage.getItem("token_user");
    const navigate = useNavigate();
    const [decodedToken, setDecodedToken] = useState({});
    const validRoutes = ["work", "category","listpost","detailpost"];
    useEffect(() => {
      try {
        setDecodedToken(jwt_decode(token));
    
        // Perform operations that depend on newDecodedToken
        
      } catch (error) {
        console.log('Token không hợp lệ.', validRoutes);
        // navigate('/login');
        let slug = window.location.pathname;
        if(slug.includes("/")) {
          slug = slug.split("/")[1]
          // alert(slug)
        }
        validRoutes.map((x,index) => {
          // console.log(x,index);
          if (slug === `${x}`) {
            navigate('/login');
          }
          // if (slug.includes(x)) { 
          //   navigate('/login');
          // } else {
          //   console.log("false");
          // }
        })
        
      }
      
    }, [token, navigate]);
      return (
        <div>
          <UseToken.Provider value={decodedToken}>
            {children}
          </UseToken.Provider>
        </div>
      )
}

export {CheckToken, UseToken} 

