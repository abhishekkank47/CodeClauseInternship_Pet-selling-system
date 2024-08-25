import React from 'react'
import UserSideBar from '../../../components/DashComponents/UserSideBar'

const Orders = () => {
  return (
    <>
        <div>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 pt-24">
        <div className="flex h-screen bg-gray-100">
          {/* sidebar */}
          <UserSideBar/>
          {/* Main content */}
          <div className="flex flex-col flex-1 overflow-y-auto">
            <div className="flex items-center justify-between h-16 bg-white border-b border-gray-200">
              <h1 className="text-2xl uppercase font-semibold px-5">
              Your Orders
              </h1>
            </div>
            <div className="p-4">
              <h1 className="text-2xl font-bold">Welcome to my dashboard!</h1>
              <p className="mt-2 text-gray-600">
                This is an example dashboard using Tailwind CSS.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Orders