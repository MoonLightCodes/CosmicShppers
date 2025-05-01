import React from "react";
import { useContext } from "react";
import { cartContex } from "./CartContex";
import { useNavigate } from "react-router-dom";

const PlaceOrder = ({ deliverAddress }) => {
    const navigate = useNavigate();
  const { runn } = useContext(cartContex);
  let tobePay = runn
    .filter((e) => e.added === true)
    .reduce((acc, curr) => {
      return acc + curr.price * curr.cartCount;
    }, 0);
  let discount = (tobePay * 10) / 100;
  tobePay = tobePay - discount;
  let tax = (tobePay * 18) / 100;
  let total = tobePay + tax;
return (
    <div className="h-screen flex flex-col items-center justify-center gap-2">
        <div className="w-[80%]  bg-amber-200 p-0.5 rounded ">
            <h1 className="font-bold">ORDER DETAILS</h1>
            <div className="flex justify-between text-sm text-slate-600">
                <p>Cart Value</p>
                <p>{tobePay.toFixed(2)}</p>
            </div>
            <div className="flex justify-between text-sm text-slate-600">
                <p>Discount %</p>
                <p>-{discount.toFixed(2)}</p>
            </div>
            <div className="flex justify-between text-sm text-slate-600">
                <p>GST </p>
                <p>{tax.toFixed(2)}</p>
            </div>
            <hr className="bg-amber-50" />
            <div className="flex justify-between text-sm text-slate-600">
                <p>Grand Total</p>
                <p>{total.toFixed(2)}</p>
            </div>
        </div>
        <br />
        <div className="flex justify-between w-screen p-5">
            <div className="p-1 bg-amber-400 cursor-pointer text-white tracking-wider rounded " onClick={()=>navigate('/address')}>
                <button className="cursor-pointer">Go Back</button>
            </div>
            <div className="p-1 bg-amber-400 cursor-pointer text-white tracking-wider rounded ">
                <button className="cursor-pointer">Place Order</button>
            </div>
        </div>
        <div>
            <p className="text-sm text-slate-600 bg-amber-50 m-2 p-1 rounded">
                Refund Policy: If you are not satisfied with your purchase, you can request a refund within 30 days of receiving your order. The product must be returned in its original condition. Please contact our support team for assistance.
                <p className="underline underline-offset-4  text-slate-800 cursor-pointer">
                    Read Policy 
                </p>
            </p>
            
        </div>
    </div>
);
};

export default PlaceOrder;
