import bookImg from "../assets/book1.jpg"
import { useParams } from 'react-router-dom'
import { useContext, useEffect, useState } from "react"
import { ThemeContext } from "./ThemeProvider"
import { addBooks } from "./BookSlice"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

import { getAllBooks, getBookById } from "../service"


const Book = () => {

    const { id } = useParams();

    const [book, setBook] = useState([]);

    useEffect(() => {
        getBookById(Number(id)).then((res) => setBook(res.data));
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [])

    console.log(book)
    

    const { theme, toggleTheme } = useContext(ThemeContext);

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const handleCart = () => {
        const bookDetail = {
            id: book.bookId,
            img: book.imageUrl,
            price: book.price,
            quantity: 1
        }
        dispatch(addBooks(bookDetail));
        navigate("/cart");
    }

    if (!book) {
        return <div className="pt-24 text-center">Loading book details...</div>;
    }

    return (
        <div style={{ backgroundColor: theme == "light" ? "white" : "black", color: theme == "light" ? "black" : "white" }} className="pt-24 min-h-screen px-4 md:px-16 pb-8 md:mt-8">
            <div className="max-w-7xl mx-auto  border-3 border-green-500 shadow-2xl p-6 md:p-10 ">

                {/* 3 COLUMN LAYOUT */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

                    {/* COLUMN 1: BOOK IMAGE */}
                    <div className="flex flex-col items-center">
                        <img
                            src={book.imageUrl}
                            alt="Book"
                            className="w-65 shadow-md"
                        />

                        <div className="flex gap-4 mt-6">
                            <button onClick={handleCart} className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
                                Add to Cart
                            </button>
                            <button onClick={handleCart} className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition">
                                Buy Now
                            </button>
                        </div>
                    </div>

                    {/* COLUMN 2: BOOK DETAILS */}
                    <div className="flex flex-col gap-4">
                        <h1 className="text-3xl font-bold">{book.title}</h1>
                        <p className="text-xl text-green-600 font-semibold">₹{book.price}</p>

                        <div className="grid grid-cols-2 gap-y-3  mt-4">
                            <span className="font-semibold">ISBN:</span>
                            <span>{book.isbn}</span>

                            <span className="font-semibold">Author:</span>
                            <span>{book.author}</span>

                            <span className="font-semibold">Publisher:</span>
                            <span>{book.publisher}</span>

                            <span className="font-semibold">Pages:</span>
                            <span>{book.pages}</span>

                            <span className="font-semibold">Language:</span>
                            <span>{book.language}</span>

                            <span className="font-semibold">Available Quantity:</span>
                            <span>10</span>
                        </div>

                        <p className=" leading-relaxed mt-4">
                            {book.description}
                        </p>
                    </div>

                    {/* COLUMN 3: REVIEWS */}
                    <div className="flex flex-col gap-6 max-sm:block sm:hidden lg:block ">
                        <div className="flex justify-between items-center">
                            <h2 className="text-xl font-bold">Reviews</h2>
                            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                                Write Review
                            </button>
                        </div>

                        {/* REVIEW CARD */}
                        <div className="border rounded-lg p-4 my-4">
                            <div className="flex justify-between mb-2">
                                <h3 className="font-semibold">Ravi Kumar</h3>
                                <span className="text-yellow-500">★★★★☆</span>
                            </div>
                            <p className="text-gray-600 text-sm ">
                                Excellent book for learning Java deeply. Very clear explanations.
                            </p>
                        </div>

                        <div className="border rounded-lg p-4 my-4">
                            <div className="flex justify-between mb-2">
                                <h3 className="font-semibold">Anita Sharma</h3>
                                <span className="text-yellow-500">★★★★★</span>
                            </div>
                            <p className="text-gray-600 text-sm">
                                Perfect reference book for Java developers.
                            </p>
                        </div>

                        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                            See All Reviews
                        </button>
                    </div>

                </div>
                {/* COLUMN 3: REVIEWS MD View */}
                <hr className='my-4 max-sm:hidden lg:hidden' />
                <div className="flex flex-col gap-6 max-sm:hidden sm:block lg:hidden">
                    <div className="flex justify-between items-center">
                        <h2 className="text-xl font-bold">Reviews</h2>
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                            Write Review
                        </button>
                    </div>

                    {/* REVIEW CARD */}
                    <div className="border rounded-lg p-4 my-4">
                        <div className="flex justify-between mb-2">
                            <h3 className="font-semibold">Ravi Kumar</h3>
                            <span className="text-yellow-500">★★★★☆</span>
                        </div>
                        <p className="text-gray-600 text-sm">
                            Excellent book for learning Java deeply. Very clear explanations.
                        </p>
                    </div>

                    <div className="border rounded-lg p-4 my-4">
                        <div className="flex justify-between mb-2">
                            <h3 className="font-semibold">Anita Sharma</h3>
                            <span className="text-yellow-500">★★★★★</span>
                        </div>
                        <p className="text-gray-600 text-sm">
                            Perfect reference book for Java developers.
                        </p>
                    </div>

                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                        See All Reviews
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Book
