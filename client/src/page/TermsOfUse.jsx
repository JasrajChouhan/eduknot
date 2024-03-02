import React from 'react';


const TermsOfUse = () => {
  return (
    
    <div className="bg-white min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">Terms of Use</h1>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">General Conditions</h2>
            <p className="text-gray-600">By accessing and using our website, you agree to comply with the following general conditions. We reserve the right to modify these terms at any time without prior notice.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">License to Use Website</h2>
            <p className="text-gray-600">Unless otherwise stated, we and/or our licensors own the intellectual property rights for all material on the website. Subject to the license below, all these intellectual property rights are reserved.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Acceptable Use</h2>
            <p className="text-gray-600">You must not use this website in any way that causes, or may cause, damage to the website or impairment of the availability or accessibility of the website.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">User Content</h2>
            <p className="text-gray-600">In these terms of use, “your user content” means material (including without limitation text, images, audio material, video material, and audio-visual material) that you submit to this website.</p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default TermsOfUse;
