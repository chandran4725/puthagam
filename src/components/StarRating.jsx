const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const emptyStars = 5 - fullStars;

  return (
    <div className="text-yellow-500 text-lg">
      {"★".repeat(fullStars)}
      {"☆".repeat(emptyStars)}
      <span className="text-gray-500 ml-1 text-sm font-bold">({rating})</span>
    </div>
  );
};

export default StarRating;
