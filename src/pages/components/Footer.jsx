import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-center space-x-4 mb-4">
          <Facebook className="w-6 h-6" />
          <Twitter className="w-6 h-6" />
          <Instagram className="w-6 h-6" />
          <Youtube className="w-6 h-6" />
        </div>
        <p className="text-center">
          © 2023 Man-Powered Submarine Performance. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;