import React from 'react';
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-white">
      <img src="/placeholder.svg" alt="Man-powered submarine" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center">
        <h1 className="text-5xl font-bold mb-4">Explore the Depths with Human Power</h1>
        <p className="text-xl mb-8">Discover the incredible performance of man-powered submarines</p>
        <Button size="lg" onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}>
          Learn More
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;