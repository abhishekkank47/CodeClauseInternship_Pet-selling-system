import slugify from "slugify";
import { ProModel } from "../Models/proModel.js";
import {v2 as cloudinary} from 'cloudinary'
import "../utils/imgCloudinary.js"
import fs from "fs"

//create Product Controller
export const createProductController = async(req,res)=>{
    try {
        const{breed,age,price,quantity,category,details,shipping} = req.body
        console.log(req.body)

        //VALIDATION
        if(!breed || !age || !price || !quantity || !category || !details || !shipping){
            return res.status(400).send(
                {
                    success : false,
                    message : "ALL FEILDS MUST BE REQUIRED"
                }
            )
        }

        //EXISTINCE CHECK
        const ExistingProduct = await ProModel.findOne({breed})
        if(ExistingProduct){
            return res.status(200).send(
                {
                    success : false,
                    message : "PRODUCT ALREADY EXISTED"
                }
            )
        }

    // IMG UPLOAD TO CLOUDINARY
    let imgData = {};

    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path, {
        folder: "products",
      });

      imgData = {
        url: result.secure_url,
        public_id: result.public_id,
      };

      // Remove the file after uploading to cloudinary
      fs.unlinkSync(req.file.path);
    }

    //CREATE NEW PRODUCT
    const product = await new ProModel({breed,slug: slugify(breed),age,price,quantity,category,details,shipping,img: imgData, }).save();

    res.status(201).send({
      success: true,
      message: "Product created successfully",
      product,
    });
  } catch (error) {
    console.log(`ERROR IN CREATING PRODUCT: ${error}`);
    res.status(500).send({
      success: false,
      error: error.message,
    });
  }
}

//Get one Product Controller
export const getProductController = async(req, res)=>{
    try {
        const {slug} = req.params
        const Product = await ProModel.findOne({slug})
        res.status(200).send(
            {
                success : true,
                message : 'PRODUCT GET SUCCESSFULLY',
                Product
            }
        )
        
    } catch (error) {
        console.log(`ERROR IN GETTING ONE PRODUCT: ${error}`)
        res.status(500).send(
            {
                success : false
            }
        )
        
    }
}

//Get All Product Controller
export const getAllProductController = async(req, res)=>{
    try {
        const Product = await ProModel.find({})
        res.status(200).send(
            {
                success : true,
                message : 'ALL PRODUCTS GET SUCCESSFULLY',
                Product
            }
        )
        
    } catch (error) {
        console.log(`ERROR IN GETTING ALL PRODUCTS: ${error}`)
        res.status(500).send(
            {
                success : false
            }
        )
        
    }
}

//update a Product Controller
export const updateProductController = async(req, res)=>{
    try {
        const {breed,age,price,quantity,category,details,shipping} = req.body
        const {id} = req.params
        console.log('Request Body:', req.body);
        // Find the existing product
        const existingProduct = await ProModel.findById(id);

        if (!existingProduct) {
            return res.status(404).send({
                success: false,
                message: "PRODUCT NOT FOUND"
            });
        }

        // Handle image update
        let imgData = existingProduct.img;

        if (req.file) {
            // Upload new image to Cloudinary
            const result = await cloudinary.uploader.upload(req.file.path, {
                folder: "products",
            });

            // Remove the old image from Cloudinary
            if (existingProduct.img.public_id) {
                await cloudinary.uploader.destroy(existingProduct.img.public_id);
            }

            imgData = {
                url: result.secure_url,
                public_id: result.public_id,
            };

            // Remove the file after uploading to Cloudinary
            fs.unlinkSync(req.file.path);
        }

        //UPDATION
        const Product = await ProModel.findByIdAndUpdate(id, {breed,slug:slugify(breed),age,price,quantity,category,details,shipping,img: imgData}, {new:true})

        res.status(200).send(
            {
                success : true,
                message : "PRODUCT UPDATED SUCCESFULLY",
                Product
            }
        )
        
    } catch (error) {
        console.log(`ERROR IN UPDATING PRODUCT: ${error}`)
        res.status(500).send(
            {
                success : false
            }
        )
        
    }
}

//delete one Product Controller
export const deleteProductController = async(req, res)=>{
    try {
        const {id} = req.params
        const Product = await ProModel.findByIdAndDelete(id)

        // Remove the image from Cloudinary
        if (Product.img.public_id) {
            await cloudinary.uploader.destroy(Product.img.public_id);
        }

        res.status(200).send(
            {
                success : true,
                message : "PRODUCT DELETED SUCCESSFULLY",
                Product
            }
        )
        
    } catch (error) {
        console.log(`ERROR IN DELETING PRODUCT: ${error}`)
        res.status(500).send(
            {
                success : false
            }
        )
        
    }
}