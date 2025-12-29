import React from "react";
import { books } from "../util";
import StarRating from "./StarRating";

const Allbooks = () => {
  return (
    <div className="pt-4 px-4 md:px-8 lg:px-12 min-h-screen">

      <h1 className="text-xl md:text-2xl font-semibold mb-4">
        Books
      </h1>

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
            key={book.id}
            className="bg-white border border-gray-200 rounded-sm hover:shadow-lg transition"
          >
            {/* IMAGE */}
            <div className="flex justify-center p-4">
              <img
                src={book.img}
                alt={book.name}
                className="h-40 object-contain"
              />
            </div>

            {/* CONTENT */}
            <div className="px-3 pb-4">
              <h2 className="text-sm font-medium text-gray-900 line-clamp-2">
                {book.name}
              </h2>

              <div className="mt-1 text-sm text-yellow-600">
                <StarRating rating={book.avgRating}/>
              </div>

              <div className="mt-1 text-lg font-bold text-gray-900">
                ₹{book.price}
              </div>

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
              ">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Allbooks;
