import StarRating from "./StarRating";
import ReadingIntro from "./ReadingIntro";
import { Link } from "react-router-dom";
import { ThemeContext } from "./ThemeProvider";
import { useContext, useEffect, useState } from "react";
import { getAllBooks } from "../service";
import BookSkeloton from "../shimmer/BookSkeloton";


const Allbooks = () => {

  const [loading, setLoading] = useState(true);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getAllBooks()
      .then((res) => setBooks(res.data))
      .finally(() => setLoading(false))
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [])

  console.log(books);

  const { theme, toggleTheme } = useContext(ThemeContext);

  if (loading) {
    return (
      <>
        {(
          Array.from({ length: 8 })
            .map((_, index) => <BookSkeloton key={index} />)
        )}
      </>
    )

  }
  
  return (
    <div style={{ backgroundColor: theme == "light" ? "white" : "black", color: theme == "light" ? "black" : "white" }} className="pt-4 px-4 md:px-8 lg:px-12 min-h-screen">

      <ReadingIntro />



      <div className="
        grid
        grid-cols-2
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        gap-4
        pb-20
      ">
        {books.map((book) => (

          <div
            style={{ backgroundColor: theme == "light" ? "white" : "black", color: theme == "light" ? "black" : "white" }}
            key={book.bookId}
            className="bg-white border-3 border-gray-200 rounded-sm hover:shadow-lg transition"
          >
            {/* IMAGE */}
            <div className="flex justify-center p-4">
              <img
                src={book.imageUrl}
                alt={book.title}
                className="h-40 object-contain"
              />
            </div>

            {/* CONTENT */}
            <div className="px-3 pb-4">
              <h2 className="text-md font-medium  line-clamp-2">
                {book.title}

              </h2>

              <div className="mt-1 text-md text-yellow-600">
                <StarRating rating={book.avgRating} />
              </div>

              <div className="mt-1 text-lg font-bold ">
                ₹{book.price}
              </div>

              <Link to={"/books/" + book.bookId}>
                <button className="
                mt-2
                w-full
                py-2
                text-sm
                bg-yellow-400
                hover:bg-yellow-500
                border border-yellow-500
                rounded-sm
                font-medium
                hover:cursor-pointer
              ">
                  View Details
                </button>
              </Link>
            </div>
          </div>

        ))}
      </div>
    </div>
  );
};

export default Allbooks;
