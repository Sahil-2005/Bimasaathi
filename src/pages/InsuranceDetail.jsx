// src/pages/InsuranceDetail.jsx
import { useParams } from "react-router-dom";
import InsureCar from "../assets/insure.jpg";
import InsureBike from "../assets/insure.jpg";
// import other images accordingly
import { useEffect } from "react";
import { Helmet } from "react-helmet";

const insuranceDetails = {
  "car-insurance": {
    title: "Car Insurance",
    image: InsureCar,
    sections: {
      what: `Car insurance is a contract between you and the insurance provider that protects your vehicle against losses from accidents, theft, fire, and other risks. It also provides financial coverage for damages or injuries to third parties. It’s mandatory in many regions and gives peace of mind to drivers by mitigating the financial burden in case of unforeseen events.`,

      benefits: [
        {
          title: "Comprehensive Protection",
          description:
            "Covers damages to your own car due to accidents, theft, natural disasters like floods or storms, and fire. This ensures your investment is safe no matter what happens.",
        },
        {
          title: "Third-Party Liability",
          description:
            "Protects you against legal liabilities for injury or damage caused to others, including their vehicle or property, saving you from costly lawsuits.",
        },
        {
          title: "24×7 Roadside Assistance",
          description:
            "Provides quick help in emergencies like breakdowns, flat tires, or towing, helping you get back on the road swiftly.",
        },
        {
          title: "Financial Security",
          description:
            "In case of accidents, the insurance covers repair or replacement costs, preventing unexpected expenses from draining your savings.",
        },
      ],

      howItWorks: `When you buy a car insurance policy, you pay a premium based on factors like your car’s model, usage, and driving record. If an insured event occurs, you file a claim with your insurer who assesses the damage and compensates you based on your coverage. Policies may include add-ons for extra protection or discounts for safe driving.`,

      useCases: `Whether it’s a minor fender bender or major collision, car insurance ensures that the financial impact is minimized. It is especially important for new drivers, daily commuters, or anyone owning a costly vehicle.`,

      tips: [
        "Always compare premium rates and coverage before buying.",
        "Maintain a clean driving record to enjoy lower premiums.",
        "Check for add-ons like zero depreciation or engine protection.",
        "Renew your policy on time to avoid lapses in coverage.",
      ],
    },
  },

  "bike-insurance": {
    title: "Bike Insurance",
    image: InsureBike,
    sections: {
      what: `Bike insurance safeguards your two-wheeler from damages due to accidents, theft, fire, and natural disasters. It provides financial assistance for repair or replacement and is legally mandatory in most countries to ensure rider and third-party protection.`,

      benefits: [
        {
          title: "Accident and Theft Protection",
          description:
            "Covers repair costs for damages from collisions and loss due to theft or vandalism.",
        },
        {
          title: "Affordable Premiums",
          description:
            "Bike insurance usually costs less than car insurance, making it accessible for all riders.",
        },
        {
          title: "Third-Party Liability Coverage",
          description:
            "Protects you against legal costs arising from injury or property damage to others.",
        },
        {
          title: "Add-on Benefits",
          description:
            "Includes roadside assistance, personal accident cover, and engine protection for comprehensive security.",
        },
      ],

      howItWorks: `After selecting your bike insurance policy and paying the premium, you get coverage for the specified period. Claims are filed through your insurer who verifies damages and processes compensation, helping you repair or replace your bike.`,

      useCases: `Essential for daily commuters, delivery riders, and motorcycle enthusiasts to protect their investment and ensure legal compliance.`,

      tips: [
        "Always disclose correct bike details for accurate premium calculation.",
        "Consider add-ons for better protection against engine or electrical failures.",
        "File claims promptly to avoid delays.",
      ],
    },
  },

  // Add other insurance types similarly with sections: what, benefits, howItWorks, useCases, tips
};

export default function InsuranceDetail() {
  const { type } = useParams();
  const data = insuranceDetails[type];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [type]);

  if (!data) {
    return (
      <section className="py-20 text-center">
        <h1 className="text-4xl font-bold text-red-600">404 - Not Found</h1>
        <p className="text-gray-600 mt-4">Insurance type not found.</p>
      </section>
    );
  }

  const { sections } = data;

  return (
    <>
      <Helmet>
        <title>{data.title} | V AND L ASSURANCE & INVESTMENT SOLUTIONS LLP</title>
      </Helmet>

      <section className="bg-white py-20 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto text-blue-700">
        <h1 className="text-5xl font-extrabold mb-12">{data.title}</h1>

        {/* What is it */}
        <article className="mb-16">
          <h2 className="text-3xl font-semibold mb-4 border-b-4 border-blue-500 inline-block pb-2">
            What is {data.title}?
          </h2>
          <p className="text-lg leading-relaxed">{sections.what}</p>
        </article>

        {/* Image */}
        <div className="mb-16 flex justify-center">
          <img
            src={data.image}
            alt={`${data.title} illustration`}
            className="rounded-3xl shadow-xl max-w-full h-auto object-cover"
          />
        </div>

        {/* Benefits */}
        <article className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 border-b-4 border-blue-500 inline-block pb-2">
            Benefits of {data.title}
          </h2>
          <div className="space-y-10">
            {sections.benefits.map((benefit, i) => (
              <section key={i}>
                <h3 className="text-2xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-lg leading-relaxed">{benefit.description}</p>
              </section>
            ))}
          </div>
        </article>

        {/* How it works */}
        <article className="mb-16">
          <h2 className="text-3xl font-semibold mb-4 border-b-4 border-blue-500 inline-block pb-2">
            How it Works
          </h2>
          <p className="text-lg leading-relaxed">{sections.howItWorks}</p>
        </article>

        {/* Use cases */}
        <article className="mb-16">
          <h2 className="text-3xl font-semibold mb-4 border-b-4 border-blue-500 inline-block pb-2">
            Use Cases
          </h2>
          <p className="text-lg leading-relaxed">{sections.useCases}</p>
        </article>

        {/* Tips */}
        {sections.tips && (
          <article className="mb-20">
            <h2 className="text-3xl font-semibold mb-6 border-b-4 border-blue-500 inline-block pb-2">
              Tips for Choosing {data.title}
            </h2>
            <ul className="list-disc list-inside text-lg space-y-2">
              {sections.tips.map((tip, i) => (
                <li key={i}>{tip}</li>
              ))}
            </ul>
          </article>
        )}
      </section>
    </>
  );
}
