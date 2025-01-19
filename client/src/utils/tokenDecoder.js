import {jwtDecode} from 'jwt-decode';

const getUserIdFromToken = () => {
    const token = localStorage.getItem('token');
    if (token) {
        const decodedToken = jwtDecode(token);
        return decodedToken.id;
    }
    return null;
};

export default getUserIdFromToken;