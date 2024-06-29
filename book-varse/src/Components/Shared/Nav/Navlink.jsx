import { Link, useLocation } from "react-router-dom";

export const Navlink = ({ title, url }) => {
  const location = useLocation();
  return (
    <Link
      className={`py-1 px-3  ${
        location.pathname === url
          ? "text-blue-900 font-bold bg-blue-200 rounded-lg"
          : "border-transparent font-medium "
      }`}
      to={url}
    >
      {title}
    </Link>
  );
};
