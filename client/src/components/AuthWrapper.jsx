import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {jwtDecode} from "jwt-decode";

const AuthWrapper = ({ children }) => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (!token) {
        navigate("/login");
        return;
        }

        try {
        const decodedToken = jwtDecode(token);
        const currentTime = Math.floor(Date.now() / 1000);

        if (decodedToken.exp < currentTime) {
            localStorage.removeItem("token");
            localStorage.removeItem("loggedInUser");
            navigate("/login");
        }
        } catch (error) {
        console.error("Error decoding token:", error);
        localStorage.removeItem("token");
        localStorage.removeItem("loggedInUser");
        navigate("/login");
        }
    }, [navigate]);

    return <>{children}</>;
};

export default AuthWrapper;
