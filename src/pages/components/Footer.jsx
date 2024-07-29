import React from 'react';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-center space-x-4 mb-4">
          <a href="#" className="hover:text-blue-400"><Facebook /></a>
          <a href="#" className="hover:text-blue-400"><Twitter /></a>
          <a href="#" className="hover:text-blue-400"><Instagram /></a>
          <a href="#" className="hover:text-blue-400"><Youtube /></a>
        </div>
        <p className="text-center">
          © 2023 Man-Powered Submarine Performance. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;