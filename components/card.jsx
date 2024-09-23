"use client";

const Card = ({ children }) => {
  return (
    <div className="relative">
      <div className="absolute inset-2 rounded-lg bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-gray-600 via-yellow-600 to-red-600 opacity-20 blur-2xl"></div>
      <div className="relative border border-[#1D1D1D] bg-black card-gradient py-6 px-4 rounded-lg">
        {children}
      </div>
    </div>
  );
};

export default Card;
