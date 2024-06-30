import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io";

export const Rating = ({ rating }) => {
  const fullStar = Math.floor(rating);
  const halfStar = Math.ceil(rating) - fullStar;
  const emptyStar = 5 - Math.ceil(rating);

  return (
    <div className="flex gap-1">
      {[...Array(fullStar)].map((star) => (
        <IoIosStar className="text-amber-500" key={star} />
      ))}
      {[...Array(halfStar)].map((star) => (
        <IoIosStarHalf className="text-amber-500" key={star} />
      ))}
      {[...Array(emptyStar)].map((star) => (
        <IoIosStarOutline className="text-amber-500" key={star} />
      ))}
    </div>
  );
};
