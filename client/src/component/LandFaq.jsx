import React, { useState } from 'react';
const LandFaq = () => {
    return (
        <>
            <section className=" mx-8 px-2">
                <div className="mx-auto max-w-7xl py-10">
                    <div>
                        <div className="max-w-2xl">
                            <h1 className=" text-left text-2xl font-bold text-black">
                                Frequently Asked Questions
                            </h1>
                            <p className="mt-4  text-left  text-sm leading-6 tracking-wide text-gray-500">
                                This FAQ section serves as a means to address common inquiries. Should you have any further questions or require assistance with a different matter, please don't hesitate to expand the section and reach out to us. We are here to provide you with the support and information you need.
                                <br/>
                                <a className= "font-bold" href =""> Contact us for Other Query</a>
                            </p>
                        </div>
                        <div className="mt-6 grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
                            <div className="rounded-md border border-black/30 p-6">
                                <dt className="text-lg font-semibold leading-6 text-gray-900 text-left">
                                    How do I get started?
                                </dt>
                                <dd className="mt-2 text-sm text-gray-500 text-left">
                                    Please proceed to the form and complete the required fields. Once you've entered the necessary information, you'll be ready to proceed. Thank you for your cooperation.
                                </dd>
                            </div>
                            <div className="rounded-md border border-black/30 p-6">
                                <dt className="text-lg font-semibold leading-6 text-gray-900 text-left">
                                    Are you Secure with us ?
                                </dt>
                                <dd className="mt-2 text-sm text-gray-500 text-left" >
                                    As an affiliate of our university,
                                    it is imperative to underscore that all data transactions adhere strictly to
                                    regulatory guidelines. Rest assured, we treat your data with utmost care,
                                    mirroring the meticulous attention we dedicate to our own.
                                </dd>
                            </div>
                            <div className="rounded-md border border-black/30 p-6">
                                <dt className="text-lg text-left font-semibold leading-6 text-gray-900">
                                    What we do?
                                </dt>
                                <dd className="mt-2 text-sm text-gray-500 text-left" >
                                   We provide a comprehensive solution for addressing the doubts and inquiries of university students. Our platform serves as a centralized hub, seamlessly integrating with all university systems into one cohesive platform.
                                </dd>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}
export default LandFaq;