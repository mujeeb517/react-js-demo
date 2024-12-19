import { Link, useNavigate } from "react-router-dom";
import Name from "./Name";
import ShouldRender from "./ShouldRender";

function Header() {
    const navigate = useNavigate();

    function onLogout() {
        localStorage.removeItem('token');
        navigate('/login');
    }

    return <div><header className="flex justify-between p-1">
        <div className="font-bold text-2xl text-gray-700 m-2">EKommerce</div>
        <nav>
            <ul className="flex space-x-3 mt-4 mr-10">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>
                </li>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                </li>
                <ShouldRender cond={localStorage.getItem('token')}>
                    <li>
                        <button onClick={onLogout} className="hover:text-orange-600">Logout</button>
                    </li>
                </ShouldRender>
                <ShouldRender cond={!localStorage.getItem('token')}>
                    <li>
                        <Link className="hover:text-orange-600" to="/login">Login</Link>
                    </li>
                </ShouldRender>
            </ul>
        </nav>
    </header>
        <hr />
    </div>
}

export default Header;