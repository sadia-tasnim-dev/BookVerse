import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Homepage } from "../Pages/Homepage/Homepage";
import { Layout } from "../Components/layout/Layout";
import ListedBook from "../Pages/ListedBook/ListedBook";
import { ReadBook } from "../Pages/ReadBook/ReadBook";
import { BookDetails } from "../Pages/BookDetails/BookDetails";
import { NotFound } from "../Pages/NotFound/NotFound";
import { AuthorPage } from "../Pages/AuthorPage/AuthorPage";
import { Reviews } from "../Pages/Reviews/Reviews";

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
        path: "/listed-book",
        element: <ListedBook />,
      },
      {
        path: "/read-book",
        element: <ReadBook />,
      },
      {
        path: "/book/:bookId",
        element: <BookDetails />,
      },
      { path: "/authors", element: <AuthorPage /> },
      { path: "/reviews", element: <Reviews /> },
    ],
  },
  { path: "*", element: <NotFound></NotFound> },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
