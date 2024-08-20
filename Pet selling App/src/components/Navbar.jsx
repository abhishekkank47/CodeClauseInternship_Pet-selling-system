import React from "react";
import {Link} from 'react-router-dom'
import { useAuth } from "../context api/authContext";
import { FaRegUser } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";


const Navbar = () => {
  const [ auth, setAuth] = useAuth()

  //handle Logout
  const handleLogout = ()=>{
    setAuth(
      {
        user : null,
        token : "",
        refreshToken : ''
      }
    )
  }
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 fixed top-0 left-0 right-0 z-50">
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-15 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/pets">Pets</Link>
                </li>
                <li>
                  <Link to="/about-us">About Us</Link>
                </li>
                <li>
                  <Link to="/contact-us">Contact Us</Link>
                </li>
                { auth.user ? (
                  <>
                  <li>
                    <Link to="/user-account"><FaRegUser />{auth.user.email}</Link>
                  </li>
                  </>
                ) : ("")}
              </ul>
            </div>
            <Link className="btn btn-ghost text-xl">Pet Selling App</Link>
          </div>
          <div className="navbar-end">
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/pets">Pets</Link>
                </li>
                <li>
                  <Link to="/about-us">About Us</Link>
                </li>
                <li>
                  <Link to="/contact-us">Contact Us</Link>
                </li>
                { auth.user ? (
                  <>
                                    <li>
                  <Link to="/adopt"> <FaCartShopping /> Adopt Wish-list</Link>
                  </li>
                  <li>
                  <Link to="/user-account"><FaRegUser />{auth.user.email}</Link>
                  </li>
                  </>
                ) : ("")}
              </ul>
            </div>

            {
              !auth.user ? (
                <>
                            <Link to='/login' className="btn bg-pink-500 mx-2 hover:bg-blue-500 cursor-pointer text-white hover:text-black">
                              Log In
                            </Link>
                </>
              ) : (
                <>

                <Link onClick={handleLogout} to='/' className="btn bg-red-600 mx-2 text-xs hover:bg-green-500 cursor-pointer text-white hover:text-black">
                              Log Out <MdLogout />
                </Link>
                </>
              )
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
