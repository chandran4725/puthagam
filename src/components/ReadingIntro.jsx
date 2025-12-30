import React, { useContext } from "react";
import ReadingImage from "../assets/ReadingImage.jpg"; // add your image here
import { ThemeContext } from "./ThemeProvider";
import book2 from "../assets/book2.jpg"

const ReadingIntro = () => {
  const {theme,toggleTheme}= useContext(ThemeContext)
  return (
    <section style={{backgroundColor:theme == "light" ? "white" : "black",color:theme == "light" ? "black" : "white"}} className="w-full mt-8 lg:mt-20 py-14 px-4 sm:px-8 md:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* IMAGE */}
        <div className="flex-row space-y-8 justify-center">
          <img
            src={ReadingImage}
            alt="Person reading a book"
            className="rounded-md shadow-2xl"
          />
          <img
            src={book2}
            alt="Person reading a book"
            className="rounded-md shadow-2xl max-sm:hidden lg:hidden"
          />
        </div>

        {/* TEXT */}
        <div className="space-y-5 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold ">
            Why Reading Books Matters
          </h2>

          <p className=" leading-relaxed">
            In a fast-moving world filled with distractions, books give us the
            power to slow down, focus, and think deeply. Reading is not just a
            habit — it is a way to grow your mind and understand life better.
          </p>

          <p className=" leading-relaxed">
            Every book improves concentration, strengthens memory, and builds
            strong communication skills. Readers learn to think clearly, make
            better decisions, and stay calm even in stressful situations.
          </p>

          <p className=" font-medium italic">
            “A reader lives a thousand lives before he dies.”
          </p>
        </div>

      </div>
    </section>
  );
};

export default ReadingIntro;
