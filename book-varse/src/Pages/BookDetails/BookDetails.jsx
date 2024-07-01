import { useParams } from "react-router-dom";
import { Rating } from "../../Components/Shared/Rating";
import books from "./../../Components/Data/Bookinfo.json";

export const BookDetails = () => {
  const { bookId } = useParams();
  const [book] = books.filter((el) => el.bookId === Number(bookId));
  if (!book) {
    return (
      <p className="text-center text-2xl text-red-800 font-bold mt-10">
        Book Not found
      </p>
    );
  }

  const AddToReadList = () => {
    const readListString = localStorage.getItem("read-list");
    const readList = JSON.parse(readList);
    if (!readList) {
      localStorage.setItem("read-list", JSON.stringify([bookId]));
      return;
    }
  };

  const getData = () => {
    const data = localStorage.getItem("book");
    const parseData = JSON.parse(data);
    console.log(parseData);
  };

  const {
    image,
    bookName,
    author,
    review,
    category,
    tags,
    totalPages,
    publisher,
    yearOfPublishing,
    rating,
  } = book;

  return (
    <div className="px-12 py-8  max-w-screen-lg mx-auto mt-10 bg-blue-50 rounded-lg  shadow-[10px_10px_28px_5px_#e6e8eb]  flex flex-col justify-around md:flex-row">
      <img className="h-96 object-contain" src={image} />
      <div className="pt-4 pl-7">
        <h1 className="oswald text-4xl  text-blue-900">{bookName}</h1>
        <h1 className=" font-semibold text-slate-400 mt-1 border-b border-b-blue-100 pb-3">
          By {author}
        </h1>
        <h1 className="text-lg font-semibold text-sky-700 border-b border-b-blue-100 py-2">
          {category}
        </h1>
        <h1 className="text-gray-400 py-2 mb-3">
          <span className="text-blue-950 font-bold ">Review: </span> {review}
        </h1>
        <div>
          {tags.map((tag, index) => (
            <span
              className="bg-sky-100 text-sm text-cyan-900 px-2 py-1 rounded-xl font-bold mr-2"
              key={index}
            >
              # {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-3 items-center mt-4 pb-4 ">
          <h1 className="text-blue-500 font-bold ">
            <span className="text-blue-950 font-bold mr-2 ">Rating: </span>
            {rating}
          </h1>
          <Rating rating={rating} />
        </div>
        <div className="border-t border-t-blue-100 pt-3 flex gap-5">
          <div className="text-cyan-700 font-bold">
            <h1 className="pb-1">TotalPages: </h1>
            <p className="pb-1">Publisher: </p>
            <p className="pb-1">Year Of Publishing:</p>
          </div>
          <div className="text-gray-500 ">
            <h1 className="pb-1"> {totalPages}</h1>
            <p className="pb-1">{publisher}</p>
            <p className="pb-1">{yearOfPublishing}</p>
          </div>
        </div>
        <div className="flex items-center gap-3 mt-3 ">
          <button
            onClick={AddToReadList}
            className="w-fit bg-gradient-banner text-white font-semibold px-4 py-1  rounded-2xl truncate"
          >
            Add to read list
          </button>
          <button className="w-fit bg-gradient-btn text-white font-semibold px-4 py-1  rounded-2xl truncate">
            Open to read
          </button>
          <button className="w-fit bg-gradient-btn2 text-sky-800 font-semibold px-4 py-1 rounded-2xl truncate">
            Add to wish list
          </button>
        </div>
      </div>
    </div>
  );
};
