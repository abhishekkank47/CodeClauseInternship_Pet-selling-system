import mongoose from "mongoose";

const petsSchema = new mongoose.Schema({

    breed : {
        type : String,
        required : true,
        unique : true,
        trim : true,
        minLength : [3,"FULL NAME CONTAIN AT LEAST 3 CHARECTERS"]
    },
    age : {
        type : Number,
        required : true,
        trim : true
    },
    price : {
        type : Number,
        required : true,
        trim : true
    },
    category : {
        type : String,
        required : true,
        unique : true,
        trim : true
    },
    img : {
        type : String,
        required : true,
        trim : true
    },
},{timestamps:true})

export const petsModel = new mongoose.model("pet", petsSchema )