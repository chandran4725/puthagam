import { books } from "../util";
import StarRating from "./StarRating";
import bookImg from "../assets/book1.jpg"
import ReadingIntro from "./ReadingIntro";
import { Link } from "react-router-dom";
import { ThemeContext } from "./ThemeProvider";
import { useContext } from "react";

const Allbooks = () => {

  const {theme,toggleTheme} = useContext(ThemeContext);
  
  return (
    <div style={{backgroundColor:theme == "light" ? "white" : "black",color:theme == "light" ? "black" : "white"}} className="pt-4 px-4 md:px-8 lg:px-12 min-h-screen">

      <ReadingIntro />



      <div className="
        grid
        grid-cols-2
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        gap-4
      ">
        {books.map((book) => (
          <div
          style={{backgroundColor:theme == "light" ? "white" : "black",color:theme == "light" ? "black" : "white"}}
            key={book.id}
            className="bg-white border-3 border-green-500 rounded-sm hover:shadow-lg transition"
          >
            {/* IMAGE */}
            <div className="flex justify-center p-4">
              <img
                src={bookImg}
                alt={book.name}
                className="h-40 object-contain"
              />
            </div>

            {/* CONTENT */}
            <div className="px-3 pb-4">
              <h2 className="text-md font-medium  line-clamp-2">
                {book.name}
              </h2>

              <div className="mt-1 text-md text-yellow-600">
                <StarRating rating={book.avgRating} />
              </div>

              <div className="mt-1 text-lg font-bold ">
                ₹{book.price}
              </div>

              <Link to={"/books/"+book.id}>
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
