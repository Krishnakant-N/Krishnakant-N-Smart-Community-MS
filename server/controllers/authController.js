import User from "../models/User.js";
import bcrypt from "bcrypt"
import jwt from 'jsonwebtoken'

const signup = async (req, res) => {
    
    try {
        const {username, email, password, role} = req.body;
        const user = await User.findOne({email});
        if(user){
            return req.status(409).json({message: 'User is already exist, you can login', success: false})
        }
        const userModel = new User({username, email, password, role});
        userModel.password = await bcrypt.hash(password, 10);
        await userModel.save();
        res.status(201).json({
            message: "Signup successfully",
            success: true
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: "Internal server error",
            success: false
        })
    }

}

const login = async (req, res) => {
    
    try {
        const {email, password} = req.body;
        const user = await User.findOne({email});
        if(!user){
            return req.status(403).json({message: 'Auth Failed. Email or password is incorrect.', success: false})
        }
        const isPassEqual = await bcrypt.compare(password, user.password);
        if(!isPassEqual){
            return req.status(403).json({message: 'Auth Failed. Email or password is incorrect.', success: false})
        }
        const jwtToken = jwt.sign(
            {id: user._id, email: user.email, role: user.role},
            process.env.JWT_SECRET,
            {expiresIn:'1h'}
        )

        res.status(200).json({
            message: "Login successfully",
            username: user.username,
            token: jwtToken,
            success: true
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: "Internal server error",
            success: false
        })
    }

}


export { signup, login }