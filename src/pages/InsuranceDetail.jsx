// // src/pages/InsuranceDetail.jsx
// import { useParams } from "react-router-dom";
// import Insure from "../assets/insure.jpg";
// import { useEffect } from "react";
// import { Helmet } from "react-helmet";

// // const insuranceDetails = {
// //   "car-insurance": {
// //     title: "Car Insurance",
// //     benefits: [
// //       "24×7 Roadside Assistance",
// //       "Prompt customer service",
// //       "Quick claim assistance",
// //     ],
// //     details:
// //       "Car insurance protects your vehicle from accidents, theft, and natural calamities. It also offers financial assistance during unforeseen breakdowns and legal liabilities.",
// //     image: Insure,
// //   },
// //   "bike-insurance": {
// //     title: "Bike Insurance",
// //     benefits: [
// //       "Wide range of add-ons",
// //       "Affordable premiums",
// //       "Comprehensive coverage",
// //     ],
// //     details:
// //       "Bike insurance helps shield your two-wheeler against risks like accidents, theft, and natural disasters. It's mandatory by law and ensures peace of mind for every rider.",
// //     image: Insure,
// //   },
// //   // ...add more entries here following same structure
// // };


// const insuranceDetails = {
//   "car-insurance": {
//     title: "Car Insurance",
//     benefits: [
//       "24×7 Roadside Assistance",
//       "Cashless Repairs Across Network Garages",
//       "Third-Party Liability Coverage",
//       "Own Damage Cover",
//       "Quick claim assistance with hassle-free processing",
//     ],
//     details: `Car insurance is a type of motor insurance that provides financial protection against losses or damages incurred due to road accidents, natural calamities, theft, vandalism, and third-party liabilities. A valid car insurance policy is legally required to drive on public roads in most countries, including India.

// There are typically two types of car insurance policies: Third-Party Insurance, which covers liability for injuries and damages caused to others, and Comprehensive Insurance, which covers both third-party liability and damage to your own vehicle. 

// Having a robust car insurance policy gives you peace of mind, ensures compliance with legal norms, and provides financial coverage for repairs, replacements, and accident-related expenses. Most insurers also offer add-ons like Zero Depreciation, Engine Protection, Return to Invoice, and more, enabling you to tailor the coverage to your needs.`,
//     image: Insure,
//   },
//   "bike-insurance": {
//     title: "Bike Insurance",
//     benefits: [
//       "Wide range of add-ons and customizable policies",
//       "Low premium, high coverage plans",
//       "Coverage against theft, fire, natural calamities, and accidents",
//       "Mandatory legal requirement",
//     ],
//     details: `Bike insurance is essential for two-wheeler owners as it offers protection against damages or losses due to road accidents, theft, fire, and other unforeseen events. It helps minimize out-of-pocket expenses in case of accidental repairs or third-party claims.

// Just like car insurance, two-wheeler insurance is broadly categorized into Third-Party Insurance and Comprehensive Insurance. While third-party insurance is legally mandatory and covers liability toward third parties, comprehensive plans also include protection for the insured bike.

// Many riders opt for add-ons such as Zero Depreciation Cover, Roadside Assistance, and Personal Accident Cover for enhanced protection. Bike insurance is a smart investment for every rider ensuring safety, compliance, and peace of mind while on the road.`,
//     image: Insure,
//   },
//   "travel-insurance": {
//     title: "Travel Insurance",
//     benefits: [
//       "Covers trip cancellations and interruptions",
//       "Emergency medical assistance abroad",
//       "Loss of baggage/passport coverage",
//       "Trip delay and hotel extension benefits",
//     ],
//     details: `Travel insurance provides financial coverage for various risks and unforeseen events that may occur while traveling domestically or internationally. These include trip cancellation, medical emergencies, lost luggage, flight delays, personal liability, and more.

// It’s especially important for international travel as healthcare costs abroad can be extremely high. With the right travel insurance, you gain access to cashless hospitalization, emergency medical evacuation, and even trip rescheduling benefits.

