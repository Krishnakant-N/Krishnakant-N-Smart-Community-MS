import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import db from './config/db.js';
import authRoutes from './routes/authRoutes.js'
import billRoutes from './routes/billRouters.js'

dotenv.config()
db()

const app = express();
const port = process.env.PORT

app.use(cors());
app.use(express.json())

app.use('/auth', authRoutes)
app.use('/bills', billRoutes)


app.listen(port, () => {
    console.log(`Server started on Port: ${port}`)
})