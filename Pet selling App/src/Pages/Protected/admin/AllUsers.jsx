import React from 'react'
import AdminSidebar from '../../../components/DashComponents/AdminSidebar'

const AllUsers = () => {
  return (
    <>
    <div>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 pt-24">
        <div className="flex h-screen bg-gray-100">
          {/* sidebar */}
         <AdminSidebar/>
          {/* Main content */}
          <div className="flex flex-col flex-1 overflow-y-auto">
            <div className="flex items-center justify-between h-16 bg-white border-b border-gray-200">
              <h1 className="text-2xl uppercase font-semibold px-5">
                All users
              </h1>
            </div>
            <div className="p-4">
            <div>
                  <div className="overflow-x-auto bg-slate-200 p-3 rounded-md">
                    <table className="table text-black">
                      {/* head */}
                      <thead className="text-black">
                        <tr>
                          <th></th>
                          <th>User's Name</th>
                          <th>Edit</th>
                          <th>Remove</th>
                        </tr>
                      </thead>
                      <tbody>
                        {/* row */}
                        <tr className="">
                          <th></th>
                          <td>Hart Hagerty</td>
                          <td>
                            <button className="btn btn-info">Edit</button>
                          </td>
                          <td>
                            <button className="btn btn-circle btn-outline bg-red-600">
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
                        {/* row */}
                        <tr className="">
                          <th></th>
                          <td>Hart Hagerty</td>
                          <td>
                            <button className="btn btn-info">Edit</button>
                          </td>
                          <td>
                            <button className="btn btn-circle btn-outline bg-red-600">
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
                        {/* row */}
                        <tr className="">
                          <th></th>
                          <td>Hart Hagerty</td>
                          <td>
                            <button className="btn btn-info">Edit</button>
                          </td>
                          <td>
                            <button className="btn btn-circle btn-outline bg-red-600">
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
                        {/* row */}
                        <tr className="">
                          <th></th>
                          <td>Hart Hagerty</td>
                          <td>
                            <button className="btn btn-info">Edit</button>
                          </td>
                          <td>
                            <button className="btn btn-circle btn-outline bg-red-600">
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
  )
}

export default AllUsers