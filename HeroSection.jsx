import React from 'react';

function HeroSection() {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Unlock the Value of Your Unused Software Licenses
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          SoftSell provides a seamless and secure platform to resell your surplus software
          licenses or find cost-effective options.
        </p>
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-full">
          Get a Quote
        </button>
      </div>
    </section>
  );
}

export default HeroSection;