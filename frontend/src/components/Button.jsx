const Button = ({
  children,
  type = "button",
  onClick,
  disabled = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className="
        w-full
        bg-blue-600
        hover:bg-blue-700
        text-white
        py-3
        rounded-lg
        font-semibold
        transition
        duration-200
        disabled:opacity-50
      "
    >
      {children}
    </button>
  );
};

export default Button;