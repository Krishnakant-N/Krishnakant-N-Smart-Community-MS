import express from 'express';
import {signupValidation, loginValidation} from '../middlewares/AuthValidations.js'
import {signup, login} from '../controllers/authController.js'

const router = express.Router(); 

router.post('/signup', signupValidation, signup);

router.post('/login', loginValidation, login);

export default router;
