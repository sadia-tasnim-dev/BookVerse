import books from "./../../Components/Data/Bookinfo.json";
import { Book } from "./Book";

export const Books = () => {
  return (
    <div className="px-7">
      <h1 className="text-center text-4xl font-semibold text-sky-900 playwrite mt-10 mb-28">
        Books
      </h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-36 mb-36">
        {books.map((book) => (
          <Book key={book.bookId} {...book} />
        ))}
      </div>
    </div>
  );
};
