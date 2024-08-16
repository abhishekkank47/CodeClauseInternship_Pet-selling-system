import React from "react";

const Cards = ({breed,age,price,category,img}) => {
  return (
    <>
      <div className="card bg-base-100 w-96 shadow-xl mb-5">
        <figure>
          <img
            src={img}
            alt={breed}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {breed}
            <div className="badge badge-secondary">{category}</div>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">{`Age between : ${age} year`}</div>
            <div className="badge badge-outline">{`${price}/- INR`}</div>
            <div className="badge badge-outline hover:bg-pink-500 hover:text-black p-3 font-bold cursor-pointer">Adopt</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
