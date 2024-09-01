import React, { useEffect, useState } from "react";
import Cards from "../components/Cards";
import axios from "axios";

const Pets = () => {
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

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 pb-9 flex flex-wrap">
        <center>
        <div className="mt-20">
          <h1 className="text-4xl font-semibold dark:text-lime-100">
            WE ARE <span className="text-pink-500">DELIGHTED</span> TO HAVE YOU HERE 
          </h1>
          <p className="text-xl pt-5 pb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            itaque alias ratione deserunt. Velit blanditiis numquam nemo veniam,
            quo dignissimos, alias nam hic libero excepturi consectetur et
            quibusdam accusantium exercitationem.
          </p>
        </div>
        </center>
        {products.map((i) => (
          <Cards
            key={i.id}
            breed={i.breed}
            age={i.age}
            details={i.details}
            price={i.price}
            offer='40% off'
            img={i.img}
            product={i}
          />
        ))}
      </div>

    </>
  );
};

export default Pets;
