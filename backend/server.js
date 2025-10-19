import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import connectDb from './Configuration/db.js'
import contactRoutes from './routes/ContactRoutes.js';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 5000 ;
const __dirname = path.resolve();
const corsOptions = {
   orgin: "https://codiorixweb.onrender.com/",
   Credentials: true,
}
app.use(cors(corsOptions));
app.use(express.json());

app.use('/api/contacts', contactRoutes);

app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (_, res) => {
   res.sendFile(path.resolve(__dirname, "frontend","dist","index.html"));
});

connectDb().then(() => {
   app.listen(PORT, () => console.log(`Server running on ${PORT}`));
})