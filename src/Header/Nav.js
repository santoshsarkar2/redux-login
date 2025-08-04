import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../Redux/authSlice';
import { useNavigate } from 'react-router-dom';


const Nav = () => {
    const { user } = useSelector((state) => state.auth); // Assuming you have a user in your auth state
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated); // Assuming you have an isAuthenticated in your auth state

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout());
        navigate('/login');
    };

  return (
   <>
  
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container">
    <a className="navbar-brand" href="/">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">about</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">contact</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Product
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" href="/product">View product</Link></li>
            <li><Link className="dropdown-item" href="/product/add">Add product</Link></li>            
            <li><hr className="dropdown-divider" /></li>
            <li><Link className="dropdown-item" href="/">Something else here</Link></li>
          </ul>
        </li>
        
      </ul>
      <form className="d-flex">
        {/* <Link className="nav-link" to="/profile">Profile</Link>         */}
        {user && <span className="navbar-text"><Link className="nav-link" to="/profile">{user.name}</Link></span>}
        {/* Conditional rendering based on authentication status */}
        {isAuthenticated ? (
          <button className="btn btn-danger btn-sm ms-2" onClick={handleLogout}>Logout</button>
        ) : (
          <Link className="btn btn-success btn-sm" to="/login">Login</Link>
        )}
        

      </form>
    </div>
  </div>
</nav>
   
   </>
  )
}

export default Nav
