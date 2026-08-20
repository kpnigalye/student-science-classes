import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-blue-950 to-blue-900 text-white py-10">
      <div className="container mx-auto px-4 text-center space-y-3">
        <h3 className="text-xl font-bold mb-5">Contact Us</h3>
        <p className="text-blue-200">📧 studentsclasseschembur@gmail.com</p>
        <p className="text-blue-200">📞 +91 8097740318 / +91 9136596326</p>
        <p className="text-blue-200">
          🏢 First floor, Rajashri building, N.G. Acharya Road, Near Royal Orchid hotel, Chembur (E), Mumbai - 400071
        </p>
        <div className="pt-4 mt-4 border-t border-blue-800 flex flex-col sm:flex-row justify-center items-center gap-4">
          <p className="text-blue-400 text-sm">© {new Date().getFullYear()} Students' Classes. All rights reserved.</p>
          <Link to="/privacy" className="text-blue-400 text-sm hover:text-white transition-colors">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};
