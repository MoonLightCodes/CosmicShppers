import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { MdCurrencyRupee } from "react-icons/md";
import { SlHandbag } from "react-icons/sl";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useContext } from "react";
import { cartContex } from "./CartContex";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
  const { cartCount, addCart, runn, popup, setpopup } = useContext(cartContex);
  const navigate = useNavigate();
  let currCart = runn.filter((e) => e.added === true);
  let total = currCart.reduce((acc, e) => acc + e.price * e.cartCount, 0);
  return (
    <div className="justify-self-center w-[300px] rounded-2xl min-h-[400px] mb-2 p-2 flex-col bg-orange-300 shadow-lg z-20">
      <h2 className="justify-center items-center gap-2 text-xl font-bold text-white bg-orange-400 flex p-2 rounded-b-full ">
        Cart
        <IoCartOutline />
      </h2>
      {cartCount === 0 ? (
        <div className="flex flex-col  items-center justify-center">
          <div className="p-4 bg-orange-200 rounded-full flex  items-center gap-3 m-2 mt-6">
            <div className="p-2 rounded-full  bg-slate-500 ">
              <SlHandbag className=" m-auto" />
            </div>
            <p className="font-extrabold tracking-wide">Your cart is empty!</p>
          </div>
          <img
            src="https://img.freepik.com/premium-vector/illustration-girl-posing-with-shopping-cart-girl-jumping_492281-2259.jpg"
            alt="Empty Cart"
            className="h-[10rem] w-[10rem]   rounded-full  mt-10 m-auto"
          />
          <button
            className="mt-2 p-2 shine relative cursor-pointer overflow-hidden rounded-2xl bg-orange-100"
            onClick={() => navigate("/")}
          >
            Continue Shoping
          </button>
        </div>
      ) : (
        <div className="">
          {currCart.map((e, i) => {
            return (
              <div key={i} className="w-[100%]">
                <div className=" flex items-start gap-3 p-2">
                  <div
                    className="md:w-[10%]  w-[30%] min-w-[5em] "
                    onClick={(a) => {
                      !popup ? a.stopPropagation() : undefined;
                      setpopup(e);
                    }}
                  >
                    <img src={e.image} alt="img" className="rounded" />
                  </div>
                  <div className="md:text-[0.5rem] flex flex-col gap-1">
                    <p className="">{e.title}</p>
                    <span className="flex items-center">
                      <MdCurrencyRupee className="" />
                      <strong>{e.price}</strong>
                    </span>
                    <div className="flex text-yellow-600  gap-1">
                      {Array(Math.floor(Number(e.rating.rate))).fill(
                        <IoIosStar />
                      )}
                      {Number(e.rating.rate) -
                        Math.floor(Number(e.rating.rate)) >
                        0 && <IoIosStarHalf />}
                      {Array(5 - Math.ceil(Number(e.rating.rate))).fill(
                        <IoIosStarOutline />
                      )}
                    </div>
                    <div className="">
                      <strong>Category: </strong>
                      {e.category}
                    </div>
                    <div>
                      <div className=" bg-red-600 inline px-2 font-medium text-amber-50 rounded">
                        {e.rating.count} left
                      </div>
                    </div>
                    <button className="flex p-1 rounded-2xl bg-amber-500 cursor-pointer mr-auto items-center gap-8">
                      <FaMinus onClick={(a) => addCart(a, e, -1)}  />
                      <p>{e.cartCount}</p>
                      <FaPlus onClick={(a) => addCart(a, e, 1)} />
                    </button>
                  </div>
                </div>
                <button
                  className="ml-auto bg-amber-50 mb-1 p-2 rounded cursor-pointer flex items-center gap-1 text-xs"
                  onClick={(a) => addCart(a, e, -e.cartCount)}
                >
                  Remove <RiDeleteBin6Line />
                </button>
                <hr className="text-white" />
              </div>
            );
          })}
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center bg-orange-400 rounded-full p-1 m-2">
              <p className="text-lg  translate-x-1"> cart value</p>
              <div className="flex items-center gap-1">
                <span className="text-sm font-bold">₹</span>
                <span className="text-lg font-bold">{total.toFixed(2)}</span>
              </div>
              <div>
                <button className="bg-orange-500 text-sm cursor-pointer text-white rounded-full md:p-0.5 p-2 m-2"
                onClick={() => navigate("/address")}
                >
                  Checkout
                </button>
              </div>
            </div>
            <hr />
            <button
              className="mt-2 m-auto  p-2 shine relative cursor-pointer overflow-hidden rounded-2xl bg-orange-100"
              onClick={() => navigate("/")}
            >
              Continue Shoping
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
