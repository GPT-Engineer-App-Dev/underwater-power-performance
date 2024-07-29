const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img
              src="/placeholder.svg"
              alt="Team or submarine in action"
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <p className="text-lg mb-4">
              Our team of passionate engineers and divers is dedicated to pushing the boundaries
              of human-powered underwater exploration. We design, build, and test cutting-edge
              man-powered submarines to achieve new levels of performance and efficiency.
            </p>
            <p className="text-lg">
              Our mission is to inspire innovation in underwater technology and promote
              sustainable exploration of the world's oceans.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;