import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context api/authContext";
import { useCart } from "../context api/CartContext";

const Cards = ({ breed, age, price, details, offer, img, product }) => {
  const [auth, setAuth] = useAuth();
  const [cart, setCart] = useCart([]);

  return (
    <>
      <div className="card bg-base-100 w-96 shadow-xl mb-5 md:m-8 hover:scale-105">
        <figure>
          <img src={img?.url} alt={breed} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {breed}
            <div className="badge badge-secondary">{offer}</div>
          </h2>
          <p>{details}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">{`Age between : ${age} year`}</div>
            <div className="badge badge-outline">{`${price}/- INR`}</div>
            <div className="badge badge-outline hover:bg-pink-500 hover:text-black p-3 font-bold cursor-pointer">
              <Link
                to={!auth.user ? "/login" : ""}
                onClick={() => {
                  setCart([...cart, product]);
                  localStorage.setItem(
                    "cart",
                    JSON.stringify([...cart, product])
                  );
                }}
              >
                Adopt
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
