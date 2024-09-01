import React, { useEffect, useState } from "react";
import AdminSidebar from "../../../components/DashComponents/AdminSidebar";
import axios from "axios";
import toast from "react-hot-toast";
import { useAuth } from "../../../context api/authContext";

const CreateCategory = () => {
  const [auth, setAuth] = useAuth();
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [edit,setEdit] = useState('')
  const [editId, setEditId] = useState(null);

  //CREATE CATEGORY
  const cretateCategory = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "https://pet-selling-ecommerce-platform.onrender.com/api/v1/category/create-category",
        { name },
        { headers: { Authorization: auth?.token } }
      );

      if (data.success) {
        setCategories([...categories, data.category]);
        setName("");
      }
    } catch (error) {
      console.log(`Error while creating category: ${error}`);
    }
  };

  //GET ALL CATEGORY
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get(
        "https://pet-selling-ecommerce-platform.onrender.com/api/v1/category/getall-category"
      );

      if (data.success) {
        setCategories(data.category);
      }
    } catch (error) {
      console.log(`ERROR WHILE GETTING ALL CATEGORY : ${error}`);
    }
  };

  //EDIT BUTTON FOR CATEGORY
  const editCategoryName = async(e)=>{
    e.preventDefault()
    try {
      const { data } = await axios.put(
        `https://pet-selling-ecommerce-platform.onrender.com/api/v1/category/update-category/${editId._id}`,{ name: edit },{headers : { "Authorization" : auth?.token}}
      );

      if (data.success) {
        setEditId(null)
        setEdit('')
        getAllCategory()
      }

    } catch (error) {
      console.log(`ERROR WHILE UPDATING CATEGORY : ${error}`);
      toast.error("SOMETHING WENT WRONG WHILE UPDATING CATEGORY");
    }
  }

  //DELETE BUTTON FOR CATEGORY
  const deleteCategory = async(id)=>{
    try {
      const {data} = await axios.delete(`https://pet-selling-ecommerce-platform.onrender.com/api/v1/category/delete-category/${id}`,{headers : { "Authorization" : auth?.token}})

      if (data.success) {
        getAllCategory()
      }

    } catch (error) {
      console.log(`ERROR WHILE DELETING CATEGORY : ${error}`);
      toast.error("SOMETHING WENT WRONG WHILE DELETING CATEGORY");
    }
  }
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
                <h1 className="text-2xl uppercase font-semibold px-5">
                  Create New Category
                </h1>
              </div>
              <div className="p-4">
                <center>
                  <div className="m-7">
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter a New Product Category"
                      className="input input-ghost w-full max-w-xs"
                    />
                    <button
                      onClick={cretateCategory}
                      className="btn btn-wide btn-success m-3"
                    >
                      Create As New Category
                    </button>
                  </div>
                </center>

                <div>
                  <div className="overflow-x-auto bg-slate-200 p-3 rounded-md">
                    <table className="table text-black">
                      {/* head */}
                      <thead className="text-black">
                        <tr>
                          <th></th>
                          <th>Category Name</th>
                          <th>Edit Category</th>
                          <th>Remove Category</th>
                        </tr>
                      </thead>
                      <tbody>
                        {/* row */}
                        {categories.map((c, index) => (
                          <tr key={index}>
                            <th></th>
                            <td>{c.name}</td>
                            <td>
                              <button
                                className="btn btn-info"
                                onClick={() =>
                                
                                  {setEdit(c.name)
                                    setEditId(c)
                                    document
                                    .getElementById("my_modal_5")
                                    .showModal()}
                                }
                              >
                                Edit
                              </button>
                              <dialog
                                id="my_modal_5"
                                className="modal modal-bottom sm:modal-middle"
                              >
                                <div className="modal-box md:pb-24 md:p-20 bg-white">
                                <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle text-white absolute right-4 top-3">✕</button>
    </form>
                                  <div className="modal-action">
                                  <input
                                    type="text"
                                    value={edit}
                                    onChange={(e)=>setEdit(e.target.value)}
                                    placeholder="Edit Category Name"
                                    className="input input-bordered input-success w-full max-w-xs dark:text-white"
                                  />
                                    <form method="dialog" >
                                      <button onClick={
                                        editCategoryName
                                      }
                                      className="btn btn-success">
                                        Update
                                      </button>
                                      
                                    </form>
                                   
                                  </div> 
                                </div>
                              </dialog>
                            </td>
                            <td>
                              <button onClick={()=>deleteCategory(c._id)} className="btn btn-circle btn-outline bg-red-600">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-6 w-6"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                  />
                                </svg>
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
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

export default CreateCategory;
