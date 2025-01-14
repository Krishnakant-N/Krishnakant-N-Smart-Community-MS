import { useState } from "react";
import { Link } from "react-router-dom";


const LoginForm = () => {

    const [form, setForm] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleLogin = async (e) => {
        e.preventDefault();
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-blue-500 to-gray-100 shadow-lg shadow-black">
        <div className="w-full max-w-sm bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
            <form onSubmit={handleLogin}>
                {/* Email Input */}
                <div className="mb-4">
                    <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                    >
                    Email
                    </label>
                    <input
                    type="email"
                    autoFocus
                    value={form.email}
                    onChange={handleChange}
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-2 focus:border-blue-500 sm:text-sm"
                    />
                </div>

                {/* Password Input */}
                <div className="mb-4">
                    <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                    >
                    Password
                    </label>
                    <input
                    type="password"
                    id="password"
                    value={form.password}
                    onChange={handleChange}
                    name="password"
                    placeholder="Enter your password"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-2 focus:border-blue-500 sm:text-sm"
                    />
                </div>

                {/* Forgot Password Link */}
                <div className="flex justify-end mb-4">
                    <Link
                    to="#"
                    className="text-sm text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                    Forgot Password?
                    </Link>
                </div>

                {/* Submit Button */}
                <div className="mb-4">
                    <button
                    type="submit"
                    className="w-full px-4 py-2 bg-blue-600 text-white font-medium text-sm rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                    Login
                    </button>
                </div>
            </form>
        </div>
        </div>
    );
};

export default LoginForm;
