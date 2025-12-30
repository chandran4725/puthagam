import { Link } from "react-router-dom";
import { ThemeContext } from "./ThemeProvider";
import { useContext } from "react";

const Footer = () => {
    const {theme} = useContext(ThemeContext);
    return (
        <footer className={`${theme == 'light' ? 'bg-amber-50 text-black' : 'bg-black text-white'}  border-t-2 border-gray-200  mt-0`}>
            <div className="  px-6 md:px-20 py-14">

                {/* TOP */}
                <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-4 gap-20">

                    {/* BRAND */}
                    <div>
                        <h2 className="text-2xl font-semibold ">
                            Puthagam
                        </h2>
                        <p className="mt-4 text-sm leading-relaxed ">
                            Puthagam is an online bookstore built for readers who
                            value focus, deep learning, and real knowledge over
                            distractions.
                        </p>
                    </div>

                    {/* LINKS */}
                    <div>
                        <h3 className=" font-semibold mb-4">
                            Explore
                        </h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/" className="hover:text-green-500">Home</Link></li>
                            <li><Link to="/books" className="hover:text-green-500">Books</Link></li>
                            <li><Link to="/cart" className="hover:text-green-500">Cart</Link></li>
                            <li><Link to="/login" className="hover:text-green-500">Login</Link></li>
                        </ul>
                    </div>

                    {/* RESOURCES */}
                    <div>
                        <h3 className="font-semibold mb-4">
                            Resources
                        </h3>
                        <ul className="space-y-2 text-sm">
                            <li className="hover:text-green-500 cursor-pointer">
                                Reading Benefits
                            </li>
                            <li className="hover:text-green-500 cursor-pointer">
                                Learning Tips
                            </li>
                            <li className="hover:text-green-500 cursor-pointer">
                                FAQs
                            </li>
                        </ul>
                    </div>

                    {/* CONTACT */}
                    <div>
                        <h3 className=" font-semibold mb-4">
                            Contact
                        </h3>
                        <p className="text-sm ">
                            Email: support@puthagam.com
                        </p>
                        <p className="text-sm  mt-2">
                            Location: India
                        </p>
                    </div>
                </div>

                {/* DIVIDER */}
                <div className="border-t border-gray-500 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-sm ">

                    <p>
                        © {new Date().getFullYear()} Puthagam. All rights reserved.
                    </p>

                    <p className="mt-4 md:mt-0 italic">
                        “Read deeply. Learn slowly.”
                    </p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
