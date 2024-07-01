import { useNavigate } from "react-router-dom";
import { Rating } from "../../Components/Shared/Rating";

export const Book = ({ image, bookName, author, rating, category, bookId }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-blue-50 rounded-t-full flex flex-col shadow-[5px_5px_20px_2px_#e6e8eb]">
      <div className="px-6 pt-[110px] relative ">
        <img
          className="h-36 absolute -top-14 left-1/2"
          style={{ transform: "translateX(-50%)" }}
          src={image}
        />
        <h1 className="oswald text-xl flex-grow text-blue-900">{bookName}</h1>
        <h1 className="text-xs font-semibold text-slate-400 mt-2">
          By {author}
        </h1>

        <div className="flex items-center justify-between mt-3 pb-4 border-b border-blue-100">
          <Rating rating={rating} />
          <h1 className="font-semibold text-cyan-500">{rating} Star</h1>
        </div>
        <div className="flex items-center mt-3 justify-between">
          <h1 className="text-lg font-semibold text-slate-400">{category}</h1>
          <button
            onClick={() => navigate("/book/" + bookId)}
            className=" w-fit bg-gradient-banner text-white font-semibold px-2  rounded-2xl truncate"
          >
            View details
          </button>
        </div>
      </div>
      <div className="rounded-b-full bg-blue-50 h-8 -mb-8 mt-auto shadow-xl shadow-gray-300" />
    </div>
  );
};
