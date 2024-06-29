import { TiStarFullOutline } from "react-icons/ti";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

export const Banner = () => {
  return (
    <div className="flex items-center justify-center gap-7 mt-6 bg-blue-50 px-14 pt-10 pb-5 flex-col min-[1088px]:flex-row rounded-3xl">
      <div className="flex flex-col justify-center items-center min-[1088px]:justify-start min-[1088px]:items-start">
        <h1 className=" flex gap-1 items-center  playwrite bg-white w-fit px-4 rounded-full border border-b-amber-300 border-t-blue-200 text-blue-900">
          <TiStarFullOutline className=" md:text-xl text-yellow-500 " />
          Start your reading journey today!
        </h1>
        <h1 className="chakra text-center min-[1088px]:text-start text-[50px] font-semibold text-sky-700 leading-tight mt-5">
          Where every page is a new Adventure
        </h1>
        <p className="leading-7 mt-4 min-[1088px]:text-start text-center text-slate-400 font-medium">
          From classics to contemporary, our Book Varse offers a wide selection
          of books to suit every taste and interest. Start exploring our shelves
          today and uncover your next literary gem.
        </p>
        <button className="flex items-center gap-2 w-fit bg-gradient-banner text-white font-semibold px-4 py-1 rounded-2xl mt-5">
          View the list <MdKeyboardDoubleArrowRight className="text-2xl" />
        </button>
      </div>
      <img className="max-h-[450px]" src="./image/Banner.png" />
    </div>
  );
};
