import { useEffect, useState } from "react";
import { getAllBooks } from "../service";

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getAllBooks().then(res => setBooks(res.data));
  }, []);

  return (
    <>
      <h2 className="text-2xl font-semibold mb-6">Manage Books</h2>

      <table className="w-full bg-white rounded-xl shadow">
        <thead className="bg-slate-100">
          <tr>
            <th className="p-3">Image</th>
            <th>Title</th>
            <th>Author</th>
            <th>Price</th>
            <th>Stock</th>
          </tr>
        </thead>

        <tbody>
          {books.map(book => (
            <tr key={book.bookId} className="text-center border-t">
              <td className="p-2">
                <img src={book.imageUrl} className="h-16 mx-auto rounded" />
              </td>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>₹{book.price}</td>
              <td>{book.availableQuantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default BookList;