// Whether you're a frequent flyer, student, or leisure traveler, travel insurance helps you manage disruptions without financial stress and ensures your journey remains safe and enjoyable.`,
//     image: Insure,
//   },
//   "commercial-vehicle-insurance": {
//     title: "Commercial Vehicle Insurance",
//     benefits: [
//       "Comprehensive cover for trucks, taxis, vans, and buses",
//       "Personal Accident Cover for driver and co-passengers",
//       "Covers natural calamities, fire, theft, and third-party liabilities",
//     ],
//     details: `Commercial vehicle insurance is specifically designed for vehicles used for business or commercial purposes. These include taxis, delivery vans, trucks, school buses, auto-rickshaws, and more. 

// Unlike private vehicle insurance, commercial insurance accounts for higher risks due to regular use, long-distance travel, and load carrying. It provides protection against damage to the vehicle, loss due to theft, third-party property damage, and bodily injuries.

// Owners can also avail add-ons like legal liability for paid drivers, loss of goods in transit, and passenger cover. Ensuring your commercial vehicles are insured not only complies with transport laws but also reduces potential losses from daily operations.`,
//     image: Insure,
//   },
//   "home-insurance": {
//     title: "Home Insurance",
//     benefits: [
//       "Covers structural and content damage",
//       "Protection from fire, burglary, earthquakes, floods, and riots",
//       "Optional cover for valuable contents like jewelry, electronics",
//     ],
//     details: `Home insurance is a financial shield that covers your house structure and contents against damages caused by fire, burglary, natural disasters, and other unforeseen perils. It ensures you are not financially burdened when disasters strike.

// Policies can be taken for homeowners as well as tenants. Structural coverage protects the physical structure of your home, while content coverage protects belongings inside such as furniture, electronics, jewelry, and personal effects.

// Home insurance provides mental peace and financial security, especially when your home is your biggest investment. Customizable plans ensure coverage fits both standalone houses and apartment-style dwellings.`,
//     image: Insure,
//   },
//   "personal-accident-insurance": {
//     title: "Personal Accident Insurance",
//     benefits: [
//       "Covers accidental death and permanent/partial disability",
//       "Daily hospital cash allowance",
//       "Children education benefit and family support",
//     ],
//     details: `Personal accident insurance offers compensation in the event of death or disability caused by an accident. This includes permanent total disability, partial disability, and temporary disability. It also covers medical expenses related to accidental injuries.

// This insurance is ideal for working professionals, business owners, and anyone who frequently travels or works in risk-prone areas. It acts as an income replacement tool and ensures that financial responsibilities toward family, loans, and daily needs are taken care of.

// The policy can be availed by individuals or families and often includes add-ons like hospital cash, ambulance charges, and funeral expenses.`,
//     image: Insure,
//   },
//   "life-insurance": {
//     title: "Life Insurance",
//     benefits: [
//       "Financial security for dependents after the policyholder’s death",
//       "Includes Term, Whole Life, and ULIP plans",
//       "Tax savings under 80C and 10(10D)",
//     ],
//     details: `Life insurance is a contract between the policyholder and insurer where the insurer promises to pay a designated sum of money to beneficiaries upon the policyholder's death or after a set period.

// Types of life insurance include:
// - **Term Insurance**: Low-cost, pure protection plan.
// - **Whole Life Insurance**: Coverage for the lifetime of the insured.
// - **ULIP (Unit Linked Insurance Plan)**: Combines insurance with investment.
// - **Endowment Plans**: Offers maturity benefits and death coverage.

// Life insurance is a critical component of financial planning and ensures that your loved ones are taken care of financially in your absence. It helps with children's education, retirement planning, and paying off liabilities.`,
//     image: Insure,
//   },
//   "fire-insurance": {
//     title: "Fire Insurance",
//     benefits: [
//       "Protection against fire, explosion, and lightning",
//       "Optional coverage for riots, strikes, terrorism",
//       "Ideal for homes, offices, and warehouses",
//     ],
//     details: `Fire insurance provides coverage for damages caused by accidental fire, lightning, explosion, implosion, and similar perils. It can be availed by homeowners, shopkeepers, industrial property owners, and warehouse managers.

// This insurance helps in rebuilding and replacing property and contents damaged in fire-related incidents. Additional coverage options include protection against riots, strikes, terrorism, and even forest fires.

