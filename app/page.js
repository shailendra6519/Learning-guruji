import Image from "next/image";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <div className="bg-brand-background text-brand-text antialiased container">
        {/* <!-- Header --> */}
        <nav className="bg-white/90 backdrop-blur-md shadow-lg fixed w-full z-50 top-0 start-0 border-b border-gray-200">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <i className="fas fa-brain text-2xl bg-gradient-to-r from-indigo-600 to-purple-500 gradient-text"></i>
                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-gray-800">Learning-Guruji <span
                            className="bg-gradient-to-r from-indigo-600 to-purple-500 gradient-text">AI</span></span>
                </a>
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <Link href={'./workspace'}>
                    <button type="button"
                        className="text-white bg-gradient-to-r from-indigo-600 to-purple-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                        Get Started Free
                    </button></Link>
                    <button data-collapse-toggle="navbar-sticky" type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                        aria-controls="navbar-sticky" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <img src="logo2.svg" alt="" />
                    </button>
                </div>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul
                        className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50/50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">
                        <li><a href="#hero"
                                className="block py-2 px-3 text-gray-700 rounded hover:bg-indigo-100 md:hover:bg-transparent md:hover:text-indigo-600 md:p-0">Home</a>
                        </li>
                        <li><a href="#features"
                                className="block py-2 px-3 text-gray-700 rounded hover:bg-indigo-100 md:hover:bg-transparent md:hover:text-indigo-600 md:p-0">Features</a>
                        </li>
                        <li><a href="#testimonials"
                                className="block py-2 px-3 text-gray-700 rounded hover:bg-indigo-100 md:hover:bg-transparent md:hover:text-indigo-600 md:p-0">Testimonials</a>
                        </li>
                        <li><a href="#footer"
                                className="block py-2 px-3 text-gray-700 rounded hover:bg-indigo-100 md:hover:bg-transparent md:hover:text-indigo-600 md:p-0">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        {/* <!-- Hero Section --> */}
        <section id="hero" className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-cover bg-center bg-no-repeat">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/80 via-purple-500/70 to-teal-400/60"></div>
            <div className="container mx-auto px-6 text-center relative z-10">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6">
                    Unlock Your Potential with <span
                        className="bg-gradient-to-r from-teal-300 to-purple-300 gradient-text">AI-Powered Learning</span> 🚀
                </h1>
                <p className="text-lg md:text-xl text-indigo-100 max-w-3xl mx-auto mb-10">
                    Learning-Guruji AI offers personalized learning paths, intelligent tutoring, and cutting-edge resources
                    to help you master new skills faster than ever.
                </p>
                <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
                    <a href="#features"
                        className="text-white bg-gradient-to-r from-teal-400 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 font-semibold rounded-lg text-lg px-8 py-3.5 text-center shadow-lg transform hover:scale-105 transition-transform duration-150">
                        Explore Features
                    </a>
                    <a href="#"
                        className="text-indigo-100 bg-white/20 backdrop-blur-sm border border-indigo-300 hover:bg-white/30 focus:ring-4 focus:outline-none focus:ring-indigo-200 font-semibold rounded-lg text-lg px-8 py-3.5 text-center shadow-lg transform hover:scale-105 transition-transform duration-150">
                        Learn More
                    </a>
                </div>
            </div>
        </section>

        {/* <!-- Feature Showcase Section --> */}
        <section id="features" className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-indigo-100">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Why Learning-Guruji AI is Your Smartest
                        Choice ✨</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">Discover features designed to accelerate your
                        learning and help you achieve your goals.</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* <!-- Feature Card 1 --> */}
                    <div
                        className="bg-white rounded-xl shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out group">
                        <div
                            className="relative h-48 bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                            <i
                                className="fas fa-route text-6xl text-white opacity-80 group-hover:opacity-100 transition-opacity"></i>
                            <img src="card1.webp"alt="Personalized Learning Paths" className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-opacity"/>
                        </div>
                        <div className="p-6 md:p-8">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-3">Personalized Learning Paths 🗺️</h3>
                            <p className="text-gray-600 leading-relaxed">AI algorithms adapt to your learning style and
                                pace, creating a unique educational journey just for you.</p>
                        </div>
                        <div className="p-6 pt-0">
                            <a href="#"
                                className="font-medium text-indigo-600 hover:text-indigo-800 group-hover:underline">Learn
                                more <i
                                    className="fas fa-arrow-right ml-1 transform group-hover:translate-x-1 transition-transform"></i></a>
                        </div>
                    </div>
                    {/* <!-- Feature Card 2 --> */}
                    <div
                        className="bg-white rounded-xl shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out group">
                        <div
                            className="relative h-48 bg-gradient-to-br from-purple-500 to-teal-500 flex items-center justify-center">
                            <i
                                className="fas fa-brain text-6xl text-white opacity-80 group-hover:opacity-100 transition-opacity"></i>
                            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=60&amp;blend=000000&amp;blend-alpha=30&amp;blend-mode=multiply"
                                alt="Intelligent Tutoring System"   
                                className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-opacity"/>
                        </div>
                        <div className="p-6 md:p-8">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-3">Intelligent Tutoring System 🧠</h3>
                            <p className="text-gray-600 leading-relaxed">Get instant feedback, hints, and support from our
                                AI tutors, available 24/7 to guide you.</p>
                        </div>
                        <div className="p-6 pt-0">
                            <a href="#"
                                className="font-medium text-purple-600 hover:text-purple-800 group-hover:underline">Learn
                                more <i
                                    className="fas fa-arrow-right ml-1 transform group-hover:translate-x-1 transition-transform"></i></a>
                        </div>
                    </div>
                    {/* <!-- Feature Card 3 --> */}
                    <div
                        className="bg-white rounded-xl shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out group md:col-span-2 lg:col-span-1">
                        <div
                            className="relative h-48 bg-gradient-to-br from-teal-500 to-indigo-500 flex items-center justify-center">
                            <i
                                className="fas fa-chart-line text-6xl text-white opacity-80 group-hover:opacity-100 transition-opacity"></i>
                            <img src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=60&amp;blend=000000&amp;blend-alpha=30&amp;blend-mode=multiply"
                                alt="Real-time Progress Tracking"
                                className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-opacity/"/>
                        </div>
                        <div className="p-6 md:p-8">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-3">Real-time Progress Tracking 📊</h3>
                            <p className="text-gray-600 leading-relaxed">Monitor your achievements, identify areas for
                                improvement, and stay motivated with comprehensive analytics.</p>
                        </div>
                        <div className="p-6 pt-0">
                            <a href="#"
                                className="font-medium text-teal-600 hover:text-teal-800 group-hover:underline">Learn more
                                <i
                                    className="fas fa-arrow-right ml-1 transform group-hover:translate-x-1 transition-transform"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* <!-- Testimonials Section --> */}
        <section id="testimonials" className="py-16 md:py-24 bg-gradient-to-b from-indigo-100 to-purple-100">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Loved by Learners Worldwide ❤️</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">See what our students are saying about their
                        learning journey with Learning-Guruji AI.</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* <!-- Testimonial Card 1 --> */}
                    <div
                        className="bg-white p-8 rounded-xl shadow-xl border-t-4 border-indigo-500 hover:shadow-2xl transition-shadow duration-300">
                        <div className="flex items-center mb-6">
                            <img className="w-16 h-16 rounded-full mr-4 object-cover"
                                src="https://static.vecteezy.com/system/resources/thumbnails/005/346/410/small_2x/close-up-portrait-of-smiling-handsome-young-caucasian-man-face-looking-at-camera-on-isolated-light-gray-studio-background-photo.jpg"
                                alt="Alex Johnson"/>
                            <div>
                                <h4 className="text-xl font-semibold text-gray-800">Alex Johnson</h4>
                                <p className="text-gray-500">Software Developer</p>
                            </div>
                        </div>
                        <p className="text-gray-600 mb-4 leading-relaxed">"Learning-Guruji AI has revolutionized how I learn.
                            The personalized paths are incredible, and I've picked up new skills much faster than I
                            thought possible!"</p>
                        <div className="flex items-center">
                            <i className="fas fa-star text-yellow-400"></i>
                            <i className="fas fa-star text-yellow-400"></i>
                            <i className="fas fa-star text-yellow-400"></i>
                            <i className="fas fa-star text-yellow-400"></i>
                            <i className="fas fa-star text-yellow-400"></i>
                            <span className="ml-2 text-sm text-gray-500">5.0 Rating</span>
                        </div>
                    </div>
                    {/* <!-- Testimonial Card 2 --> */}
                    <div
                        className="bg-white p-8 rounded-xl shadow-xl border-t-4 border-purple-500 hover:shadow-2xl transition-shadow duration-300">
                        <div className="flex items-center mb-6">
                            <img className="w-16 h-16 rounded-full mr-4 object-cover"
                                src="https://static.vecteezy.com/system/resources/thumbnails/005/346/410/small_2x/close-up-portrait-of-smiling-handsome-young-caucasian-man-face-looking-at-camera-on-isolated-light-gray-studio-background-photo.jpg"
                                alt="Maria Rodriguez"/>
                            <div>
                                <h4 className="text-xl font-semibold text-gray-800">Maria Rodriguez</h4>
                                <p className="text-gray-500">UX Designer</p>
                            </div>
                        </div>
                        <p className="text-gray-600 mb-4 leading-relaxed">"The AI tutor is a game-changer. It's like having
                            a personal mentor available 24/7. The interactive projects are also super engaging."</p>
                        <div className="flex items-center">
                            <i className="fas fa-star text-yellow-400"></i>
                            <i className="fas fa-star text-yellow-400"></i>
                            <i className="fas fa-star text-yellow-400"></i>
                            <i className="fas fa-star text-yellow-400"></i>
                            <i className="fas fa-star-half-alt text-yellow-400"></i>
                            <span className="ml-2 text-sm text-gray-500">4.5 Rating</span>
                        </div>
                    </div>
                    {/* <!-- Testimonial Card 3 --> */}
                    <div
                        className="bg-white p-8 rounded-xl shadow-xl border-t-4 border-teal-500 hover:shadow-2xl transition-shadow duration-300 md:col-span-2 lg:col-span-1">
                        <div className="flex items-center mb-6">
                            <img className="w-16 h-16 rounded-full mr-4 object-cover"
                                src="https://static.vecteezy.com/system/resources/thumbnails/005/346/410/small_2x/close-up-portrait-of-smiling-handsome-young-caucasian-man-face-looking-at-camera-on-isolated-light-gray-studio-background-photo.jpg"
                                alt="David Kim"/>
                            <div>
                                <h4 className="text-xl font-semibold text-gray-800">David Kim</h4>
                                <p className="text-gray-500">Data Scientist Student</p>
                            </div>
                        </div>
                        <p className="text-gray-600 mb-4 leading-relaxed">"The platform's analytics helped me understand my
                            weak points and focus my efforts. My confidence and skills have grown immensely."</p>
                        <div className="flex items-center">
                            <i className="fas fa-star text-yellow-400"></i>
                            <i className="fas fa-star text-yellow-400"></i>
                            <i className="fas fa-star text-yellow-400"></i>
                            <i className="fas fa-star text-yellow-400"></i>
                            <i className="fas fa-star text-yellow-400"></i>
                            <span className="ml-2 text-sm text-gray-500">5.0 Rating</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* <!-- Footer --> */}
        <footer id="footer" className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-gray-300">
            <div className="container mx-auto px-6 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    <div>
                        <a href="#" className="flex items-center space-x-2 mb-4">
                            <i
                                className="fas fa-brain text-3xl bg-gradient-to-r from-indigo-400 to-purple-400 gradient-text"></i>
                            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Learning-Guruji
                                <span
                                    className="bg-gradient-to-r from-indigo-400 to-purple-400 gradient-text"> AI</span></span>
                        </a>
                        <p className="text-gray-400 text-sm">Empowering learners through intelligent technology and
                            personalized education. Join us and transform your future.</p>
                    </div>
                    <div>
                        <h5 className="text-lg font-semibold text-white mb-4">Quick Links</h5>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-indigo-400 transition-colors">About Us</a></li>
                            <li><a href="#features" className="hover:text-indigo-400 transition-colors">Features</a></li>
                            <li><a href="#" className="hover:text-indigo-400 transition-colors">Courses</a></li>
                            <li><a href="#" className="hover:text-indigo-400 transition-colors">Blog</a></li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="text-lg font-semibold text-white mb-4">Resources</h5>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-purple-400 transition-colors">Help Center</a></li>
                            <li><a href="#" className="hover:text-purple-400 transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-purple-400 transition-colors">Terms of Service</a></li>
                            <li><a href="#" className="hover:text-purple-400 transition-colors">Contact Us</a></li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="text-lg font-semibold text-white mb-4">Connect With Us</h5>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors text-2xl"><i
                                    className="fab fa-facebook-f"></i></a>
                            <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors text-2xl"><i
                                    className="fab fa-twitter"></i></a>
                            <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors text-2xl"><i
                                    className="fab fa-linkedin-in"></i></a>
                            <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors text-2xl"><i
                                    className="fab fa-instagram"></i></a>
                        </div>
                        <p className="mt-4 text-sm text-gray-500">123 Learning Lane, <br/>Future City, World 54321</p>
                        <p className="mt-2 text-sm text-gray-500">Email: <a href="mailto:info@Learning-Guruji.ai"
                                className="hover:text-teal-400">info@Learning-Guruji.ai</a></p>
                    </div>
                </div>
                <div className="border-t border-gray-700 pt-8 text-center">
                    <p className="text-sm text-gray-500">© 2025 Learning-Guruji AI. All rights reserved. Learning
                        intelligently, beyond boundaries.</p>
                </div>
            </div>
        </footer>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js"></script>


    </div>

    </>

  );
}
