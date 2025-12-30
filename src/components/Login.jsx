import { Link } from "react-router-dom";
import icon from "../assets/icon.png";

const Login = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">

            <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">

                {/* LOGO */}
                <div className="flex items-center justify-center gap-3 mb-6">
                    <img src={icon} alt="Logo" className="w-12 h-12 rounded-xl" />
                    <h1 className="text-2xl font-bold text-gray-800">Puthagam</h1>
                </div>

                {/* TITLE */}
                <h2 className="text-xl font-semibold text-center text-gray-700 mb-6">
                    Login to your account
                </h2>

                {/* FORM */}
                <form className="flex flex-col gap-4">

                    <input
                        type="email"
                        placeholder="Email address"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-yellow-400"
                        required
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-yellow-400"
                        required
                    />

                    <button
                        type="submit"
                        className="mt-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-3 rounded-lg transition"
                    >
                        Login
                    </button>

                    <p className="text-center text-sm text-gray-600 mt-4">
                        Don’t have an account?
                        <Link to={"/"}>
                            <span className="text-yellow-500 font-medium cursor-pointer ml-1">
                                Register
                            </span>
                        </Link>
                    </p>

                </form>
            </div>
        </div>
    );
};

export default Login;
