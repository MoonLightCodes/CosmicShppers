import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import { Cart } from "./components/Cart";
import Address from "./components/Address";
import CartContex from "./components/CartContex";
import TermsAndConditions from "./components/TermsAndConditions";
import PlaceOrder from "./components/PlaceOrder";

const App = () => {
  return (
    <CartContex>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/address" element={<Address />} />
          <Route path="/termsandconditions" element={<TermsAndConditions />} />
          <Route path="/placeorder" element={<PlaceOrder />} />
          <Route
            path="*"
            element={
              <div style={{ textAlign: "center", marginTop: "50px" , display: "flex", flexDirection: "column", alignItems: "center" }}>
                <h1 className="font-bold tracking-widest text-5xl text-orange-400">404 Not Found</h1>
                <img
                  src="https://static.vecteezy.com/system/resources/previews/005/883/254/original/page-not-found-404-error-concept-illustration-free-vector.jpg"
                  alt="404 Not Found"
                  style={{ marginTop: "20px" , objectFit: "contain", width: "50%", height: "40%" }}
                />
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </CartContex>
  );
};

export default App;