// Having fire insurance is vital to safeguard assets from potentially catastrophic losses and ensure business continuity and recovery post-disaster.`,
//     image: Insure,
//   },
//   "marine-insurance": {
//     title: "Marine Insurance",
//     benefits: [
//       "Covers cargo loss/damage during transit",
//       "Hull and machinery coverage for ships",
//       "Protects international trade shipments",
//     ],
//     details: `Marine insurance covers loss or damage to ships, cargo, terminals, and transport by which goods are transferred, acquired, or held between points of origin and final destination.

// Types of marine insurance:
// - **Cargo Insurance**: Protects goods during transportation.
// - **Hull Insurance**: Covers ship and equipment damage.
// - **Freight Insurance**: Protects shipping company revenue.

// Marine insurance is vital for businesses involved in import/export and ensures smooth operation in the global trade supply chain. It mitigates the financial risk of maritime accidents, theft, and natural hazards at sea.`,
//     image: Insure,
//   },
//   "non-motor": {
//     title: "Non-Motor Insurance",
//     benefits: [
//       "Protects industrial, commercial properties from risks",
//       "Coverage against natural disasters and fire",
//       "Customizable plans for warehouses, factories, offices",
//     ],
//     details: `Non-motor insurance includes all general insurance types apart from vehicles. This umbrella includes fire insurance, burglary insurance, marine insurance, liability insurance, and more.

// Businesses, institutions, and property owners take non-motor insurance to safeguard physical assets like machinery, buildings, office equipment, and commercial stock. It offers customizable coverage against fire, earthquakes, floods, theft, and human-caused damages.

// This type of insurance is crucial for ensuring operational continuity and reducing business downtime after unforeseen events.`,
//     image: Insure,
//   },
//   "burglary-insurance": {
//     title: "Burglary Insurance",
//     benefits: [
//       "Covers loss due to theft, housebreaking, or attempted burglary",
//       "Applicable for residential and commercial spaces",
//       "Covers damage to premises during the burglary",
//     ],
//     details: `Burglary insurance provides financial protection against losses or damage caused by burglary or attempted burglary. It is ideal for homeowners, shopkeepers, and commercial establishments.

// Coverage includes:
// - Loss of goods due to break-in or forced entry.
// - Damage to property or structure during the incident.
// - Coverage for safes, lockers, and cash registers.

// This policy ensures financial recovery after a burglary and boosts confidence, especially in high-risk areas or sectors that deal with valuable inventory.`,
//     image: Insure,
//   },
// };


// export default function InsuranceDetail() {
//   const { type } = useParams();
//   const data = insuranceDetails[type];

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [type]);

//   if (!data) {
//     return (
//       <section className="py-20 text-center">
//         <h1 className="text-4xl font-bold text-red-600">404 - Not Found</h1>
//         <p className="text-gray-600 mt-4">Insurance type not found.</p>
//       </section>
//     );
//   }

//   return (
//     <>
//       <Helmet>
//         <title>{data.title} | V AND L ASSURANCE & INVESTMENT SOLUTIONS LLP</title>
//       </Helmet>

//       <section className="bg-white py-28 px-6 md:px-10 lg:px-16">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           <div>
//             <h2 className="text-5xl font-extrabold text-blue-700 mb-8">
//               {data.title}
//             </h2>
//             <p className="text-gray-800 text-xl mb-8 leading-relaxed">
//               {data.details}
//             </p>

//             <ul className="space-y-5 text-gray-800 text-lg font-medium">
//               {data.benefits.map((benefit, i) => (
//                 <li key={i} className="flex items-start">
//                   <span className="text-blue-600 text-2xl mr-3">✔</span>
//                   {benefit}
//                 </li>
//               ))}
//             </ul>

//             <p className="mt-10 text-gray-700 text-base max-w-xl">
//               V AND L ASSURANCE & INVESTMENT SOLUTIONS LLP provides transparent, jargon-free policies with
//               real-time support. Secure your future with a plan that matches
//               your lifestyle.
//             </p>
//           </div>

//           <div className="flex justify-center">
//             <img
//               src={data.image}
//               alt={`${data.title} visual`}
//               className="w-full max-w-xl rounded-3xl shadow-2xl object-cover"
//             />
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }



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
