import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context api/authContext";
import { FaRegUser } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import { BiSolidUserDetail } from "react-icons/bi";
import { FaPaw } from "react-icons/fa";
import { useCart } from "../context api/CartContext";

const Navbar = () => {
  const [auth, setAuth] = useAuth();
  const [cart, setCart] = useCart([]);

  //handle Logout
  const handleLogout = () => {
    setAuth({
      user: null,
      email: "",
      phone: "",
      address: "",
      token: "",
      refreshToken: "",
    });
    localStorage.removeItem("auth");
  };
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
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-64 p-2 shadow"
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
                {auth.user ? (
                  <>
                    <li>
                      <details>
                        <summary>
                          <FaRegUser />
                          <Link to="dashboard/user-account">
                            {auth.user.email}{" "}
                            {cart?.length === 0 ? (
                              ""
                            ) : (
                              <div className="badge badge-secondary badge-sm text-white font-semibold mx-2">
                                {cart.length}
                              </div>
                            )}
                          </Link>
                        </summary>
                        <ul className="bg-base-100 rounded-t-none p-2">
                          <li>
                            <Link
                              to={`dashboard/${
                                auth?.user?.role === 1
                                  ? "admin-dashboard"
                                  : "user-dashboard"
                              }`}
                            >
                              {" "}
                              <BiSolidUserDetail /> Dashboard
                            </Link>
                          </li>
                          <li>
                            <Link to="dashboard/adopt">
                              {" "}
                              <FaCartShopping /> Adopt {" "}
                              <div className="badge badge-secondary badge-sm text-white font-semibold mx-2">
                                {cart.length}
                              </div>
                            </Link>
                          </li>
                        </ul>
                      </details>
                    </li>
                  </>
                ) : (
                  ""
                )}
              </ul>
            </div>
            <Link className="btn btn-ghost text-lg md:text-2xl">
              <FaPaw /> PetPal Market{" "}
            </Link>
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
                {auth.user ? (
                  <>
                    <li>
                      <details>
                        <summary>
                          <FaRegUser />
                          <Link to="dashboard/user-account">
                            {auth.user.email}{" "}
                            {cart?.length === 0 ? (
                              ""
                            ) : (
                              <div className="badge badge-secondary badge-sm text-white font-semibold mx-2">
                                {cart.length}
                              </div>
                            )}
                          </Link>
                        </summary>
                        <ul className="bg-base-100 rounded-t-none p-2">
                          <li>
                            <Link
                              to={`dashboard/${
                                auth?.user?.role === 1
                                  ? "admin-dashboard"
                                  : "user-dashboard"
                              }`}
                            >
                              {" "}
                              <BiSolidUserDetail /> Dashboard
                            </Link>
                          </li>
                          <li>
                            <Link to="dashboard/adopt">
                              {" "}
                              <FaCartShopping /> Adopt {" "}
                              <div className="badge badge-secondary badge-sm text-white font-semibold mx-2">
                                {cart.length}
                              </div>
                            </Link>
                          </li>
                        </ul>
                      </details>
                    </li>
                  </>
                ) : (
                  ""
                )}
              </ul>
            </div>

            {!auth.user ? (
              <>
                <Link
                  to="/login"
                  className="btn bg-pink-500 p-2 md:p-4 hover:bg-blue-500 cursor-pointer text-white hover:text-black"
                >
                  Log In
                </Link>
              </>
            ) : (
              <>
                <Link
                  onClick={handleLogout}
                  to="/login"
                  className="btn bg-red-600 mx-2 text-xs hover:bg-green-500 cursor-pointer text-white hover:text-black"
                >
                  Log Out <MdLogout />
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
