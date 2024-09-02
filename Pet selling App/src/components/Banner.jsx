import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row pb-9">
        <div className="w-full md:w-1/2 md:mt-32 mt-10 md:order-2 order-1">
          <div className="space-y-12">
            <h1 className="text-4xl font-bold dark:text-lime-100">
              HELLO PET LOVER'S ! ADOPT A NEW
              <span className="text-pink-500"> FAMILY MEMBER</span> TODAY.
            </h1>
            <p className="text-xl">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi
              similique laboriosam consequatur perspiciatis. Consectetur facilis
              adipisci molestias voluptates ut! Commodi iusto ratione quo? Ipsam
              et molestiae fugit corrupti, hic vero. adipisci molestias
              voluptates ut! Commodi iusto ratione quo? Ipsam et molestiae fugit
              corrupti, hic vero. adipisci molestias voluptates ut! Commodi
              iusto ratione quo? Ipsam et molestiae fugit corrupti, hic vero.
            </p>
          </div>
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center">
              <div className="rounded-md shadow">
                <Link
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-pink-500 px-8 py-3 text-base font-medium text-white hover:bg-blue-500 hover:text-black md:py-4 md:px-10 md:text-lg"
                  to="/register"
                >
                  Get started for free 
                </Link>
              </div>
            </div>
        </div>
        <div className="w-full md:w-1/2">
          <div className="md:mt-32 m-5 ">
            <img
              className="rounded-2xl"
              src="../images/homepagePetsimg.jpg"
              alt="Pet's image"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
