import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import connectDb from './Configuration/db.js'
import contactRoutes from './routes/ContactRoutes.js';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();

if (process.env.NODE_ENV !== 'production') {
   app.use(cors({
      origin: "http://localhost:5173"
   }));
}

app.use(express.json());

app.use('/api/contacts', contactRoutes);
if (process.env.NODE_ENV === 'production') {
   app.use(express.static(path.join(__dirname, "../frontend/dist")));
   app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "../frontend","dist", "index.html"));
   });
}


connectDb().then(() => {
   app.listen(PORT, () => console.log(`Server running on ${PORT}`));
});