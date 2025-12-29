import React from "react";
import ReadingImage from "../assets/ReadingImage.jpg"; // add your image here

const ReadingIntro = () => {
  return (
    <section className="w-full mt-8 lg:mt-20 py-14 px-4 sm:px-8 md:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* IMAGE */}
        <div className="flex justify-center">
          <img
            src={ReadingImage}
            alt="Person reading a book"
            className="w-full max-w-sm md:max-w-md rounded-xl shadow-lg"
          />
        </div>

        {/* TEXT */}
        <div className="space-y-5 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
            Why Reading Books Matters
          </h2>

          <p className="text-gray-600 leading-relaxed">
            In a fast-moving world filled with distractions, books give us the
            power to slow down, focus, and think deeply. Reading is not just a
            habit — it is a way to grow your mind and understand life better.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Every book improves concentration, strengthens memory, and builds
            strong communication skills. Readers learn to think clearly, make
            better decisions, and stay calm even in stressful situations.
          </p>

          <p className="text-gray-700 font-medium italic">
            “A reader lives a thousand lives before he dies.”
          </p>
        </div>

      </div>
    </section>
  );
};

export default ReadingIntro;
