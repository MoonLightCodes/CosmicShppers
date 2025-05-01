import React, { use, useContext, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { cartContex } from "./CartContex";

const Address = () => {
  const navigate = useNavigate();
  const { address, setAddress, setRerend } = useContext(cartContex);
  const [newAddress, setNewAddress] = useState(false);
  const selectRef = useRef(null);
  return (
    <div className="m-2 selectnone">
      <div className="flex items-center justify-center gap-2 bg-orange-400 p-2 rounded-md">
        <span>Delivery At</span>
        <select
          name="adress"
          ref={selectRef}
          id="address"
          className="p-1 rounded-md border bg-amber-50 focus:outline-orange-400"
          onChange={(e) => {
            setNewAddress(!newAddress);
          }}
        >
          <option value="existing"> Existing Address</option>
          <option value="newAddress"> New Address</option>
        </select>
      </div>
      {newAddress ? (
        <>
          <h1 className="text-2xl  text-center text-orange-50">Add Address </h1>
          <div className="flex flex-col  gap-2 items-center justify-center p-2 bg-orange-300 rounded">
            <form
              className="flex flex-col items-center w-[70%] justify-center  gap-2 bg-orange-400 rounded-md p-2"
              onSubmit={(e) => {
                e.preventDefault();
                setAddress((prev) => [
                  ...prev,
                  {
                    id: prev.length + 1,
                    name: e.target.name.value,
                    address: e.target.address.value,
                    city: e.target.city.value,
                    pincode: e.target.pincode.value,
                    phone: e.target.phone.value,
                    email: e.target.email.value,
                    checked: true,
                  },
                ]);
                e.target.name.value = "";
                e.target.address.value = "";
                e.target.city.value = "";
                e.target.pincode.value = "";
                e.target.phone.value = "";
                e.target.email.value = "";
                selectRef.current.value = "existing";
                setNewAddress(!newAddress);
              }}
            >
              <input
                type="text"
                placeholder="Name"
                name="name"
                required
                className=" rounded-md focus:outline-none  border p-0.5 border-white mb-0.5"
              />
              <input
                type="text"
                placeholder="Address"
                name="address"
                required
                className=" rounded-md focus:outline-none  border p-0.5 border-white mb-0.5"
              />
              <input
                type="text"
                placeholder="City"
                name="city"
                required
                className=" rounded-md focus:outline-none  border p-0.5 border-white mb-0.5"
              />
              <input
                type="number"
                maxLength={6}
                minLength={6}
                placeholder="Pincode"
                name="pincode"
                required
                className=" rounded-md focus:outline-none  border p-0.5 border-white mb-0.5"
              />
              <input
                type="number"
                minLength={10}
                maxLength={10}
                placeholder="Phone Number"
                name="phone"
                required
                className=" rounded-md focus:outline-none  border p-0.5 border-white mb-0.5"
              />
              <input
                type="email"
                placeholder="Email"
                name="email"
                required
                className=" rounded-md focus:outline-none  border p-0.5 border-white mb-0.5"
              />
              <button
                type="submit"
                className="bg-orange-500 text-white cursor-pointer p-0.5 rounded-md  border mb-0.5"
              >
                Add Address
              </button>
            </form>
          </div>
        </>
      ) : (
        <>
          <h1 className="text-2xl  text-center text-orange-50">
            Existing Address{" "}
          </h1>
          <div className="flex flex-wrap p-1 m-1 rounded gap-2 items-center justify-center remScroll bg-orange-300 overflow-scroll h-[70vh]">
            {address.map((e) => {
              return (
                <div
                  key={e.id}
                  className="flex  gap-2 items-center justify-start bg-orange-100 p-1 rounded-md w-[90%] cursor-pointer"
                  onClick={() => {
                    e.checked = true;
                    address.forEach((el) => {
                      if (el.id !== e.id) {
                        el.checked = false;
                      }
                    });
                    // setAddress([...address]);
                    setRerend((prev) => !prev);
                  }}
                >
                  <input type="radio" name="delivery" checked={e.checked} />
                  <div className="text-[0.8rem]  text-orange-900">
                    <p className="overflow-hidden text-ellipsis whitespace-nowrap">
                      {e.name} <br />
                      {e.address} <br />
                      {e.city} <br />
                      {e.pincode} <br />
                      {e.phone}
                      <br />
                      {e.email} <br />
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex items-center justify-center gap-2  p-2 rounded-md">
            <button
            onClick={()=>{navigate('/cart')}}
            className="bg-orange-500 text-white cursor-pointer p-0.5 rounded-md  border mb-0.5"
            >Go Back</button>
            <button
              className="bg-orange-500 text-white cursor-pointer p-0.5 rounded-md  border mb-0.5"
              onClick={() => {
                navigate("/placeorder",{
                    state:{
                        deliverAddress:address.filter((e)=>e.checked)
                    }
                });
              }}
            >
              Proceed to Pay
            </button>
          </div>
        </>
      )}
      <footer className="text-sm text-orange-50 text-center">
        By clicking on Add Address you agree to our{"  "}
        <span
          className="text-orange-500 cursor-pointer"
          onClick={() => navigate("/termsandconditions")}
        >
          Terms and Conditions
        </span>
      </footer>
    </div>
  );
};

export default Address;
