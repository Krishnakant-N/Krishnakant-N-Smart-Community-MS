import joi from 'joi';

const signupValidation = (req, res, next) => {
    const schema = joi.object({
        username: joi.string().min(4).max(100).required(),
        email: joi.string().email().required(),
        password: joi.string().min(4).max(20).required(),
        role: joi.string().valid('admin', 'resident', 'it').required()
    });
    const {error} = schema.validate(req.body);
    if(error){
        return res.status(400).json({message: "bad request", error})
    }
    next();
}

const loginValidation = (req, res, next) => {
    const schema = joi.object({
        email: joi.string().email().required(),
        password: joi.string().min(4).max(20).required(),
    });
    const {error} = schema.validate(req.body);
    if(error){
        return res.status(400).json({message: "bad request", error})
    }
    next();
}

export { signupValidation, loginValidation }