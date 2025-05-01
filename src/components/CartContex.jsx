import React from "react";
import { createContext, useState, useEffect } from "react";
import runner from "../assets/products.json";
import { ToastContainer, toast } from "react-toastify";
import { OpenProduct } from "./OpenProduct";
export const cartContex = createContext();

const CartContex = ({ children }) => {
  const [runn, setRunn] = useState([]);
  const [content, setContent] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [rerend, setRerend] = useState(true);
  const [popup, setpopup] = useState(null);
  const [clear, setClear] = useState(false);
  const [address, setAddress] = useState([
    {
      id: 1,
      name: "John Doe",
      address: "123 Main St",
      city: "New York",
      pincode: "10001",
      phone: "1234567890",
      email: "example@email.com",
      checked: true
    },
    {
      id: 2,
      name: "Jane Smith",
      address: "456 Elm St",
      city: "Los Angeles",
      pincode: "90001",
      phone: "1234567890",
      email: "example@email.com",
      checked: false
    },
    {
      id: 3,
      name: "Alice Johnson",
      address: "789 Oak St",
      city: "Chicago",
      pincode: "60601",
      phone: "1234567890",
      email: "example@email.com",
      checked: false
    },
  ]);

  useEffect(() => {
    const upRun = runner.map((e) => ({ ...e, added: false, cartCount: 0 }));
    setRunn(upRun);
    setContent(upRun);
    setCartCount(0);
  }, [clear]);
  const addCart = (a, e, chn = 1) => {
    a.stopPropagation();
    let cur = e;
    let prev = cur.cartCount;
    cur.added = true;
    cur.cartCount += chn;
    if (cur.cartCount === 0) {
      cur.added = false;
    }
    if (cur.cartCount > cur.rating.count) {
      cur.cartCount = cur.rating.count;
      toast.error(`🦄You can only add ${cur.rating.count} items`, {
        position: "bottom-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
    // if (cur.cartCount > prev) {
    //   toast.success(`🎆${cur.title} added to cart`, {
    //     position: "bottom-right",
    //     autoClose: 1000,
    //     hideProgressBar: false,
    //     closeOnClick: false,
    //     pauseOnHover: false,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "light",
    //   });
    // } else if (cur.cartCount < prev) {
    //   toast.error(`🦄${cur.title} removed from cart`, {
    //     position: "bottom-right",
    //     autoClose: 1000,
    //     hideProgressBar: false,
    //     closeOnClick: false,
    //     pauseOnHover: false,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "light",
    //   });
    // }

    setRerend((re) => !re);
    setCartCount((pre) => pre + chn);
  };
  return (
    <cartContex.Provider
      value={{
        cartCount,
        setCartCount,
        content,
        setContent,
        addCart,
        runn,
        setRunn,
        runner,
        toast,
        popup,
        setpopup,
        address,
        setAddress,
        setRerend,setClear
      }}
    >
      {popup && (
        <OpenProduct e={popup} close={() => setpopup(null)} cart={addCart} />
      )}
      <ToastContainer
        position="bottom-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="light"
      />
      {children}
    </cartContex.Provider>
  );
};

export default CartContex;
