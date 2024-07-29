import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <form className="space-y-4">
              <Input placeholder="Name" />
              <Input type="email" placeholder="Email" />
              <Textarea placeholder="Message" rows={4} />
              <Button type="submit" className="w-full">Send Message</Button>
            </form>
          </div>
          <div className="md:w-1/2">
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <p className="mb-2">Email: info@subperformance.com</p>
            <p className="mb-2">Phone: +1 (123) 456-7890</p>
            <p>Address: 123 Ocean Drive, Marine City, MC 12345</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;