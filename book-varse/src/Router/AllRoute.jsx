import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Homepage } from "../Pages/Homepage/Homepage";
import { Layout } from "../Components/layout/Layout";
import ListedBook from "../Pages/ListedBook/ListedBook";
import { ReadBook } from "../Pages/ReadBook/ReadBook";
import { BookDetails } from "../Pages/BookDetails/BookDetails";
import { NotFound } from "../Pages/NotFound/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/listedBook",
        element: <ListedBook />,
      },
      {
        path: "/readBook",
        element: <ReadBook />,
      },
      {
        path: "/book",
        element: <BookDetails />,
      },
    ],
  },
  { path: "*", element: <NotFound></NotFound> },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
