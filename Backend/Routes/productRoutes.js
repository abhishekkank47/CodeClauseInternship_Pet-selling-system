import express from "express"

import { isAdmin, requiredSignIn } from "../Middlewares/authMiddeleware.js"
import { createProductController, deleteProductController, getAllProductController, getProductController, updateProductController } from "../controllers/productsCrontrollers.js"
import { upload } from "../Middlewares/multer.js"

export const proRouter = express.Router()

//create product Route
proRouter.post('/create-product', requiredSignIn, isAdmin,upload.single("img"), createProductController )

//read product Route
proRouter.get('/get-product/:slug', getProductController)
proRouter.get('/getall-product', getAllProductController )

//update product Route
proRouter.put('/update-product/:id', requiredSignIn, isAdmin,upload.single('img'), updateProductController)

//Delete product Route
proRouter.delete('/delete-product/:id', requiredSignIn, isAdmin, deleteProductController)