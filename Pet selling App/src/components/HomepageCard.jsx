import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import HomepageCardList from "../../public/images/HomeListData/HomeCardList.json";
import Cards from "./Cards";

const HomepageCard = () => {
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
        </Slider>
      </div>
    </>
  );
};

export default HomepageCard;
