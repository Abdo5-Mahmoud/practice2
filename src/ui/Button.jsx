import React from "react";

const Button = ({ children, type }) => {
  return (
    <button
      className={`m-1 min-w-[75px] rounded-full p-1 p-2 text-center ring-1 hover:shadow-md focus:shadow-lg focus:ring-offset-2 ${type === "red" && "red"} ${type === "secondary" && "secondary"} `}
    >
      {children}
    </button>
  );
};

export default Button;
