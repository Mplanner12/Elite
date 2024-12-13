import React from "react";

const Hero = () => {
  return (
    <section
      className="bg-cover bg-center h-screen flex items-center justify-center"
      style={{ backgroundImage: "url(/hero-bg.jpg)" }}
    >
      <div className="text-center">
        <span className="text-purple-600 font-semibold">
          We’re 100% Trusted Agency
        </span>
        <h2 className="text-4xl font-bold my-4">
          Bridging the Gap in Your IT Solutions
        </h2>
        <p className="text-gray-700 mb-6">
          The goal of IT services is to provide efficient and effective
          technology solutions that help businesses achieve their objectives.
        </p>
        <div className="space-x-4">
          <button className="bg-purple-600 text-white px-6 py-3 rounded-md">
            Get Started
          </button>
          <button className="bg-gray-200 text-gray-700 px-6 py-3 rounded-md">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
