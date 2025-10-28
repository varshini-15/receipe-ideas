const Alert = ({ message }) => {
  return (
    <div class="flex items-center justify-between bg-red-100 border border-red-300 text-red-800 m-2 p-2 rounded-lg">
      <div class="flex items-center space-x-2">
        <svg
          class="w-5 h-5 text-red-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 9v2m0 4h.01M12 5a7 7 0 100 14 7 7 0 000-14z"
          />
        </svg>
        <span class="font-medium">Error:</span>
        <span>{message}</span>
      </div>
    </div>
  );
};

export default Alert;
