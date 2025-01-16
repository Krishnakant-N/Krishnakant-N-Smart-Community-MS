import { useEffect, useState } from "react"
import NavBar from "../components/NavBar";

function Home() {

    const [loggedInUser, setLoggedInUser] = useState('');

    useEffect(() => {
        const user = localStorage.getItem('loggedInUser');
        if(user){
            setLoggedInUser(user);
        }
    }, [])


    return (
        <>
            
            <NavBar />
            <div className="flex m-6">
                <h1 className="text-4xl font-bold ">Welcome {loggedInUser} !</h1>
            </div>
        </>
    )
}

export default Home
