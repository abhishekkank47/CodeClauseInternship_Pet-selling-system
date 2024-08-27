import express from 'express'
import { isAdmin, requiredSignIn } from '../Middlewares/authMiddeleware.js'
import { createCategoryController, deleteCategoryController, getAllCategoryController, getCategoryController, updateCategoryController } from '../controllers/createCategoryController.js'

export const Router = express.Router()

//create Category Route
Router.post('/create-category', requiredSignIn, isAdmin, createCategoryController)

//read Category Route
Router.get('/get-category/:slug', getCategoryController)
Router.get('/getall-category', getAllCategoryController)

//update Category Route
Router.put('/update-category/:id', requiredSignIn, isAdmin, updateCategoryController)

//Delete Category Route
Router.delete('/delete-category/:id', requiredSignIn, isAdmin, deleteCategoryController)

