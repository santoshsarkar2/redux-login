import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fakeLogin } from '../API/authApi';
import { login } from '../Redux/authSlice'; // Assuming you have a login action in your authSlice


const Login = () => {
    const [email, setemail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const user = await fakeLogin(email, password);
      dispatch(login(user));
      navigate('/profile');
    } catch (err) {
      setError(err);
    }
  };


    return (
        <div>
            <h2>Login</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleLogin}>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setemail(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Login</button>
            </form>
            <p className="mt-3">Don't have an account? </p>
            <Link to="/register" className="btn btn-success">Register</Link>

        </div>
    )
}

export default Login
