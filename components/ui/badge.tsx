const Badge = ({ children }) => {
  return (
    <div className="border border-accent/30 rounded-full px-2 py-1 text-accent/90 text-xs">
      {children}
    </div>
  );
};

export default Badge;
