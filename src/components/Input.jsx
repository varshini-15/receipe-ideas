const Input = ({ ...props }) => {
  const ingredient = "rice";
  return (
    <input
      type="text"
      placeholder={`Add your ingredients... (e.g., rice)`}
      className="flex-1 px-4 py-3 outline-none  text-gray-700"
      {...props}
    />
  );
};

export default Input;
