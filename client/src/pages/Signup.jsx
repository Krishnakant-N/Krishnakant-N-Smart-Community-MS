import { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {

    const [form, setForm] = useState({
        username: '',
        email: '',
        password: '',
        role: ''
    });
    
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSignup = async (e) => {
        e.preventDefault();
        const { username, email, password, role } = form;
        if(!username || !email || !password || !role) {
            return ;
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-600 to-80% to-gray-200">
        <div className="w-full max-w-sm bg-white shadow-lg shadow-black rounded-lg p-6">
            <h2 className="text-2xl font-bold text-center mb-4">Create an account</h2>
            <form onSubmit={handleSignup}>
            {/* Username Input */}
                <div className="mb-4">
                    <label
                    htmlFor="username"
                    className="block text-sm font-medium text-gray-700"
                    >
                    Username
                    </label>
                    <input
                    autoFocus
                    value={form.username}
                    onChange={handleChange}
                    type="text"
                    id="username"
                    name="username"
                    placeholder="Enter your username"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-2 focus:border-blue-500 sm:text-sm"
                    />
                </div>

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
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
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
                    value={form.password}
                    onChange={handleChange}
                    id="password"
                    name="password"
                    placeholder="Create a password"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-2 focus:border-blue-500 sm:text-sm"
                    />
                </div>

                {/* Role */}
                <div className="mb-4">
                    <label htmlFor="role" className="block text-sm font-medium text-gray-700">Role</label>
                    <select name="role" id="role" value={form.role} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:border-2 sm:text-sm">
                        <option value="resident">Select Role</option>
                        <option value="admin">Admin</option>
                        <option value="resident">Resident</option>
                        <option value="it">IT Manager</option>
                    </select>
                </div>

                {/* Submit Button */}
                <div className="mb-2">
                    <button
                    type="submit"
                    className="w-full px-4 py-2 bg-blue-600 text-white font-medium text-sm rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                    Sign up
                    </button>
                </div>

                {/* Login Link */}
                <div className="flex justify-center">
                    <p className="text-sm mx-1">Already have an account?</p>
                    <Link
                    to="/login"
                    className="text-sm text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                    Login
                    </Link>
                </div>
            </form>
        </div>
        </div>
    );
};

export default Signup;
