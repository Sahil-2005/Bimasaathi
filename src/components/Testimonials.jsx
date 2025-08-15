import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Marketing Executive",
    quote:
      "V AND L ASSURANCE & INVESTMENT SOLUTIONS LLP made comparing policies so easy. I found the perfect plan within minutes.",
  },
  {
    name: "Pooja Verma",
    role: "IT Professional",
    quote:
      "Clean interface and quick suggestions. I saved time and money. Highly recommended!",
  },
  {
    name: "Ankit Jain",
    role: "Freelancer",
    quote:
      "Support team is top-notch. They explained every option clearly before I made a choice.",
  },
  {
    name: "Sneha Kulkarni",
    role: "Teacher",
    quote:
      "The website design is beautiful and the comparison tool is super helpful.",
  },
  {
    name: "Deepak Mehra",
    role: "Startup Founder",
    quote:
      "Their suggestions were spot-on! It helped me understand the best plan for my family.",
  },
  {
    name: "Nisha Batra",
    role: "Financial Advisor",
    quote:
      "I appreciated how detailed the policy breakdowns were. Truly a platform for informed decisions.",
  },
  {
    name: "Amit Roy",
    role: "Chartered Accountant",
    quote:
      "The portal is intuitive and well-designed. I found everything I needed with ease.",
  },
  {
    name: "Meena Joshi",
    role: "HR Manager",
    quote:
      "Simple, fast, and trustworthy. I’ve already recommended it to colleagues and friends.",
  },
];

function Testimonials() {
  const swiperRef = useRef(null);

  return (
    <section className="bg-blue-50 py-24 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-bold text-blue-600 mb-14">
          What Our Customers Say
        </h2>

        <div className="relative">
          <Swiper
            modules={[Autoplay, Pagination]}
            loop={true}
            autoplay={{ delay: 5000 }}
            pagination={{ clickable: true }}
            spaceBetween={30}
            slidesPerView={1}
            slidesPerGroup={1}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            breakpoints={{
              768: {
                slidesPerView: 2,
                slidesPerGroup: 1,
              },
            }}
          >
            {testimonials.map((t, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white p-10 rounded-3xl shadow-md hover:shadow-2xl hover:scale-[1.02] transition-transform duration-300 ease-in-out h-full flex flex-col items-start justify-between text-left border-l-4 border-blue-600">
                  <p className="text-lg italic text-gray-800 leading-relaxed relative pl-4 before:content-['“'] before:text-4xl before:absolute before:-left-4 before:text-blue-400">
                    {t.quote}
                  </p>
                  <div className="mt-8">
                    <h4 className="text-xl font-semibold text-blue-700">
                      {t.name}
                    </h4>
                    <p className="text-md text-gray-500">{t.role}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Manual Swipe Buttons */}
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="absolute top-1/2 -left-8 transform -translate-y-1/2 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition z-10"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="absolute top-1/2 -right-8 transform -translate-y-1/2 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition z-10"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
