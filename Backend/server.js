import express from "express";
import dotenv from "dotenv";
import {DBconnection} from "./database/Database.js";
import cors from "cors";
import { authRoutes } from "./Routes/authRoutes.js";
import { Router } from "./Routes/categoryRoutes.js";
import { proRouter } from "./Routes/productRoutes.js";
import {v2 as cloudinary} from 'cloudinary'

dotenv.config();
DBconnection();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const app = express();
const PORT = process.env.PORT;

//MIDDLEWARES
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(
  cors({
    origin : ['http://localhost:5173', 'https://your-frontend-domain.vercel.app'],
    methods : ['GET','POST','PUT','DELETE'],
    credentials : true
  }))

//ROUTES
//auth routes
app.use('/api/v1/auth', authRoutes );
//category routes
app.use('/api/v1/category', Router );
//product routes
app.use('/api/v1/product', proRouter );


app.listen(PORT, () => {
  console.log(`SERVER RUNNING ON PORT ${PORT}`);
});
