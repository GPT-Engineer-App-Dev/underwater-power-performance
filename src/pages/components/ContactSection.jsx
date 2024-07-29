import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
        <div className="max-w-md mx-auto">
          <form className="space-y-4">
            <Input type="text" placeholder="Name" />
            <Input type="email" placeholder="Email" />
            <Textarea placeholder="Message" />
            <Button type="submit" className="w-full">Send Message</Button>
          </form>
          <div className="mt-8 text-center">
            <p>Email: info@subperformance.com</p>
            <p>Phone: +1 (123) 456-7890</p>
            <p>Address: 123 Ocean Street, Submarine City, SC 12345</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;