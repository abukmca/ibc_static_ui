// App.js

import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Welcome to InomeTax Filing Firm</h1>
        <p>Your trusted partner in income tax filing</p>
      </header>
      <main>
        <section id="services">
          <h2>Our Services</h2>
          <ul>
            <li>Tax preparation</li>
            <li>Tax filing</li>
            <li>Tax consulting</li>
          </ul>
        </section>
        <section id="testimonials">
          <h2>Testimonials</h2>
          <div className="testimonial">
            <p>"InomeTax Filing Firm made tax filing a breeze. Highly recommended!"</p>
            <span>- John Doe</span>
          </div>
          <div className="testimonial">
            <p>"Professional service with quick turnaround. Will use again next year!"</p>
            <span>- Jane Smith</span>
          </div>
        </section>
        <section id="contact">
          <h2>Contact Us</h2>
          <p>For inquiries or to schedule an appointment, please contact us:</p>
          <ul>
            <li>Email: info@inometax.com</li>
            <li>Phone: 123-456-7890</li>
            <li>Address: 123 Main Street, City, State, ZIP</li>
          </ul>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 InomeTax Filing Firm. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
