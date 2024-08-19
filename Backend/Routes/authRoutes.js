import experss from "express";
import { registerController, loginController } from "../controllers/authControllers.js";

export const authRoutes = experss.Router();

//REGISTER ROUTE
authRoutes.post('/register', registerController )

//LOGIN ROUTE
authRoutes.post('/login', loginController )