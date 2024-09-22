const LogoCard = ({ children }) => {
  return (
    <div className="relative w-24 h-24 border rounded-lg border-gray-800 flex flex-col items-center justify-center">
      <div className="absolute w-4 h-4 bg-accent blur-xl" />
      {children}
    </div>
  );
};

export default LogoCard;
