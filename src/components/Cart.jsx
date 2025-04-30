import React from "react";
import { IoCartOutline } from "react-icons/io5";
import { SlHandbag } from "react-icons/sl";

export const Cart = ({ items, cartCount }) => {
  let currCart = items.filter((e) => e.added === true);
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
            <img src="https://img.freepik.com/premium-vector/illustration-girl-posing-with-shopping-cart-girl-jumping_492281-2259.jpg" alt="Empty Cart" className="h-[10rem] w-[10rem] rounded-full  mt-10 m-auto" />
            <button className="mt-2 p-2 shine relative overflow-hidden rounded-2xl bg-orange-100">Continue Shoping</button>
        </div>
      ) : (
        <div>
          <div className="flex justify-start">
            <div >
              <div className="w-[10%]  mb-3 rounded mx-auto ">
                <img src={items[0].image} alt="img" className="w-[100%] h-[100%]" />
              </div>
            </div>
            <div className="w-[90%]">
              <p>{items[0].title}</p>
              <div>{items[0].rating.rate}</div>
              <div>{items[0].rating.count}</div>
              <div> {items[0].cartCount} </div>
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center bg-orange-400 rounded-full p-1 m-2">
              <p className="text-lg font-bold translate-x-1"> Total</p>
              <div className="flex items-center gap-1">
                <span className="text-lg font-bold">{total.toFixed(2)}</span>
                <span className="text-sm font-bold">₹</span>
              </div>
              <div>
                <button className="bg-orange-500 text-white rounded-full p-2 m-2">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
