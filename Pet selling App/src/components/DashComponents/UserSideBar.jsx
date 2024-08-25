import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../context api/authContext";


const UserSideBar = () => {

    const [auth, setAuth] = useAuth();

    // Loading state
    if (!auth.user) {
      return <div>Loading...</div>;
    }


  return (
    <>
      
        {/* sidebar */}
        <div className="hidden md:flex flex-col w-64 bg-gray-800">
          <div className="flex items-center justify-center h-16 bg-green-800">
            <span className="text-white font-bold uppercase">{auth?.user?.fullName}</span>
          </div>
          <div className="flex flex-col flex-1 overflow-y-auto">
            <nav className="flex-1 px-2 py-4 bg-green-600">
              <NavLink
                to="/dashboard/orders"
                className="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700"
              >
                Your Orders
              </NavLink>
            </nav>
          </div>
        </div>
      
    </>
  );
};

export default UserSideBar;
