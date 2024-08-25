import React from "react";
import AdminSidebar from "../../../components/DashComponents/AdminSidebar";

const CreateProduct = () => {
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
                  Create New Product
                </h1>
              </div>
              <div className="p-4">
                <div className="bg-white border-4 rounded-lg shadow relative">
                  <div className="p-6 space-y-6">
                    <form action="#">
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
                          <input
                            type="text"
                            name="category"
                            id="category"
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                            placeholder="Enter Category"
                            required
                          />
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
                            name="Age"
                            id="Age"
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                            placeholder="Enter Current Age"
                            required
                          />
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="SetPhoto"
                            className="text-sm font-medium text-gray-900 block mb-2"
                          >
                            Upload Photo
                          </label>
                          <input
                            type="file"
                            name="SetPhoto"
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
                            name="price"
                            id="price"
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                            placeholder="Set Price"
                            required
                          />
                        </div>
                        <div className="col-span-full">
                          <label
                            htmlFor="product-details"
                            className="text-sm font-medium text-gray-900 block mb-2"
                          >
                            Pet Details
                          </label>
                          <textarea
                            id="product-details"
                            rows={6}
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-4"
                            placeholder="Details"
                            defaultValue={""}
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="p-6 border-t border-gray-200 rounded-b">
                    <button
                      className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                      type="submit"
                    >
                      Create Product
                    </button>
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
