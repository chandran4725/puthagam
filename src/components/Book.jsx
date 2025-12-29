import React from 'react'
import bookImg from "../assets/book1.jpg"

const Book = () => {
    return (
        <div className="mt-24 px-4 md:px-16">
            <div className="max-w-7xl mx-auto bg-white shadow-lg p-6 md:p-10">

                {/* 3 COLUMN LAYOUT */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

                    {/* COLUMN 1: BOOK IMAGE */}
                    <div className="flex flex-col items-center">
                        <img
                            src={bookImg}
                            alt="Book"
                            className="w-[260px] shadow-md"
                        />

                        <div className="flex gap-4 mt-6">
                            <button className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
                                Add to Cart
                            </button>
                            <button className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition">
                                Buy Now
                            </button>
                        </div>
                    </div>

                    {/* COLUMN 2: BOOK DETAILS */}
                    <div className="flex flex-col gap-4">
                        <h1 className="text-3xl font-bold">The Complete Java Guide</h1>
                        <p className="text-xl text-green-600 font-semibold">₹499</p>

                        <div className="grid grid-cols-2 gap-y-3 text-gray-700 mt-4">
                            <span className="font-semibold">ISBN:</span>
                            <span>978-0135166307</span>

                            <span className="font-semibold">Author:</span>
                            <span>Herbert Schildt</span>

                            <span className="font-semibold">Publisher:</span>
                            <span>McGraw Hill</span>

                            <span className="font-semibold">Pages:</span>
                            <span>1248</span>

                            <span className="font-semibold">Language:</span>
                            <span>English</span>

                            <span className="font-semibold">Available Quantity:</span>
                            <span>10</span>
                        </div>

                        <p className="text-gray-600 leading-relaxed mt-4">
                            This book provides a comprehensive introduction to Java programming,
                            covering fundamentals, OOP concepts, multithreading, collections,
                            and modern Java features.
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
                <hr className='my-2'/>
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
