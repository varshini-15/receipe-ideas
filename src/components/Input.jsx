const Input = ({ ...props }) => {
  return (
    <input
      type="text"
      placeholder="Enter an ingredient..."
      className="flex-1 px-4 py-3 outline-none  text-gray-700"
      {...props}
    />
  );
};

export default Input;
