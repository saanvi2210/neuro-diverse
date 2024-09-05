import React from 'react';
import { Link } from 'react-router-dom';
import background from  '../assets/neuroBg.jpg'
import logo from "../assets/logo.jpg"
import p1 from "../assets/p1.jpg"
import p2 from "../assets/p2.jpg"
import p3 from "../assets/p3.jpg"
import p4 from "../assets/p4.jpg"
import image1 from "../assets/lp5.avif"
import image2 from "../assets/lp3.jpg"
import image3 from "../assets/lp2.jpeg.jpg"
export default function LandingPage() {
    return (
        <div className="min-h-screen flex flex-col relative">
            {/* Navbar */}
            <nav className="bg-white z-10 shadow-lg p-4 fixed w-full flex justify-between items-center z-10">
                <div className="flex items-center">
                    <img src={logo} alt="Logo" className="h-8 w-8 mr-2"/> {/* Your logo */}
                    <h1 className="text-2xl font-bold text-gray-800">NeuroLearn</h1> {/* App name */}
                </div>
                <div className="flex space-x-4 text-lg">
                    <Link to="/" className="text-gray-600 hover:text-gray-800 font-bold hover:bg-gray-100 px-2 py-1 rounded-xl ">Home</Link>
                    <Link to="/about" className="text-gray-600 hover:text-gray-800 hover:bg-gray-100 px-2 py-1 rounded-xl">About Us</Link>
                    <Link to="/about" className="text-gray-600 hover:text-gray-800 hover:bg-gray-100 px-2 py-1 rounded-xl">Features</Link>
                    <Link to="/" className="text-gray-600 hover:text-gray-800 hover:bg-gray-100 px-2 py-1 rounded-xl">Contact Us</Link>

                </div>
                <div className="flex space-x-4 text-lg">

                    <Link to="/signup/login" className="btn btn-primary hover:bg-gray-100 px-2 py-1 rounded-xl">Login</Link>
                    <Link to="/signup" className="btn btn-secondary hover:bg-gray-100 px-2 py-1 rounded-xl">Sign Up</Link>
                </div>
            </nav>

            {/* Background Image with Overlay */}
            <div
                className=" z-0 bg-cover bg-center relative bg-white bg-opacity-30"
                style={{
                    backgroundImage: `url(${background})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                {/* Semi-transparent Overlay */}
                <div className="absolute inset-0 bg-white opacity-40 -z-10"></div>
                <div className="pt-20 bg-white bg-opacity-30">
                    <div
                        className="relative p-10 text-center">
                        <h1 className="text-6xl font-semibold font-serif mb-4 text-gray-900">Welcome to NeuroLearn</h1>
                        <p className="text-2xl mb-8 text-gray-700 font-serif">
                            Revolutionizing Learning for Neurodiverse Students
                        </p>

                    </div>
                </div>
                <div className="grid grid-cols-2 bg-white bg-opacity-30 gap-y-6">
                    <div className="flex items-center justify-center "><img className="rounded-xl" src={image1} alt=""
                                                                            height={200} width={400}/></div>
                    <div className="flex items-center justify-center text-xl px-6 font-serif font-semibold">At Neuro
                        Learn, we believe that every student deserves an education tailored to their unique learning
                        style. Our AI-powered adaptive learning platform is designed specifically for neurodiverse
                        students, including those with ADHD, dyslexia, autism, and other learning differences. We are
                        committed to creating an inclusive learning environment where all students can thrive.

                    </div>

                    <div className="flex items-center justify-center text-xl px-12 font-serif font-semibold">At Neuro
                        Learn, we believe that every student deserves an education tailored to their unique learning
                        style. Our AI-powered adaptive learning platform is designed specifically for neurodiverse
                        students, including those with ADHD, dyslexia, autism, and other learning differences. We are
                        committed to creating an inclusive learning environment where all students can thrive.
                    </div>
                    <div className="flex items-center justify-center "><img className="rounded-xl" src={image2} alt=""
                                                                            height={200} width={400}/></div>
                    <div className="flex items-center justify-center "><img className="rounded-xl" src={image3} alt=""
                                                                            height={200} width={400}/></div>
                    <div className="flex items-center justify-center text-xl px-6 font-serif font-semibold">At Neuro
                        Learn, we believe that every student deserves an education tailored to their unique learning
                        style. Our AI-powered adaptive learning platform is designed specifically for neurodiverse
                        students, including those with ADHD, dyslexia, autism, and other learning differences. We are
                        committed to creating an inclusive learning environment where all students can thrive.
                    </div>
                </div>
                <section className="py-16 bg-white bg-opacity-30 flex justify-between px-10 gap-4">
                    <card class="bg-white rounded-xl flex flex-col justify-center items-center p-5">

                            <img src={p4} alt=""   className= "rounded-full object-cover h-40 w-40"/>
                            <h1 className="text-center my-2 text-xl font-semibold">Liam Johnson</h1>


                        <div>"Before I started using [App Name], reading was really hard for me. I would get tired and
                            frustrated because I couldn't keep up with the text. But now, the app reads the text out
                            loud for me, and I can follow along with the highlights. The games and exercises help me
                            practice my reading skills in a fun way, and I can see how much better I’m getting. The app
                            has made reading so much easier, and I actually enjoy it now!"
                        </div>
                    </card>
                    <card class="bg-white rounded-xl p-5 flex flex-col justify-center items-center">
                        <img src={p2} alt="" className="h-40 w-40 rounded-full object-cover"/>
                        <h1 className="text-center my-2 text-xl font-semibold">Noah Smith</h1>
                        <div>"I have trouble staying focused in class and remembering what I need to do. [App Name] has
                            been great for me because it helps me stay organized and on track. I love the interactive
                            lessons and how it breaks things down into small steps. The app even lets me choose how I
                            want to learn, which helps me stay interested. It’s like having a teacher who understands
                            exactly how I learn best!"

                        </div>
                    </card>
                    <card class="bg-white rounded-xl p-5 flex flex-col justify-center items-center">
                        <img src={p3} alt="" className="h-40 w-40 rounded-full object-cover"/>
                        <h1 className="text-center my-2 text-xl font-semibold">James Davis</h1>
                        <div>
                            "Using [App Name] has been a game-changer for me. I have trouble with social skills and
                            understanding what people mean sometimes. The app’s social stories and role-playing
                            exercises have really helped me understand social situations better. I also like how the app
                            gives me feedback on how I’m doing and helps me practice new skills. It’s made learning
                            about social interactions much easier and less stressful."

                        </div>
                    </card>
                    <card class="bg-white rounded-xl p-5 flex flex-col justify-center items-center">
                        <img src={p1} alt="" className="h-40 w-40 rounded-full object-cover"/>
                        <h1 className="text-center my-2 text-xl font-semibold">William Wilson</h1>
                        <div>
                            "I used to get so anxious about changes in my schoolwork, but [App Name] helps me feel more in control. The app’s structured lessons and predictable routines make me feel calm and focused. I also love the visual aids and the way the app helps me practice new skills through interactive activities. It’s really helpful and makes learning less stressful for me."


                        </div>
                    </card>

                </section>
                {/* Footer */}
                <footer className="bg-gray-800 text-white py-6">
                    <div className="container mx-auto px-4 text-center">
                        <p className="mb-4">Contact us at: <a href="mailto:contact@neurolearn.com"
                                                              className="text-blue-400 hover:underline">contact@neurolearn.com</a>
                        </p>
                        <p className="mb-4">Follow us on social media:</p>
                        <div className="flex justify-center space-x-4">
                            <a href="#" className="text-blue-400 hover:underline">Facebook</a>
                            <a href="#" className="text-blue-400 hover:underline">Twitter</a>
                            <a href="#" className="text-blue-400 hover:underline">Instagram</a>
                        </div>
                        <p className="mt-4 text-sm">© 2024 NeuroLearn. All rights reserved.</p>
                    </div>
                </footer>
            </div>

        </div>
    );
}
