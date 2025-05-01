import React from "react";
import { IoMdSearch } from "react-icons/io";
import { IoCartSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const FeaturesBar = ({currRef,handleChangeCat,runner,cartCount,debounceSearch}) => {
  const navigate = useNavigate();
  const navigateTocart = () => {
    navigate("/cart");
  }
  return (
    <div className="flex h-[2.5rem] md:h-auto md:justify-between justify-between items-center md:p-1 bg-orange-300 text-black px-1 rounded-xl mx-1">
      <div className="flex gap-1 w-1/3 md:w-[auto]">
        <select
          ref={currRef}
          name="category"
          id="selection"
          onChange={(e) => handleChangeCat(e.target)}
          className=" focus:outline-none sm:w-[8em] w-[100%] min-w-[2em] rounded-full bg-orange-500 md:p-0.5 p-1 text-white "
        >
          <option value="all">all</option>
          {Array.from(new Set(runner.map((e) => e.category))).map((e) => (
            <option value={e}>{e}</option>
          ))}
        </select>
      </div>
      <div className="flex items-center text-center rounded-full md:p-0.5 p-1 bg-orange-500 text-white md:translate-x-[-33%] sm:translate-x-[-50%]">
        <IoMdSearch className="text-xl" />
        <input
          type="text"
          className=" rounded focus:outline-none focus:placeholder:text-transparent text-center "
          placeholder="Search Product"
          onChange={debounceSearch}
        />
      </div>
      <div
        className={`text-2xl relative ${
          cartCount !== 0 ? "animate-bounce" : ""
        }`}
      >
        {cartCount !== 0 && (
          <div className="absolute top-0 left-1/2 text-sm bg-orange-200 text-black rounded-full px-1 text-[8px]">
            {cartCount}
          </div>
        )}
        <IoCartSharp className="text-orange-500 cursor-pointer text-4xl " onClick={navigateTocart}/>
      </div>
    </div>
  );
};

export default FeaturesBar;