import books from "./../../Components/Data/Bookinfo.json";
import Book from "./Book";
export const Books = () => {
  return (
    <div>
      {books.map((book) => (
        <Book key={book.bookId} {...book} />
      ))}
    </div>
  );
};
