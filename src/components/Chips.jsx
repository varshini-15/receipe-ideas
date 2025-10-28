const Chips = ({ item, ...props }) => {
  return (
    <div className="flex items-center gap-3 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
      <div>{item}</div>
      <div {...props} className="bg-blue-500 rounded-full p-1 cursor-pointer">
        <span className="text-white">x</span>
      </div>
    </div>
  );
};

export default Chips;
