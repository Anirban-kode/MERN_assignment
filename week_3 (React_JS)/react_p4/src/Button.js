import React from "react";

const Button = ({ text }) => {
  const handleClick = () => {
    console.log("Button clicked!");
  };

  return (
    <button
      className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default Button;