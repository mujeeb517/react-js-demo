import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ShouldRender from "./ShouldRender";

function Login() {
    const [user, setUser] = useState({
        username: '',
        password: ''
    });
    const [err, setErr] = useState(false);

    const navigate = useNavigate();

    const onValChange = (evt) => {
        const updatedUser = { ...user, [evt.target.name]: evt.target.value };
        setUser(updatedUser);
    };

    const onLogin = async () => {
        try {
            const res = await axios.post('https://fakestoreapi.com/auth/login', user)
            localStorage.setItem('token', res.data.token);
            navigate('/products');
        } catch (err) {
            setErr(true);
        }
    };


    return (<div className="m-8 text-gray-700 shadow p-4 w-1/2 bg-gray-50">
        <h1 className="text-xl font-semibold text-center">Login</h1>
        <ShouldRender cond={err}>
            <div className="bg-red-400 text-white rounded p-3">
                Wrong username or password
            </div>
        </ShouldRender>
        <div className="m-4 space-y-3">
            <label className="block">Username</label>
            <input onChange={onValChange} name="username" type="text" className="p-2 border w-1/2 rounded" />
        </div>
        <div className="m-4 space-y-3">
            <label className="block">Password</label>
            <input onChange={onValChange} name="password" type="password" className="p-2 border w-1/2 rounded" />
        </div>
        <div className="m-4 space-y-3">
            <button onClick={onLogin} className="bg-orange-500 py-2 px-8 rounded text-white">Login</button>
        </div>
    </div>);
}

export default Login;