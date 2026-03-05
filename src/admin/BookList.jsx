import { useEffect, useState } from "react";
import { getAllBooks, deleteBook } from "../service";
import { MdDelete } from "react-icons/md";

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getAllBooks().then(res => setBooks(res.data));
  }, []);

  const handleSubmit = async (id) => {
    await deleteBook(id);
  }

  return (
    <>
      <h2 className="text-2xl font-semibold text-white mb-6">Manage Books</h2>

      <table className="w-full bg-white rounded-xl shadow">
        <thead className="bg-slate-100">
          <tr>
            <th className="p-2">Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Stock</th>
          </tr>
        </thead>

        <tbody>
          {books.map(book => (
            <tr key={book.bookId} className="text-center border-t">
              <td className="py-1">
                <img src={book.imageUrl} className="h-16 mx-auto rounded" />
              </td>
              <td>{book.title}</td>
              <td>₹{book.price}</td>
              <td>{book.availableQuantity}</td>
              <td><i className="text-xl" onClick={handleSubmit}>
                <MdDelete />
              </i></td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default BookList;
