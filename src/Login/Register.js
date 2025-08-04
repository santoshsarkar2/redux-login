import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fakeSignup } from '../API/authApi'; // Assuming you have a fake API for signup
import { register } from '../Redux/authSlice';


const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();


    const registerHandle = async (e) => {
        e.preventDefault();
        // Handle registration logic here
        console.log("Registered:", { name, email, password });
        const user = await fakeSignup(name, email, password);
        dispatch(register(user));
        navigate('/profile');
    }

    return (
        <div>
            <h1>Register Page</h1>
            <form>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button onClick={registerHandle} type="submit" className="btn btn-primary">Register</button>
            </form>

        </div>
    )
}

export default Register
