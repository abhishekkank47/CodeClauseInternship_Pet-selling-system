import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";
import axios from "axios";

const HomepageCard = () => {

  const [products, setProducts] = useState([''])

  const fetchProductDatabse = async()=>{
    
    try {
      const product = await axios.get(`https://pet-selling-ecommerce-platform.onrender.com/api/v1/product/getall-product`)
      
      if(product.data.success){
        setProducts(product.data.Product)
      }
    } catch (error) {
      console.log(`ERROR WHILE FETCHING PRODUCT FROM DATABASE : ${error}`)
    }
  }

  useEffect(()=>{ fetchProductDatabse() },[])


  let settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 pb-9">
        <h1 className="text-3xl font-bold">Some of the Famous Breed</h1>
        <p className="text-xl pt-5">
          We Have the Famous Breed's of CAT's And DOG's , Which get Adopted Most
          On Yearly basis ! Some Of Them Shown Below.
        </p>
      </div>
      <div className="slider-container max-w-screen-2xl container mx-auto md:px-20 px-4 pb-9">
        <Slider {...settings}>
          {products.map((i) => (
            <Cards
              key={i.id}
              breed={i.breed}
              age={i.age}
              price={i.price}
              offer="40% offer"
              details={i.details}
              img={i.img}
            />
          ))}
        </Slider>
      </div>
    </>
  );
};

export default HomepageCard;
