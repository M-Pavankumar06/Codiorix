import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import connectDb from './Configuration/db.js'
import contactRoutes from './routes/ContactRoutes.js';

const app = express();
const PORT = process.env.PORT || " http://localhost:5000/" ;

app.use(cors());
app.use(express.json());

app.use('/api/contacts', contactRoutes);

connectDb().then(() => {
   app.listen(PORT, () => console.log(`Server running on ${PORT}`));
})