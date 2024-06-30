import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";

export const Footer = () => {
  return (
    <div
      className="mt-8 rounded-t-3xl bg-cover py-8 md:p-16  "
      style={{
        backgroundImage: `linear-gradient(45deg, rgba(0,0,0,0.5),rgba(0,0,0,0.5), rgba(0,0,0,0.2)), url('./image/bg.jpg')`,
      }}
    >
      <div className="flex flex-col items-center md:flex-row  md:justify-between lg:ml-8">
        <div className="w-1/2 border-b-2 pb-3 md:border-none ">
          <h1 className="text-center md:text-left playwrite text-sky-200 text-4xl font-bold mt-3 mb-4">
            Get In Touch
          </h1>

          <div className="flex items-center gap-2 justify-center md:justify-start">
            <div className="rounded-xl text-xl text-gray-300 ">
              <MdOutlinePhoneInTalk />
            </div>
            <h1 className="  text-gray-300 font-semibold  ">
              Contact: 0171052876
            </h1>
          </div>
          <div className="flex items-center gap-2 mt-3 mb-5 justify-center md:justify-start">
            <div className="rounded-xl text-xl text-gray-300 ">
              <MdOutlineEmail />
            </div>
            <h1 className=" text-gray-300 font-semibold ">sadia@gmail.com</h1>
          </div>
          <div className="flex justify-center md:justify-start gap-3 mb-4">
            <FaInstagram className="bg-sky-100  px-2 rounded-xl text-4xl text-blue-900" />

            <FaLinkedinIn className="bg-sky-100  px-2 rounded-xl text-4xl text-blue-900" />
            <FaFacebookF className="bg-sky-100  px-2 rounded-xl text-4xl text-blue-900" />
            <FaTwitter className="bg-sky-100  px-2 rounded-xl text-4xl text-blue-900" />
          </div>
        </div>
        <div className="w-1/2 pt-7 md:pt-0 lg:border-l-2 ">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <img
              className="h-12 lg:ml-[200px] bg-white rounded-lg"
              src="./image/favicon.ico.png"
            />
            <h1 className="text-4xl font-bold text-sky-100">Book Varse</h1>
          </div>
          <p className="text-center md:text-left lg:ml-[200px] text-gray-300 mt-4">
            Your feedback matters! Reach out to us with any questions,
            suggestions, or inquiries about our recipe calorie calculator. We
            are here to help you make informed choices about your nutrition and
            cooking habits.
          </p>
        </div>
      </div>
    </div>
  );
};
