import React from "react";

const Services = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-bold mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            "Technology Solution",
            "IT Service",
            "Web & App Design",
            "Data Tracking Security",
          ].map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-md p-6 text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 text-2xl">&#9656;</span>
              </div>
              <h3 className="font-bold text-lg mb-2">{service}</h3>
              <p className="text-gray-600">
                Developing a comprehensive IT strategy that aligns.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
