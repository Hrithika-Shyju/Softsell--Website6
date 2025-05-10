import React from 'react';
import { FaShieldAlt, FaUsers, FaChartLine, FaHandshake } from 'react-icons/fa'; // Example icons

function WhyChooseUs() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">Why Choose SoftSell?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 rounded-md shadow-md">
            <div className="text-green-600 text-4xl mb-4">
              <FaShieldAlt />
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Secure Transactions</h3>
            <p className="text-gray-600">We ensure a safe and reliable environment for all transactions.</p>
          </div>
          <div className="p-6 rounded-md shadow-md">
            <div className="text-blue-600 text-4xl mb-4">
              <FaUsers />
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Large Network</h3>
            <p className="text-gray-600">Connect with a wide range of potential buyers and sellers.</p>
          </div>
          <div className="p-6 rounded-md shadow-md">
            <div className="text-yellow-600 text-4xl mb-4">
              <FaChartLine />
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Fair Valuation</h3>
            <p className="text-gray-600">Our transparent process ensures you get the best possible value.</p>
          </div>
          <div className="p-6 rounded-md shadow-md">
            <div className="text-purple-600 text-4xl mb-4">
              <FaHandshake />
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Easy Process</h3>
            <p className="text-gray-600">A streamlined process from listing to receiving payment.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;