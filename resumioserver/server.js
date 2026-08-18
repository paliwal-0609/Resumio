import express from "express";
import cors from "cors";
import connectDB from "./configs/db.js";
import "dotenv/config";
import userRouter from "./routes/userRoutes.routes.js";
import resumeRouter from "./routes/resumeRoutes.routes.js";
import aiRouter from "./routes/aiRoutes.routes.js";

const app = express();
const PORT = process.env.PORT || 3000;

//Database conection
await connectDB();

app.use(express.json());
app.use(cors());

app.get('/', (req, res)=> res.send("Server is live"));
app.use('/api/users', userRouter);
app.use('/api/resumes', resumeRouter);

app.use('/api/ai', aiRouter);

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
    
})