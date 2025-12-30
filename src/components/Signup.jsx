import { useState } from "react";
import icon from "../assets/icon.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        setError("");

        const payload = {
            name,
            email,
            password,
            role: "user",
        };

        try {
            const response = await fetch("http://localhost:8080/api/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            if (response.status === 202) {
                setError("User already exists");
                return;
            }

            if (!response.ok) {
                setError("Something went wrong. Try again.");
                return;
            }

            // success
            navigate("/books");
        } catch (err) {
            setError("Server not reachable");
            console.error(err);
        }
    };

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
                    Create your account
                </h2>

                {/* ERROR */}
                {error && (
                    <p className="text-red-500 text-md font-medium text-center mb-4">{error}</p>
                )}

                {/* FORM */}
                <form onSubmit={handleRegister} className="flex flex-col gap-4">
                    <input
                        type="text"
                        placeholder="Full name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-yellow-400"
                        required
                    />

                    <input
                        type="email"
                        placeholder="Email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-yellow-400"
                        required
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-yellow-400"
                        required
                    />

                    <button
                        type="submit"
                        className="mt-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-3 rounded-lg transition"
                    >
                        Register
                    </button>

                    <p className="text-center text-sm text-gray-600 mt-4">
                        Already have an account?
                        <Link to={"/login"}>
                            <span className="text-yellow-500 font-medium cursor-pointer ml-1">
                                Login
                            </span>
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Signup;
