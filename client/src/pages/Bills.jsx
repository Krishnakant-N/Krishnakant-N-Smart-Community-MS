import { useEffect, useState } from "react";
import NavBar from "../components/NavBar"
import axios from 'axios';
import getUserIdFromToken from "../components/TokenDecoder";

function Bills() {

    const [loggedInUser, setLoggedInUser] = useState('');
    // const [bills, setBills] = useState([]);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);   

    useEffect(() => {
        const user = localStorage.getItem('loggedInUser');
        if(user){
            setLoggedInUser(user);
        }
        const fetchBills = async () => {
            const userId = getUserIdFromToken();
            try {
                const headers = {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                }
                const response = await axios.get(`http://localhost:3000/bills/${userId}`, headers);
                console.log(response.data);
            } catch (error) {
                console.error("Error fetching bills: ", error);
            }
        };
        fetchBills();
    }, [])

    return (
        <>
            <NavBar />
            <div className='flex m-6 text-4xl font-bold'>
                Bills for {loggedInUser}
            </div>
        </>
    )
}

export default Bills
Bills