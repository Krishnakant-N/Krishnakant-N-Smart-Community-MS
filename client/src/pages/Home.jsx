import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

function Home() {

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
        }, 1000);
    }

    return (
        <div className="flex m-6">
            <h1 className="text-4xl font-bold ">{loggedInUser}</h1>
            <button onClick={handleLogout} className="border-2 mx-4 py-1 px-2 rounded-lg bg-red-500 text-white">Logout</button>
        </div>
    )
}

export default Home
