import jwt from 'jsonwebtoken'

const ensureAuthentication = (req, res, next) => {
    const auth = req.headers.authorization;
    if(!auth){
        return res.status(403).json({message: 'Unauthorized, Token is required'})
    }

    try {
        const decoded = jwt.verify(auth, process.env.JWT_SECRET);
        req.user = decoded;
        next();
        
    } catch (error) {
        return res.status(403).json({message: 'Unauthorized, Token is incorrect or expired.'})
    }
}

export default ensureAuthentication;