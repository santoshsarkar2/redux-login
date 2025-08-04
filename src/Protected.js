import {useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux'; // Import useSelector to access Redux state


const Protected = ({children}) => {
    //const isAuthenticated= localStorage.getItem('isAuthenticated'); // Check if user is authenticated
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated); 
    const navigate = useNavigate(); // Assuming you are using react-router-dom for navigation

    console.log("Protected Component Rendered", isAuthenticated);
    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/login'); // Redirect to login page if not authenticated
        }   
    }, [isAuthenticated, navigate]);
  return (
    children // Render children components if authenticated
   
  )
}

export default Protected
