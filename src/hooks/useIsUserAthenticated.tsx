import { useState, useEffect} from 'react'

const useIsUserAuthenticated = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
      const handleStorageChange = () => {
        const token = localStorage.getItem('token');
        setIsAuthenticated(!!token);
      };
  
    
  
      const handlerId = setInterval(handleStorageChange, 500)
  
      return () => {
        clearInterval(handlerId)
      };
    }, []);
  
    return { isAuthenticated };
  
}

export default useIsUserAuthenticated