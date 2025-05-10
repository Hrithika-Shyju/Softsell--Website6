import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Sun, Moon } from "lucide-react";

export default function SoftSellPage() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark bg-gray-900 text-white" : "bg-white text-black"}>
      {/* Toggle */}
      <div className="p-4 flex justify-end">
        <Button onClick={() => setDarkMode(!darkMode)} variant="outline">
          {darkMode ? <Sun /> : <Moon />}
        </Button>
      </div>

      {/* Hero Section */}
      <section className="text-center py-20 px-4">
        <h1 className="text-4xl font-bold mb-4">Turn Unused Software Into Cash</h1>
        <p className="text-lg mb-6">Sell your old licenses in minutes. Fast, secure, and hassle-free.</p>
        <Button>Get a Free Quote</Button>
      </section>

      {/* How It Works */}
      <section className="py-16 px-6 grid md:grid-cols-3 gap-6 text-center">
        {[
          { title: "Upload License", icon: "⬆" },
          { title: "Get Instant Valuation", icon: "💰" },
          { title: "Get Paid", icon: "✅" },
        ].map((step, i) => (
          <Card key={i}>
            <CardContent className="p-6">
              <div className="text-4xl mb-2">{step.icon}</div>
              <h3 className="text-xl font-semibold">{step.title}</h3>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-100 dark:bg-gray-800 py-16 px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: "Verified Buyers", desc: "Safe and trusted resale partners." },
          { title: "Fast Payments", desc: "Payouts within 48 hours." },
          { title: "Secure Process", desc: "Encrypted and compliant transactions." },
          { title: "Zero Hidden Fees", desc: "Transparent from start to finish." },
        ].map((feature, i) => (
          <Card key={i}>
            <CardContent className="p-6">
              <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
              <p>{feature.desc}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-2xl font-bold mb-8">What Our Customers Say</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { name: "Sarah L.", role: "IT Manager", company: "TechCorp", quote: "SoftSell helped us recover value from unused assets effortlessly." },
            { name: "James T.", role: "Procurement Head", company: "FinEdge", quote: "The process was smooth and transparent. Highly recommend!" },
          ].map((review, i) => (
            <Card key={i}>
              <CardContent className="p-6">
                <p className="italic mb-2">"{review.quote}"</p>
                <p className="font-semibold">- {review.name}, {review.role}, {review.company}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-gray-100 dark:bg-gray-800 py-16 px-6">
        <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>
        <form className="max-w-xl mx-auto grid gap-4">
          <Input placeholder="Name" required />
          <Input type="email" placeholder="Email" required />
          <Input placeholder="Company" required />
          <select className="p-2 rounded border dark:bg-gray-700" required>
            <option value="">Select License Type</option>
            <option value="Microsoft">Microsoft</option>
            <option value="Adobe">Adobe</option>
            <option value="Autodesk">Autodesk</option>
          </select>
          <Textarea placeholder="Message" required />
          <Button type="submit">Send Message</Button>
        </form>
      </section>

      {/* Footer */}
      <footer className="text-center p-6 text-sm text-gray-500 dark:text-gray-400">
        &copy; 2025 SoftSell. All rights reserved.
      </footer>
    </div>
  );
}
