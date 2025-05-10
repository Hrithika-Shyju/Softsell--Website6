import React from 'react';
import { FaUpload, FaSearchDollar, FaMoneyBillWave } from 'react-icons/fa'; // Example icons

function HowItWorks() {
  return (
    <section className="py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-md shadow-md">
            <div className="text-indigo-600 text-4xl mb-4">
              <FaUpload />
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Upload License</h3>
            <p className="text-gray-600">Easily submit the details of the software license you want to sell.</p>
          </div>
          <div className="p-6 rounded-md shadow-md">
            <div className="text-indigo-600 text-4xl mb-4">
              <FaSearchDollar />
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Get Valuation</h3>
            <p className="text-gray-600">Receive a fair and transparent valuation based on market demand.</p>
          </div>
          <div className="p-6 rounded-md shadow-md">
            <div className="text-indigo-600 text-4xl mb-4">
              <FaMoneyBillWave />
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Get Paid</h3>
            <p className="text-gray-600">Once your license is sold, receive secure and prompt payment.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;