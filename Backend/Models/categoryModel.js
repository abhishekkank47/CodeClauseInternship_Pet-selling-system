import mongoose from 'mongoose'

const categorySchema = new mongoose.Schema(
    {
        name : {
            type: String,
            required : true,
            unique : true
        },
        slug : {
            type: String,
            lowercase : true
        }
    },{timestamps:true}
)

export const categoryModel = mongoose.model('category', categorySchema)