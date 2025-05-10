import React from 'react';

function CustomerTestimonials() {
  const testimonials = [
    {
      name: 'Alice Johnson',
      role: 'IT Manager',
      company: 'Tech Solutions Inc.',
      review: 'SoftSell made selling our unused licenses incredibly easy and fast. Highly recommended!',
    },
    {
      name: 'Bob Williams',
      role: 'Finance Director',
      company: 'Global Corp.',
      review: 'We found great value purchasing licenses through SoftSell. A cost-effective solution.',
    },
  ];

  return (
    <section className="py-16 bg-gray-200">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">Customer Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-md shadow-md">
              <p className="text-gray-700 italic mb-4">"{testimonial.review}"</p>
              <div className="font-semibold text-gray-800">{testimonial.name}</div>
              <div className="text-gray-600 text-sm">{testimonial.role}, {testimonial.company}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CustomerTestimonials;