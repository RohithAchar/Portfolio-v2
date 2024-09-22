const LogoCard = ({ children }) => {
  return (
    <div className="relative w-24 h-24 border rounded-lg border-gray-800 flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute w-2 h-2 bg-accent blur-xl" />
      {children}
    </div>
  );
};

export default LogoCard;
