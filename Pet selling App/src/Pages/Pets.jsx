import React from "react";
import HomepageCardList from "../../public/images/HomeListData/HomeCardList.json";
import Cards from "../components/Cards";

const Pets = () => {
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
        {HomepageCardList.map((i) => (
          <Cards
            key={i.id}
            breed={i.breed}
            age={i.age}
            price={i.price}
            category={i.category}
            img={i.img}
          />
        ))}
      </div>

    </>
  );
};

export default Pets;
