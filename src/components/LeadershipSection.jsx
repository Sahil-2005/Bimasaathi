import React from "react";
import lahuImg from "../assets/team/lahu.jpg";

const Leader = ({ name, title, bio, imageUrl }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      
      {/* Text Content */}
      <div className="relative order-2 md:order-1">
        {/* Decorative Circles */}
        <div className="absolute -z-10 w-48 h-48 rounded-full bg-blue-100/50 -top-8 -left-6 hidden md:block"></div>
        <div className="absolute -z-10 w-24 h-24 rounded-full bg-blue-100/30 bottom-10 left-40 hidden md:block"></div>
        <div className="absolute -z-10 w-16 h-16 rounded-full bg-blue-200/40 top-40 left-20 hidden md:block"></div>

        {/* Leader Info */}
        <h2 className="text-3xl md:text-5xl font-bold text-blue-900 mb-4">{name}</h2>
        <div className="flex items-center mb-4">
          <span className="text-blue-500 font-medium text-lg">{title}</span>
        </div>
        <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
          {bio}
        </p>
      </div>

      {/* Image */}
      <div className="relative order-1 md:order-2 w-full">
        <div className="absolute -z-10 w-full h-full max-w-[500px] max-h-[500px] bg-gradient-to-br from-orange-100/20 to-transparent rounded-full top-10 right-10 hidden md:block"></div>
        <img
          src={imageUrl || "/placeholder.svg"}
          alt={name}
          className="rounded-lg shadow-lg w-full max-w-md mx-auto md:mx-0"
        />
      </div>
    </div>
  );
};

export default function LeadershipSection() {
  return (
    <section className="py-16 bg-gray-50/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-blue-900 mb-4">
            Meet Our Leader
          </h1>
          <p className="text-blue-600 text-lg md:text-xl">
            The people behind V AND L ASSURANCE & INVESTMENT SOLUTIONS LLP Private Limited
          </p>
        </div>

        <Leader
          name="Lahu Angarkhe"
          title="Founder"
          bio="With over 20 years of extensive field experience across various sectors of the insurance industry—including life, health, general, and motor insurance—Lahu Angarkhe brings unmatched expertise and leadership to V AND L ASSURANCE & INVESTMENT SOLUTIONS LLP Private Limited. A graduate with a strong foundation in business, he previously ran a successful trading venture before moving into insurance, where he has held key roles such as Business Development Manager and Area Head. His deep industry knowledge and strategic vision continue to drive the company's growth and commitment to providing smart, reliable insurance solutions."
          imageUrl={lahuImg}
        />
      </div>
    </section>
  );
}
