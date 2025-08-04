import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../Redux/authSlice'; // Assuming you have a logout action in your authSlice

const Profile = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };


  return (
    <div>
       <h2>Welcome, {user?.name}</h2>
      <p>Email: {user?.email}</p> 
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};


export default Profile
