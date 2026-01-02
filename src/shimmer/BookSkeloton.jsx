const BookSkeloton = () => {
  return (
    <div className="border border-gray-200 rounded-sm">

      {/* Image */}
      <div className="flex justify-center p-4">
        <div className="h-40 w-28 bg-gray-300 rounded shimmer"></div>
      </div>

      {/* Content */}
      <div className="px-3 pb-4 space-y-2">
        <div className="h-4 bg-gray-300 rounded shimmer"></div>
        <div className="h-4 bg-gray-300 rounded w-3/4 shimmer"></div>

        <div className="h-4 bg-gray-300 rounded w-1/2 shimmer"></div>

        <div className="h-5 bg-gray-300 rounded w-1/3 shimmer"></div>

        <div className="h-9 bg-gray-300 rounded w-full shimmer"></div>
      </div>
    </div>
  );
};

export default BookSkeloton
