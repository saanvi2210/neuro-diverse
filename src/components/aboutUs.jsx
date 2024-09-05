import logo from "../assets/logo.jpg";
import {Link} from "react-router-dom";
import background from "../assets/neuroBg.jpg";
import p4 from "../assets/p4.jpg";
import p2 from "../assets/p2.jpg";
import p3 from "../assets/p3.jpg";
import p1 from "../assets/p1.jpg";
import React, {useState} from "react";

const AboutUs = ()=>{
    const [isHovered1, setIsHovered1] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);
    const [isHovered3, setIsHovered3] = useState(false);
    const [isHovered4, setIsHovered4] = useState(false);
    return (<div className="min-h-screen flex flex-col relative">
        {/* Navbar */}
        <nav className="bg-white z-10 shadow-lg p-4 fixed w-full flex justify-between items-center z-10">
            <div className="flex items-center">
                <img src={logo} alt="Logo" className="h-8 w-8 mr-2"/> {/* Your logo */}
                <h1 className="text-2xl font-bold text-gray-800">NeuroLearn</h1> {/* App name */}
            </div>
            <div className="flex space-x-4 text-lg">
                <Link to="/"
                      className="text-gray-600 hover:text-gray-800  hover:bg-gray-100 px-2 py-1 rounded-xl ">Home</Link>
                <Link to="/about" className="text-gray-600 hover:text-gray-800 font-bold hover:bg-gray-100 px-2 py-1 rounded-xl">About
                    Us</Link>
                <Link to="/about"
                      className="text-gray-600 hover:text-gray-800 hover:bg-gray-100 px-2 py-1 rounded-xl">Features</Link>
                <Link to="/" className="text-gray-600 hover:text-gray-800 hover:bg-gray-100 px-2 py-1 rounded-xl">Contact
                    Us</Link>

            </div>
            <div className="flex space-x-4 text-lg">

                <Link to="/login" className="btn btn-primary hover:bg-gray-100 px-2 py-1 rounded-xl">Login</Link>
                <Link to="/signup" className="btn btn-secondary hover:bg-gray-100 px-2 py-1 rounded-xl">Sign Up</Link>
            </div>
        </nav>

        {/* Background Image with Overlay */}
        <div
            className=" z-0 bg-cover bg-center relative bg-white bg-opacity-30 h-screen"
            style={{
                backgroundImage: `url(${background})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            {/* Semi-transparent Overlay */}
            <div className="absolute inset-0 bg-white opacity-40 -z-10"></div>
            <div className="pt-20 bg-white bg-opacity-30 grid grid-cols-2 h-screen gap-8">
                <div className="flex flex-col  items-center bg-white ml-8 mb-8 mt-4 rounded-2xl bg-opacity-70">
                    <div className="text-6xl font-semibold font-serif my-8 ">About Us</div>
                    <div className="p-0 px-6 text-lg font-serif">At NeuroLearn, we are committed to revolutionizing the
                        way education is delivered by harnessing the power of AI through our adaptive learning platform.
                        We believe that every student, regardless of their neurodiversity, deserves a learning
                        environment that understands and caters to their individual needs. Whether a student has ADHD,
                        dyslexia, autism, or any other learning challenge, traditional one-size-fits-all education
                        models often fail to provide the support and flexibility required to help them thrive.
                    </div>
                    <div className="p-4 px-6 text-lg font-serif">
                        Our platform is designed to bridge that gap, offering personalized learning experiences that
                        dynamically adjust to each student’s strengths, weaknesses, pace, and learning style. By using
                        advanced AI technology, we are able to track student progress in real time, delivering tailored
                        content and support that evolves with the learner. This approach ensures that neurodiverse
                        students are not only included in the learning process but are also empowered to excel in ways
                        that suit them best. Our mission is to make education truly inclusive, accessible, and effective
                        for all students, helping them overcome the specific barriers they face and unlocking their full
                        potential.
                    </div>
                </div>
                <div className="grid grid-cols-2  bg-white mr-8 mb-8 mt-4 rounded-2xl bg-opacity-70 p-4">

                    <card
                        className="relative  overflow-hidden flex items-center justify-center text-white"
                        onMouseEnter={() => setIsHovered1(true)}
                        onMouseLeave={() => setIsHovered1(false)}
                    >
                        {/* Initial Content */}
                        <div
                            className={`absolute bg-gray-600 rounded-2xl m-4 text-white inset-0 flex items-center justify-center transition-opacity ease-in-out duration-500 ${
                                isHovered1 ? "opacity-0" : "opacity-100 "
                            }`}
                        >
                            <h2 className=" text-4xl font-semibold font-serif">Our Mission</h2>
                        </div>

                        {/* Hover Content */}
                        <div
                            className={`absolute inset-0 bg-[#ffd1dc] flex rounded-2xl m-4 items-center justify-center transition-opacity ease-in-out duration-500 ${
                                isHovered1 ? "opacity-100 " : "opacity-0"
                            }`}
                        >
                            <h2 className="text-md p-3 text-center text-black font-serif">We strive to empower
                                neurodiverse learners by providing personalized and adaptive educational experiences.
                                Our platform leverages advanced AI technology to tailor learning materials, adjust
                                teaching methods, and support each student’s individual learning style.
                            </h2>
                        </div>
                    </card>
                    <card
                        className="relative  overflow-hidden flex items-center justify-center text-white"
                        onMouseEnter={() => setIsHovered2(true)}
                        onMouseLeave={() => setIsHovered2(false)}
                    >
                        {/* Initial Content */}
                        <div
                            className={`absolute bg-gray-600 rounded-2xl m-4 text-white inset-0 flex items-center justify-center transition-opacity ease-in-out duration-500 ${
                                isHovered2 ? "opacity-0" : "opacity-100 "
                            }`}
                        >
                            <h2 className=" text-4xl font-semibold font-serif">Our Solution</h2>
                        </div>

                        {/* Hover Content */}
                        <div
                            className={`absolute inset-0 bg-[#ffd1dc] flex rounded-2xl m-4 items-center justify-center transition-opacity ease-in-out duration-500 ${
                                isHovered2 ? "opacity-100 " : "opacity-0"
                            }`}
                        >
                            <h2 className="text-md p-3 text-center text-black font-serif">Our adaptive learning platform uses cutting-edge AI to deliver a personalized educational experience. Key features include interactive exercises, multimedia support, real-time progress tracking, and customizable learning paths. By adapting content and feedback in real-time, we ensure that each student receives the support they need to succeed.

                            </h2>
                        </div>
                    </card>
                    <card
                        className="relative  overflow-hidden flex items-center justify-center text-white"
                        onMouseEnter={() => setIsHovered3(true)}
                        onMouseLeave={() => setIsHovered3(false)}
                    >
                        {/* Initial Content */}
                        <div
                            className={`absolute bg-gray-600 rounded-2xl m-4 text-white inset-0 flex items-center justify-center transition-opacity ease-in-out duration-500 ${
                                isHovered3 ? "opacity-0" : "opacity-100 "
                            }`}
                        >
                            <h2 className=" text-4xl font-semibold font-serif">Our Values</h2>
                        </div>

                        {/* Hover Content */}
                        <div
                            className={`absolute inset-0 bg-[#ffd1dc] flex rounded-2xl m-4 items-center justify-center transition-opacity ease-in-out duration-500 ${
                                isHovered3 ? "opacity-100 " : "opacity-0"
                            }`}
                        >
                            <h2 className="text-md p-3 text-center text-black font-serif">Innovation, inclusivity, and integrity are at the heart of our mission. We are committed to continuously improving our platform and making a positive impact on the educational experiences of our users. Our goal is to provide a learning tool that is as dynamic and adaptable as the students we serve.

                            </h2>
                        </div>
                    </card>
                    <card
                        className="relative  overflow-hidden flex items-center justify-center text-white"
                        onMouseEnter={() => setIsHovered4(true)}
                        onMouseLeave={() => setIsHovered4(false)}
                    >
                        {/* Initial Content */}
                        <div
                            className={`absolute bg-gray-600 rounded-2xl m-4 text-white inset-0 flex items-center justify-center transition-opacity ease-in-out duration-500 ${
                                isHovered4 ? "opacity-0" : "opacity-100 "
                            }`}
                        >
                            <h2 className=" text-4xl font-semibold font-serif">Challenges</h2>
                        </div>

                        {/* Hover Content */}
                        <div
                            className={`absolute inset-0 bg-[#ffd1dc] flex rounded-2xl m-4 items-center justify-center transition-opacity ease-in-out duration-500 ${
                                isHovered4 ? "opacity-100 " : "opacity-0"
                            }`}
                        >
                            <h2 className="text-md p-3 text-center text-black font-serif">Traditional educational methods often fall short for students with ADHD, dyslexia, and autism. These students may struggle with focus, reading comprehension, and social interactions. We recognize these challenges and are here to offer a solution that adapts to each student's needs, making learning more accessible and effective.

                            </h2>
                        </div>
                    </card>
                </div>

            </div>

            {/* Footer */}

        </div>

    </div>)
}
export default AboutUs