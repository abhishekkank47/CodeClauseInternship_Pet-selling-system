import mongoose from "mongoose";

const productsSchema = new mongoose.Schema(
  {
    breed: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    slug: {
      type: String,
      lowercase : true
    },
    age: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    category: {
      type: mongoose.ObjectId,
      ref: "category",
      required: true,
    },
    details: {
      type: String,
      required: true,
    },
    shipping: {
      type: Boolean,
    },
    img: {
      url: {
        type: String,
      },
      public_id: {
        type: String,
      }
    }
      
  },
  { timestamps: true }
);

export const ProModel = mongoose.model('products', productsSchema)