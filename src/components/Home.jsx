import { IoIosStar, IoIosStarOutline, IoIosStarHalf } from "react-icons/io";
import { FaMinus, FaCartPlus } from "react-icons/fa6";
import { MdCurrencyRupee } from "react-icons/md";
import React, { useEffect, useRef, useState, useContext } from "react";
import { FaPlus } from "react-icons/fa6";
import { Header } from "./Header";
import FeaturesBar from "./FeaturesBar";
import { Cart } from "./Cart";
import { cartContex } from "./CartContex";
const Home = () => {
  const { cartCount, addCart, runn, setRunn,content,setContent,runner,popup,setpopup } = useContext(cartContex);
  //   const [runn, setRunn] = useState([]);
  //   const [cartCount, setCartCount] = useState(0);
  const currRef = useRef(null);
//   useEffect(() => {
//     const upRun = runner.map((e) => ({ ...e, added: false, cartCount: 0 }));
//     setRunn(upRun);
//     setContent(upRun);
//   }, []);

  const handleChangeCat = (e) => {
    let val = new Set(content.map((ele) => ele.id));
    let rt1 = runn.filter((ele) => !val.has(ele.id));
    let rt = [...rt1, ...content];
    rt.sort((a, b) => a.category.localeCompare(b.category));
    setRunn(rt);
    if (e.value === "all") {
      setContent(rt);
    } else {
      setContent(rt.filter((i) => i.category === e.value));
    }
  };
  let timer;
  const debounceSearch = (e) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => searchItem(e), 1000);
  };
  const searchItem = (e) => {
    if (e.target.value === "") {
      currRef.current.value = "all";
    }
    let val = new Set(content.map((ele) => ele.id));
    let rt1 = runn.filter((ele) => !val.has(ele.id));
    let rt = [...rt1, ...content];
    // rt.sort((a, b) => a.category.localeCompare(b.category));
    setRunn(rt);
    setContent(
      runn.filter((a) => {
        return (
          a.title
            .toLowerCase()
            .includes(e.target.value.toString().toLowerCase()) ||
          a.category
            .toLowerCase()
            .includes(e.target.value.toString().toLowerCase())
        );
      })
    );
  };
  //   const addCart = (a, e, chn = 1) => {
  //     a.stopPropagation();
  //     let cur = e;
  //     cur.added = true;
  //     cur.cartCount += chn;
  //     if (cur.cartCount === 0) {
  //       cur.added = false;
  //     }
  //     setRerend((re) => !re);
  //     setCartCount((pre) => pre + chn);
  //   };
  return (
    <>
      <div className="bg-orange-100 ">
        <Header popup={popup} />
        
        <div
          className={`${popup ? "blur-md " : ""}`}
          onClick={() => setpopup(null)}
        >
          <div className=" m-2 flex flex-col gap-y-2 ">
            <FeaturesBar
              runner={runner}
              handleChangeCat={handleChangeCat}
              currRef={currRef}
              cartCount={cartCount}
              debounceSearch={debounceSearch}
            />
            <div className=" grid md:grid-cols-4 sm:grid-cols-4 grid-cols-2">
              {content.map((e, i) => {
                return (
                  <div
                    key={i}
                    className="flex flex-col  h-[20rem] md:h-[auto] shadow-[4px_4px_10px_#b8600d] text-slate-800 gap-0.5 mb-2 min-h-[50%] hover:scale-[101%] transition-all duration-300 hover:shadow-[4px_4px_20px_#b8600d] rounded mx-2 p-2 max-w-2xl "
                    onClick={(a) => {
                      !popup ? a.stopPropagation() : undefined;
                      setpopup(e);
                    }}
                  >
                    <img
                      src={e.image}
                      alt="img"
                      className=" aspect-[16/15]  mb-3 rounded mx-auto"
                    />
                    <p className="text-sm truncate text-center">{e.title}</p>
                    <span className="flex items-center">
                      <MdCurrencyRupee className="text-xs" />
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
                    {/* <div className="">
                <strong className="">Description:</strong>
                {e.description}
              </div> */}
                    <div className="text-xs">
                      <strong>Category: </strong>
                      {e.category}
                    </div>
                    <div>
                      <div className="text-xs bg-red-600 inline px-2 font-medium text-amber-50 rounded">
                        {e.rating.count} left
                      </div>
                    </div>
                    <button
                      className="text-xs mt-2 bg-amber-400  flex gap-2 items-center text-center mx-auto  rounded-full p-2 cursor-pointer"
                      onClick={!e.added ? (a) =>{
                        addCart(a, e);
                        a.stopPropagation();
                      } : undefined}
                    >
                      {!e.added ? (
                        <>
                          <p>Add to cart</p>
                          <FaCartPlus className="text-xs" />
                        </>
                      ) : (
                        <div className="flex items-center gap-8" onClick={(a) => a.stopPropagation()}>
                          <FaMinus onClick={(a) => addCart(a, e, -1)} />
                          <p>{e.cartCount}</p>
                          <FaPlus onClick={(a) => addCart(a, e, 1)} />
                        </div>
                      )}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/* <Cart items={runn} cartCount={cartCount} addCart={addCart} /> */}
      </div>
    </>
  );
};

export default Home;
