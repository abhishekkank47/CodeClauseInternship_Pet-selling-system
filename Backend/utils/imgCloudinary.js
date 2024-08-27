import {v2 as cloudinary} from "cloudinary"
import fs from 'fs'

  const productImgUpl = async (localFilePath) =>{
    
    try {
        
        //VALIDATION
        if(!localFilePath){
            return 'COULD NOT FOUND FILE'
        }

        //UPLOAD FILE ON CLOUDINARY
        const response = await cloudinary.uploader.upload(localFilePath, {resource_type:'image'})

        //FILLE UPLAODED?
        console.log(`file is uploaded on cloudinary: ${response.url}`)

    } catch (error) {

        //IF ERROR OCCURED REMOVE FILE
        fs.unlinkSync(localFilePath)
        return 'FILE REMOVED DUE TO ERROR'
    }
  }