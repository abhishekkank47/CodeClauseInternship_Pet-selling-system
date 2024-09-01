import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"

const Register = () => {
  const [fullName, setFullName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [pin, setPin] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const navigate = useNavigate('')

  //handle Submit Form
  const handleSubmitForm = async(e) =>{
    e.preventDefault()

        // Check if passwords match
        if (password !== confirmPassword) {
          throw("PASSWORD DO NOT MATCH ENTER CORRECT PASSWORD")
          return;
          
        }

    //TO SUBMIT DATA FRONTEND TO BACKEND DATABASE
    try {
      const sendData = await axios.post(`https://pet-selling-ecommerce-platform.onrender.com/api/v1/auth/register`,{ fullName, phone, email, address, pin, password, confirmPassword })
      if(sendData.data.success){
        navigate("/login")}
    } catch (error) {
      console.log(`ERROR IN REGISTRATION : ${error}`)
    }

    console.log(fullName,email,phone,password,confirmPassword,address,pin)
  }

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 pt-20">
        <section>
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
              <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
                <h2 className="text-3xl font-bold leading-tight dark:text-lime-100 sm:text-4xl">
                  Register
                </h2>
                <p className="mt-2 text-sm dark:text-gray-400">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    title
                    className="font-semibold dark:text-gray-100 transition-all duration-200 hover:underline"
                  >
                    Log in with Registered email
                  </Link>
                </p>
                <form onSubmit={handleSubmitForm} name='register' action="#" method="POST" className="mt-8">
                  <div className="space-y-5">
                    <div>   
                      <label
                        htmlFor
                        className="text-base font-medium dark:text-white"
                      >
                        Full Name
                      </label>
                      <div className="mt-2">
                        <input
                          className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                          type="text"
                          placeholder="Full name"
                          value={fullName}
                          onChange={(e)=>setFullName(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div>   
                      <label
                        htmlFor
                        className="text-base font-medium dark:text-white"
                      >
                        Phone Number
                      </label>
                      <div className="mt-2">
                        <input
                          className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                          type="text"
                          placeholder="Phone"
                          value={phone}
                          onChange={(e)=>setPhone(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div>   
                      <label
                        htmlFor
                        className="text-base font-medium dark:text-white"
                      >
                        Email address
                      </label>
                      <div className="mt-2">
                        <input
                          className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                          type="email"
                          placeholder="Email"
                          value={email}
                          onChange={(e)=>setEmail(e.target.value)}
                        />
                      </div>
                    </div>
                    <div>   
                      <label
                        htmlFor
                        className="text-base font-medium dark:text-white"
                      >
                        Current Address
                      </label>
                      <div className="mt-2">
                        <input
                          className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                          type="text"
                          placeholder="Address"
                          value={address}
                          onChange={(e)=>setAddress(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div>   
                      <label
                        htmlFor
                        className="text-base font-medium dark:text-white"
                      >
                        Area Pin Code
                      </label>
                      <div className="mt-2">
                        <input
                          className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                          type="text"
                          placeholder="Pin Code"
                          value={pin}
                          onChange={(e)=>setPin(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between">
                        <label
                          htmlFor
                          className="text-base font-medium dark:text-white"
                        >
                          Create Password
                        </label>
                      </div>
                      <div className="mt-2">
                        <input
                          className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                          type="password"
                          placeholder="Password"
                          value={password}
                          onChange={(e)=>setPassword(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div>   
                      <label
                        htmlFor
                        className="text-base font-medium dark:text-white"
                      >
                        Confirm Password
                      </label>
                      <div className="mt-2">
                        <input
                          className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                          type="password"
                          placeholder="Password"
                          value={confirmPassword}
                          onChange={(e)=>setConfirmPassword(e.target.value)}
                        />
                      </div>
                    </div>
                    <div>
                      <button
                        type='submit'
                        className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                      >
                        REGISTER
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="h-full w-full">
              <img
                className="mx-auto h-full w-full rounded-md object-cover md:p-10"
                src="/images/HomeListData/listImage/Maine Coon.jpg"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Register