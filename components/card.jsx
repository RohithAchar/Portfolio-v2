"use client";

const Card = ({ children }) => {
  return (
    <div className="border border-[#1D1D1D] card-gradient py-6 px-4 rounded-lg">
      {children}
    </div>
  );
};

export default Card;
