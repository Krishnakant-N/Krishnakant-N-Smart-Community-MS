import { useEffect, useState } from "react"
import { useNavigate, NavLink } from "react-router-dom"
import { handleSuccess } from "../utils/toastify"
import logo from "../assets/Logo.jpg";

function NavBar() {

    const [loggedInUser, setLoggedInUser] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const user = localStorage.getItem('loggedInUser');
        if(user){
            setLoggedInUser(user);
        }
    }, [])

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('loggedInUser');
        setTimeout(() => {
            navigate('/login');
            handleSuccess('Logged out successfully');
        }, 1000);
        
    }

    return (
        <nav className="bg-blue-600 text-white p-3 flex justify-between items-center">
            {/* <!-- App Title --> */}
            <div className="flex text-md font-bold space-x-2 items-center">
                <img src={logo} alt="logo" className="max-w-12 rounded-full"/>
                <p>Smart Community Management System</p>
            </div>

            {/* Navigation Links */}
            <div className="flex space-x-8">
            <NavLink
            to="/home"
            className={({ isActive }) =>
                isActive
                ? "font-bold border-b-2 border-yellow-400"
                : "text-white font-semibold  hover:text-yellow-300"
            }
            >
            Home
            </NavLink>
            <NavLink
            to="/bills"
            className={({ isActive }) =>
                isActive
                ? " font-bold border-b-2 border-yellow-300"
                : "text-white font-semibold hover:text-yellow-300"
            }
            >
            Bills
            </NavLink>
            
        </div>

            {/* <!-- User Info and Logout --> */}
            <div className="flex items-center space-x-4">
                {/* <!-- Username --> */}
                <span className="text-sm font-bold">{loggedInUser}</span>
                
                {/* <!-- Logout Button --> */}
                <button onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 text-white text-sm font-medium py-2 px-4 rounded transition">
                Logout
                </button>
            </div>
        </nav>
    )
}

export default NavBar

