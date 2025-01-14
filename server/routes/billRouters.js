import express from 'express';
import ensureAuthentication from '../middlewares/Auth.js';

const router = express.Router(); 

router.get('/', ensureAuthentication, (req, res) => {
    res.status(200).json([
        {
            name: 'electricity bill',
            fees: 3000
        },
        {
            name: 'water bill',
            fees: 200
        }
    ])
})

export default router;
