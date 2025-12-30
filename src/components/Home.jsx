import book1 from "../assets/book2.jpg";
import book2 from "../assets/book3.jpg";
import { ThemeContext } from "./ThemeProvider";
import { useContext,useEffect } from "react";

const Home = () => {

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [])

    const { theme } = useContext(ThemeContext);
    return (
        <div className={`${theme == 'light' ? 'bg-white text-black' : 'bg-black text-white'} px-6 lg:px-24 py-20 md:py-28`}>

            {/* SECTION 1 */}
            <div className="grid md:grid-cols-2 gap-14 items-center">

                {/* TEXT */}
                <div>
                    <h1 className="text-4xl md:text-5xl font-bold  leading-tight">
                        Welcome to <span className="text-amber-600">Puthagam</span>
                    </h1>

                    <h1 className="mt-4 text-4xl md:text-5xl font-semibold  leading-snug">
                        Books build focus, <br /> not distractions.
                    </h1>

                    <p className="mt-6  text-lg">
                        Puthagam is an online book store created for learners who want
                        real understanding — not scrolling, not notifications.
                    </p>

                    <p className="mt-4 ">
                        Research shows that reading physical books improves comprehension
                        and long-term memory compared to mobile reading.
                    </p>
                </div>

                {/* FLOATING BOOKS */}
                <div className=" flex-row space-y-4 justify-center ">
                    <img
                        src={book1}
                        className="rounded-md"
                        alt="book"
                    />
                    <img
                        src={book2}
                        className="rounded-md lg:hidden"
                        alt="book"
                    />

                </div>
            </div>

            {/* SECTION 2 */}
            <div className="mt-20 max-w-4xl mx-auto">
                <h2 className="text-3xl font-medium  text-center">
                    Why choose books over mobile learning?
                </h2>

                <div className="mt-12 space-y-8">
                    {[
                        {
                            title: "Better focus",
                            desc: "Books remove notifications and distractions, helping the brain stay focused longer."
                        },
                        {
                            title: "Stronger memory",
                            desc: "Studies show readers remember content better when reading from paper."
                        },
                        {
                            title: "Healthier learning",
                            desc: "No blue light, less eye strain, and reduced mental fatigue."
                        }
                    ].map((item, index) => (
                        <div key={index} className={`border-l-4 border-r-4 border-amber-500 pl-6 shadow-2xl py-4`}>
                            <h3 className="text-xl font-semibold ">
                                {item.title}
                            </h3>
                            <p className="mt-2 ">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* SECTION 3 */}
            <div className="mt-20 text-center">
                <p className=" text-lg italic  mx-auto">
                    “Reading is not about finishing pages.
                    It is about understanding ideas.”
                </p>
            </div>

        </div>
    );
};

export default Home;
