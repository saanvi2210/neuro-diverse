import React, { useState } from "react";
import background from "../assets/neuroBg.jpg";
import {useEducator} from "../context/educator.jsx";

const EducatorSignUp = () => {
    const {signup} = useEducator()
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        subject: "",
        experience: "",
    });

    const [error, setError] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match!");
        } else {
            setError("");
            alert("Signed Up Successfully")
            console.log("Signed Up Successfully", formData);
            signup(formData.email, formData.password)
            window.location.href = '/signup/login'
            // Process sign-up logic here
        }
    };

    return (
        <div className="min-h-screen flex justify-center items-center  "
             style={{
                 backgroundImage: `url(${background})`,
                 backgroundSize: 'cover',
                 backgroundPosition: 'center',
             }}
        >
            <div className="h-screen w-screen bg-white bg-opacity-50 p-4 flex justify-center items-center">
                <div className="bg-white bg-opacity-90 rounded-lg shadow-lg p-10 w-full max-w-md">
                    <h1 className="text-2xl font-semibold text-center text-gray-700 mb-6">
                        Educator Sign-Up
                    </h1>
                    {error && (
                        <p className="text-red-500 text-center mb-4">{error}</p>
                    )}
                    <form onSubmit={handleSubmit}>
                        {/* Name Field */}
                        <div className="mb-4">
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Full Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:border-blue-500"
                                placeholder="Enter your name"
                            />
                        </div>

                        {/* Email Field */}
                        <div className="mb-4">
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Email Address
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:border-blue-500"
                                placeholder="Enter your email"
                            />
                        </div>

                        {/* Password Field */}
                        <div className="mb-4">
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:border-blue-500"
                                placeholder="Enter your password"
                            />
                        </div>

                        {/* Confirm Password Field */}
                        <div className="mb-4">
                            <label
                                htmlFor="confirmPassword"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:border-blue-500"
                                placeholder="Confirm your password"
                            />
                        </div>

                        {/* Subject Field */}
                        <div className="mb-4">
                            <label
                                htmlFor="subject"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Teaching Subject
                            </label>
                            <select
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:border-blue-500"
                            >
                                <option value="">Select Subject</option>
                                <option value="Mathematics">Mathematics</option>
                                <option value="Science">Science</option>
                                <option value="English">English</option>
                                <option value="History">History</option>
                                <option value="Physical Education">Physical Education</option>
                            </select>
                        </div>

                        {/* Experience Field */}
                        <div className="mb-6">
                            <label
                                htmlFor="experience"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Years of Experience
                            </label>
                            <input
                                type="number"
                                name="experience"
                                value={formData.experience}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:border-blue-500"
                                placeholder="Enter years of teaching experience"
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-400 transition duration-200"
                        >
                            Sign Up
                        </button>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default EducatorSignUp;
