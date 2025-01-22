import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Hero from "./components/Hero.jsx";
import About from "./pages/About";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import Support from "./pages/Support";
import SignUp from './components/SignUp'; // Corrected the import to match the component name

const App = () => {
  const location = useLocation();

  // Check if the current route is the signup page
  const isSignUpPage = location.pathname === "/signup"; // Corrected the path

  return (
    <div>
      {!isSignUpPage && <Navbar />}
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/support" element={<Support />} />
        <Route path="/signup" element={<SignUp />} /> {/* Corrected the component name */}
      </Routes>
      {!isSignUpPage && <Footer />}
      {!isSignUpPage && (
        <div className="text-center text-white bg-[#152F46]">
          Copyright © 2025 Sapphire, All rights reserved.
        </div>
      )}
    </div>
  );
};

export default App;
