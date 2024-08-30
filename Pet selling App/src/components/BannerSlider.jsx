import React from "react";
import Slider from "react-slick";

const BannerSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000, 
    autoplaySpeed: 0,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
        <div className="slider-container">
          <Slider {...settings}>
            <div className="p-3">
              <img
                src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg"
                style={{ height: "300px", width: "500px" }}
              />
            </div>
            <div className="p-3">
              <img
                src="https://images.pexels.com/photos/5463180/pexels-photo-5463180.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="banner"
                style={{ height: "300px", width: "500px" }}
              />
            </div>
            <div className="p-3">
              <img
                src="https://images.pexels.com/photos/1359307/pexels-photo-1359307.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="banner"
                style={{ height: "300px", width: "500px" }}
              />
            </div>
            <div className="p-3">
              <img
                src="https://images.pexels.com/photos/126407/pexels-photo-126407.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="banner"
                style={{ height: "300px", width: "500px" }}
              />
            </div>
            <div className="p-3">
              <img
                src="https://images.pexels.com/photos/45170/kittens-cat-cat-puppy-rush-45170.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="banner"
                style={{ height: "300px", width: "500px" }}
              />
            </div>
            <div className="p-3">
              <img
                src="https://images.pexels.com/photos/20816519/pexels-photo-20816519/free-photo-of-dog-lying-down-and-cat-sitting.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="banner"
                style={{ height: "300px", width: "500px" }}
              />
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default BannerSlider;
