import React from "react";
import { FaCartPlus, FaMinus, FaPlus } from "react-icons/fa6";
import { IoIosStar, IoIosStarOutline,IoIosStarHalf } from "react-icons/io";
import { MdCurrencyRupee } from "react-icons/md";
import { IoCloseCircleSharp } from "react-icons/io5";

export const OpenProduct = ({ e, close, cart }) => {
  return (
    <div className=" p-2 rounded-sm remScroll flex flex-col gap-2  fixed top-2 left-[50%] md:w-[50%] h-[90vh] w-[80%] md:h-[100vh] overflow-scroll  transform translate-x-[-50%] z-10 border border-orange-600 bg-orange-300">
      <IoCloseCircleSharp
        className=" card fixed top-2 bg-slate-500 rounded-full cursor-pointer right-2 z-10 text-3xl "
        onClick={close}
      />
      <div className=" w-[50%] min-w-[250px] h-[40%] sm:h-[100%] mb-3 rounded mx-auto ">
        <img src={e.image} alt="img" className="w-[100%] h-[100%]" />
      </div>
      <div className="text-lg  text-center">{e.title}</div>
      <div className="flex items-start">
        <MdCurrencyRupee className="text-xs" />
        <strong className="text-lg">{e.price}</strong>
      </div>
      <div className="flex text-yellow-600 text-2xl bg-amber-400 bg-clip-text gap-1">
        {Array(Math.floor(Number(e.rating.rate))).fill(<IoIosStar />)}
        {Number(e.rating.rate) - Math.floor(Number(e.rating.rate)) > 0 && (
          <IoIosStarHalf />
        )}
        {Array(5 - Math.ceil(Number(e.rating.rate))).fill(<IoIosStarOutline />)}
      </div>
      <div className="">
        <strong className="">Description:</strong>
        {e.description}
      </div>
      <div className="text-md">
        <strong>Category: </strong>
        {e.category}
      </div>
      <div>
        <div className="text-md bg-red-600 inline px-2 font-medium text-amber-50 rounded">
          {e.rating.count} left
        </div>
      </div>
      <button
        className="text-md mt-2 bg-amber-400  flex gap-2 items-center text-center mx-auto  rounded-full p-2 cursor-pointer"
        onClick={!e.added ? (a) => cart(a, e) : undefined}
      >
        {!e.added ? (
          <>
            <p>Add to cart</p>
            <FaCartPlus className="text-xs" />
          </>
        ) : (
          <div className="flex items-center gap-8">
            <FaMinus onClick={(a) => cart(a, e, -1)} />
            <p>{e.cartCount}</p>
            <FaPlus onClick={(a) => cart(a, e, 1)} />
          </div>
        )}
      </button>
    </div>
  );
};
