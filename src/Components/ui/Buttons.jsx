function Button({ children, className = "", ...props }) {
  const baseStyles =
    "inline-flex items-center justify-center px-4 py-2 rounded-md font-medium";

  const variants = "bg-purple text-orange hover:bg-purple/95 active:bg-purple/80";

  return (
    <button className={`${baseStyles} ${variants} ${className}`} {...props}>
      {children}
    </button>
  );
}
export default Button;
