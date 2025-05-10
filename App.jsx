import React from 'react';
import HeroSection from './components/HeroSection';
import HowItWorks from './components/HowItWorks';
import WhyChooseUs from './components/WhyChooseUs';
import CustomerTestimonials from './components/CustomerTestimonials';
import ContactForm from './components/ContactForm';
// import Footer from './components/Footer'; // If you create one
import './index.css'; // Or your global styles file

function App() {
  return (
    <div>
      <HeroSection />
      <HowItWorks />
      <WhyChooseUs />
      <CustomerTestimonials />
      <ContactForm />
      {/* <Footer /> */}
    </div>
  );
}

export default App;