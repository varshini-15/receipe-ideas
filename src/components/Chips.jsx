const Chips = ({ item, ...props }) => {
  return (
    <div className="flex items-center gap-3 bg-blue-100 text-slate-700 px-3 py-1 rounded-full text-sm">
      <div>{item}</div>
      <div {...props} className="bg-slate-500 rounded-full p-1 cursor-pointer">
        <span className="text-white">x</span>
      </div>
    </div>
  );
};

export default Chips;
