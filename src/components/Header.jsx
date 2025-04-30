import React from "react";

export const Header = ({popup}) => {
  return (
    <div
      className={`font-extrabold text-center text-2xl selectnone cursive-text text-white shadow-[0px_4px_10px_#b8600d] tracking-widest  bg-orange-400 ${
        !popup && "sticky"
      }  top-0 z-50 rounded  m-1 `}
    >
      Cosmic Shoppers
    </div>
  );
};

