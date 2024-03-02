import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <section className="relative border-t border-gray  overflow-hidden py-10  bg-white text-gray-700">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap -mx-6">
                    <div className="w-full md:w-1/2 lg:w-5/12 px-6">
                        <div className="flex flex-col justify-between h-full" >
                            <div className="mb-4">
                                <img src="/logo.jpeg" alt="logo" className="w-48  -top-24 -left-14" />
                            </div>
                            <div>
                                <p className="mb-4 text-base font-medium">
                                     The Integrated University Environment.
                                </p>
                                <p className="text-sm text-gray-600">
                                    © Copyright 2023. All Rights Reserved by DeCoderz.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 lg:w-2/12 px-6 mt-10">
                        <div>
                            <h3 className="mb-9 text-xs font-semibold uppercase text-gray-500">
                                Company
                            </h3>
                            <ul>
                                <li className="mb-4">
                                    <Link
                                        to="/"
                                        className="text-base font-medium text-gray-900 hover:text-gray-700"
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/aboutus"
                                        className="text-base font-medium text-gray-900 hover:text-gray-700"
                                    >
                                        About Us
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 lg:w-2/12 px-6 mt-10">
                        <div>
                            <h3 className="mb-9 text-xs font-semibold uppercase text-gray-500">
                                Support
                            </h3>
                            <ul>
                                <li className="mb-4">
                                    <Link 
                                        to="/contactus"
                                        className="text-base font-medium text-gray-900 hover:text-gray-700"
                                    >
                                        Contact Us
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <a
                                        className="text-base font-medium text-gray-900 hover:text-gray-700"
                                        href="mailto:gargirish2020@gmail.com"
                                    >
                                        Mail Us
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 lg:w-3/12 px-6 mt-10">
                        <div>
                            <h3 className="mb-9 text-xs font-semibold uppercase text-gray-500">
                                Legals
                            </h3>
                            <ul>
                                <li className="mb-4">
                                    <Link 
                                        to="/terms"
                                        className="text-base font-medium text-gray-900 hover:text-gray-700"
                                    >
                                        Terms & Conditions
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link 
                                        to="/privacyPolicy"
                                        className="text-base font-medium text-gray-900 hover:text-gray-700"
                                    >
                                        Privacy Policy
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;
