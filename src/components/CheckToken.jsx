import jwt_decode from 'jwt-decode';
import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UseToken = createContext()
const CheckToken = ({children}) => {
    const token = localStorage.getItem("token_user");
    const navigate = useNavigate();
    const [decodedToken, setDecodedToken] = useState({});
    const validRoutes = ["work", "category"];
    useEffect(() => {
      try {
        setDecodedToken(jwt_decode(token));
    
        // Perform operations that depend on newDecodedToken
        
      } catch (error) {
        console.log('Token không hợp lệ.', validRoutes);
        // navigate('/login');

        validRoutes.map((x,index) => {
          console.log(x,index);
          if (window.location.pathname === `/${x}`) {
            navigate('/login');
          }
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

