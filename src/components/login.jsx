import {useEffect, useState} from "react";
import background from "../assets/neuroBg.jpg";
import {useEducator} from "../context/educator.jsx";

const LoginPage = ()=>{
    const {login, loginStudent} = useEducator()
    const [role, setRole] = useState(""); // To track if user is logging in as student or educator
    const [formData, setFormData] = useState({ email: "", password: "" });

    const handleRoleChange = (selectedRole) => {
        setRole(selectedRole);
        setFormData({ email: "", password: "" }); // Reset form data when role is changed
    };
    const checkUser = () => {
        // Check if the user is authenticated based on the role
        const isUser = role === 'educator'
            ? login(formData.email, formData.password)
            : loginStudent(formData.email, formData.password);

        // If authentication is successful
        if (isUser) {
            // Redirect based on the role
            window.location.href = role === 'educator' ? '/educatorDashboard' : '/studentDashboard';
        } else {
            // Alert the user if credentials are incorrect
            alert("Enter correct login credentials");

            // Clear the form data only if credentials are incorrect
            setFormData({ email: "", password: "" });
        }
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });

    };



    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic based on role and formData
        console.log(`Logging in as ${role}:`, formData);
        checkUser();
    };

    return (
        <div className="min-h-screen flex items-center justify-center"
             style={{
                 backgroundImage: `url(${background})`,
                 backgroundSize: 'cover',
                 backgroundPosition: 'center',
             }}
        >
            <div className="flex justify-center items-center bg-white bg-opacity-50 h-screen w-screen">
                <div className="bg-white bg-opacity-90 rounded-lg shadow-lg p-8 w-full max-w-md">
                    <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">
                        Login
                    </h1>

                    <div className="flex justify-center mb-6">
                        <button
                            onClick={() => handleRoleChange("student")}
                            className={`px-4 py-2 mx-2 rounded hover:bg-gray-300 ${
                                role === "student"
                                    ? "bg-blue-600 text-white"
                                    : "bg-gray-200 text-gray-700"
                            }`}
                        >
                            Login as Student
                        </button>
                        <button
                            onClick={() => handleRoleChange("educator")}
                            className={`px-4 py-2 mx-2 rounded hover:bg-gray-300 ${
                                role === "educator"
                                    ? "bg-green-600 text-white"
                                    : "bg-gray-200 text-gray-700"
                            }`}
                        >
                            Login as Educator
                        </button>
                    </div>

                    {role && (
                        <>
                            <h2 className="text-lg font-medium text-center text-gray-700 mb-4">
                                {`Login as ${role.charAt(0).toUpperCase() + role.slice(1)}`}
                            </h2>

                            <form onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <label
                                        htmlFor="email"
                                        className="block text-gray-700 text-sm font-bold mb-2"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2 border rounded-lg"
                                        placeholder="Enter your email"
                                        required
                                    />
                                </div>

                                <div className="mb-6">
                                    <label
                                        htmlFor="password"
                                        className="block text-gray-700 text-sm font-bold mb-2"
                                    >
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2 border rounded-lg"
                                        placeholder="Enter your password"
                                        required
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className={`w-full ${role === 'student' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-green-600 text-white hover:bg-green-800'}   text-white font-bold py-2 px-4 rounded`}
                                >
                                    Login
                                </button>
                            </form>
                        </>
                    )}

                    {!role && (
                        <p className="text-center text-gray-500 mt-4">
                            Please select a role to continue.
                        </p>
                    )}
                </div>
            </div>

        </div>
    );
}
export default LoginPage