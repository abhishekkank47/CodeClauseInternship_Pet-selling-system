import slugify from "slugify"
import { categoryModel } from "../Models/categoryModel.js"


//create Category Controller
export const createCategoryController = async(req,res)=>{
    try {
        const{name} = req.body

        //VALIDATION
        if(!name){
            return res.status(401).send(
                {
                    success : false,
                    message : "NAME MUST BE REQUIRED"
                }
            )
        }

        //EXISTINCE CHECK
        const ExistingCategory = await categoryModel.findOne({name})
        if(ExistingCategory){
            return res.status(200).send(
                {
                    success : false,
                    message : "CATEGORY ALREADY EXISTED"
                }
            )
        }

        //CREATING NEW CATEGORY
        const category = await new categoryModel({name, slug: slugify(name)}).save()
        res.status(201).send(
            {
                success : true,
                message : "CATEGORY CREATED SUCCESSFULLY",
                category
            }
        )
        
    } catch (error) {
        console.log(`ERROR IN CREATING CATEGORY: ${error}`)
        res.status(500).send(
            {
                success : false
            }
        )
        
    }
}

//Get one Category Controller
export const getCategoryController = async(req, res)=>{
    try {
        const {slug} = req.params
        const category = await categoryModel.findOne({slug})
        res.status(200).send(
            {
                success : true,
                message : 'CATEGORY GET SUCCESSFULLY',
                category
            }
        )
        
    } catch (error) {
        console.log(`ERROR IN GETTING ONE CATEGORY: ${error}`)
        res.status(500).send(
            {
                success : false
            }
        )
        
    }
}

//Get All Category Controller
export const getAllCategoryController = async(req, res)=>{
    try {
        const category = await categoryModel.find({})
        res.status(200).send(
            {
                success : true,
                message : 'ALL CATEGORY GET SUCCESSFULLY',
                category
            }
        )
        
    } catch (error) {
        console.log(`ERROR IN GETTING ALL CATEGORY: ${error}`)
        res.status(500).send(
            {
                success : false
            }
        )
        
    }
}

//update a Category Controller
export const updateCategoryController = async(req, res)=>{
    try {
        const {name} = req.body
        const {id} = req.params
        const category = await categoryModel.findByIdAndUpdate(id, {name, slug:slugify(name)}, {new:true})
        res.status(200).send(
            {
                success : true,
                message : "CATEGORY NAME UPDATED",
                category
            }
        )
        
    } catch (error) {
        console.log(`ERROR IN UPDATING CATEGORY: ${error}`)
        res.status(500).send(
            {
                success : false
            }
        )
        
    }
}

//delete one Category Controller
export const deleteCategoryController = async(req, res)=>{
    try {
        const {id} = req.params
        const category = await categoryModel.findByIdAndDelete(id)
        res.status(200).send(
            {
                success : true,
                message : "CATEGORY DELETED SUCCESSFULLY",
                category
            }
        )
        
    } catch (error) {
        console.log(`ERROR IN DELETING CATEGORY: ${error}`)
        res.status(500).send(
            {
                success : false
            }
        )
        
    }
}