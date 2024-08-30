import React, { useEffect, useState } from "react";
import AdminSidebar from "../../../components/DashComponents/AdminSidebar";
import axios from "axios";
import { useAuth } from "../../../context api/authContext";
import { useNavigate } from "react-router-dom";

const CreateProduct = () => {
  const [breed, setBreed] = useState("");
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [age, setAge] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [details, setDetails] = useState("");
  const [shipping, setShipping] = useState(false);
  const [photo, setPhoto] = useState("");
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate()

  //HANDLE CREATION OF NEW PRODUCT
  const handleCreateProduct = async (e) => {
    e.preventDefault();
  
    try {

      const formData = new FormData();
      formData.append("breed", breed);
      formData.append("age", age);
      formData.append("price", price);
      formData.append("quantity", quantity);
      formData.append("category", selectedCategory);
      formData.append("details", details);
      formData.append("shipping", shipping === "1");
  
      // Append the photo file to the FormData object
      if (photo) {
        formData.append("img", photo);
      }
  
      // Send the form data to the backend
      const product = await axios.post(
        "http://localhost:8000/api/v1/product/create-product",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: auth?.token,
          },
        }
      );
  
      if (product.data.success) {
        navigate('/pets')
      }
    } catch (error) {
      console.log(`ERROR WHILE CREATING PRODUCT: ${error}`);
    }
  };
  

    //GET ALL CATEGORY AS OPTION
    const getAllCategory = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:8000/api/v1/category/getall-category"
        );
  
        if (data?.success) {
          setCategories(data?.category);
        }
      } catch (error) {
        console.log(`ERROR WHILE GETTING ALL CATEGORY : ${error}`);
        toast.error("SOMETHING WENT WRONG GETTING ALL CATEGORY");
      }
    };
    useEffect(() => {
      getAllCategory();
    }, []);

  return (
    <>
      <div>
        <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 pt-24">
          <div className="flex h-screen bg-gray-100">
            {/* sidebar */}
            <AdminSidebar />
            {/* Main content */}
            <div className="flex flex-col flex-1 overflow-y-auto">
              <div className="flex items-center justify-between h-16 bg-white border-b border-gray-200">
                <h1 className="text-2xl uppercase font-semibold px-5 p-10">
                  Create New Product
                </h1>
              </div>
              <div className="p-4">
                <div className="bg-white border-4 rounded-lg shadow relative">
                  <div className="p-6 space-y-6">
                    <form>
                      <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="product-name"
                            className="text-sm font-medium text-gray-900 block mb-2"
                          >
                            Breed Name
                          </label>
                          <input
                            type="text"
                            value={breed}
                            onChange={(e) => setBreed(e.target.value)}
                            name="Breed-name"
                            id="Breed-name"
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                            placeholder="Enter Breed of Pet"
                            required
                          />
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="category"
                            className="text-sm font-medium text-gray-900 block mb-2"
                          >
                            Category
                          </label>
                          <select
                            onChange={(e)=>setSelectedCategory(e.target.value)}
                            name="category"
                            id="category"
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                            placeholder="Enter Category"
                            required
                          >
                            <option value="">Select Category</option>
                            {
                              categories.map((c)=>(
                                <option key={c._id} value={c._id}>{c.name}</option>
                              ))
                            }
                          </select>
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="Age"
                            className="text-sm font-medium text-gray-900 block mb-2"
                          >
                            Age
                          </label>
                          <input
                            type="number"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                            name="Age"
                            id="Age"
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                            placeholder="Enter Current Age"
                            required
                          />
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="quantity"
                            className="text-sm font-medium text-gray-900 block mb-2"
                          >
                            Quantity
                          </label>
                          <input
                            type="number"
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                            name="quantity"
                            id="quantity"
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                            placeholder="Enter Quantity"
                            required
                          />
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="SetPhoto"
                            className="text-sm font-medium text-gray-900 block mb-2"
                          >
                            Upload Product Image
                          </label>
                          <input
                            type="file"
                            accept="image/*"
                            onChange={(e)=>setPhoto(e.target.files[0])}
                            name="photo"
                            id="SetPhoto"
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                            placeholder="Upload Latest Product Photo"
                            required
                          />
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="price"
                            className="text-sm font-medium text-gray-900 block mb-2"
                          >
                            Price
                          </label>
                          <input
                            type="number"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            name="price"
                            id="price"
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                            placeholder="Set Price"
                            required
                          />
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="shipping"
                            className="text-sm font-medium text-gray-900 block mb-2"
                          >
                            Shipping
                          </label>
                          <select
                            onChange={(e)=>setShipping(e.target.value)}
                            name="shipping"
                            id="shipping"
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                            required
                          >
                              <option value="0">NO</option>
                              <option value="1">YES</option>
                          </select>
                        </div>
                        <div className="col-span-full">
                          <label
                            htmlFor="product-details"
                            className="text-sm font-medium text-gray-900 block mb-2"
                          >
                            Pet Details
                          </label>

                          <textarea
                            value={details}
                            onChange={(e) => setDetails(e.target.value)}
                            id="product-details"
                            rows={6}
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-4"
                            placeholder="Details"
                            defaultValue={""}
                          />
                        </div>
                      </div>{" "}
                      <div className="p-6 border-t border-gray-200 rounded-b">
                        <button
                          className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                          type="submit"
                          onClick={handleCreateProduct}
                        >
                          Create Product
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateProduct;
