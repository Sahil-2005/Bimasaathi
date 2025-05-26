// import { useState } from "react";
// import { Heart, UserRoundCheck, CheckCircle } from "lucide-react";

// const InsuranceTabs = () => {
//   const [activeTab, setActiveTab] = useState("health");

//   return (
//     <section className="py-16 bg-gray-50">
//       <div className="container mx-auto px-4 md:px-6">
//         <h2 className="text-3xl font-bold text-blue-600 text-center mb-12">
//           Types of Health & Life Insurance
//         </h2>

//         <div className="max-w-5xl mx-auto">
//           {/* Tab Buttons */}
//           <div className="grid grid-cols-2 mb-8">
//             <button
//               onClick={() => setActiveTab("health")}
//               className={`py-2 px-4 font-medium border-b-2 transition ${
//                 activeTab === "health"
//                   ? "border-blue-600 text-blue-600"
//                   : "border-transparent text-gray-600 hover:text-blue-600"
//               }`}
//             >
//               Health Insurance
//             </button>
//             <button
//               onClick={() => setActiveTab("life")}
//               className={`py-2 px-4 font-medium border-b-2 transition ${
//                 activeTab === "life"
//                   ? "border-blue-600 text-blue-600"
//                   : "border-transparent text-gray-600 hover:text-blue-600"
//               }`}
//             >
//               Life Insurance
//             </button>
//           </div>

//           {/* Tab Content */}
//           <div className="bg-white p-6 rounded-lg shadow-sm">
//             {activeTab === "health" ? (
//               <HealthInsuranceContent />
//             ) : (
//               <LifeInsuranceContent />
//             )}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// const CheckItem = ({ text }) => (
//   <li className="flex items-start gap-2">
//     <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
//     <span className="text-gray-700">{text}</span>
//   </li>
// );

// const HealthInsuranceContent = () => (
//   <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//     <div>
//       <div className="flex items-center gap-3 mb-4">
//         <Heart className="h-8 w-8 text-blue-600" />
//         <h3 className="text-2xl font-semibold text-blue-600">Health Insurance</h3>
//       </div>
//       <p className="text-gray-700 mb-6">
//         Health insurance covers medical expenses incurred due to illness or injury. It provides financial protection
//         against healthcare costs and ensures access to quality medical care.
//       </p>

//       <div className="space-y-6">
//         <InsuranceCard
//           title="Individual Health Insurance"
//           desc="Designed for individuals, covering hospitalization expenses, pre and post hospitalization costs, and other medical expenses."
//           points={["Customized coverage for individual needs", "No sharing of sum insured"]}
//         />
//         <InsuranceCard
//           title="Family Floater Health Insurance"
//           desc="Covers the entire family under a single policy with a shared sum insured, making it cost-effective for families."
//           points={["Single premium for the entire family", "Shared sum insured among family members"]}
//         />
//         <InsuranceCard
//           title="Critical Illness Insurance"
//           desc="Provides a lump-sum benefit upon diagnosis of specified critical illnesses like cancer, heart attack, or stroke."
//           points={["One-time payout regardless of treatment cost", "Covers high-cost treatments"]}
//         />
//       </div>
//     </div>

//     <div className="space-y-6">
//       <InsuranceCard
//         title="Senior Citizen Health Insurance"
//         desc="Specially designed for individuals above 60 years, covering age-related illnesses and offering higher coverage limits."
//         points={["Coverage for pre-existing conditions", "Special benefits for senior citizens"]}
//       />
//       <InsuranceCard
//         title="Maternity Health Insurance"
//         desc="Covers expenses related to childbirth, pre and post-natal care, and newborn baby coverage."
//         points={["Coverage for normal and cesarean deliveries", "Pre and post-natal expenses covered"]}
//       />
//       <InsuranceCard
//         title="Group Health Insurance"
//         desc="Provided by employers to their employees, offering comprehensive coverage at lower premiums."
//         points={["Cost-effective for large groups", "Often includes additional benefits"]}
//       />
//       {/* <div className="mt-6">
//         <img
//           src="/placeholder.svg?height=200&width=400"
//           alt="Health Insurance Types"
//           width={400}
//           height={200}
//           className="rounded-lg shadow-md"
//         />
//       </div> */}
//     </div>
//   </div>
// );

// const LifeInsuranceContent = () => (
//   <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//     <div>
//       <div className="flex items-center gap-3 mb-4">
//         <UserRoundCheck className="h-8 w-8 text-blue-600" />
//         <h3 className="text-2xl font-semibold text-blue-600">Life Insurance</h3>
//       </div>
//       <p className="text-gray-700 mb-6">
//         Life insurance provides financial protection to your loved ones in case of your untimely demise. It ensures
//         that your family can maintain their lifestyle and meet financial obligations.
//       </p>

//       <div className="space-y-6">
//         <InsuranceCard
//           title="Term Life Insurance"
//           desc="Provides coverage for a specific period, offering high sum assured at affordable premiums with no maturity benefits."
//           points={["Pure protection plan", "Highest coverage at lowest premium"]}
//         />
//         <InsuranceCard
//           title="Whole Life Insurance"
//           desc="Provides coverage for the entire lifetime of the insured, combining insurance protection with savings component."
//           points={["Lifetime coverage", "Builds cash value over time"]}
//         />
//         <InsuranceCard
//           title="Endowment Plans"
//           desc="Combines life insurance coverage with savings, providing a lump sum amount on maturity or death, whichever is earlier."
//           points={["Dual benefits of protection and savings", "Guaranteed returns"]}
//         />
//       </div>
//     </div>

//     <div className="space-y-6">
//       <InsuranceCard
//         title="Unit Linked Insurance Plans (ULIPs)"
//         desc="Combines insurance protection with investment opportunities, allowing policyholders to invest in equity, debt, or hybrid funds."
//         points={["Market-linked returns", "Flexibility to switch between funds"]}
//       />
//       <InsuranceCard
//         title="Money-Back Plans"
//         desc="Provides periodic returns during the policy term, along with life insurance coverage, offering liquidity."
//         points={["Regular payouts during policy term", "Maturity benefit at the end of term"]}
//       />
//       <InsuranceCard
//         title="Child Plans"
//         desc="Designed to secure your child's future financial needs like education and marriage, even in your absence."
//         points={["Premium waiver on parent's death", "Guaranteed maturity benefits"]}
//       />
//     </div>
//   </div>
// );

// const InsuranceCard = ({ title, desc, points }) => (
//   <div>
//     <h4 className="text-xl font-medium text-blue-600 mb-2">{title}</h4>
//     <p className="text-gray-700 mb-2">{desc}</p>
//     <ul className="space-y-1">
//       {points.map((text, idx) => (
//         <CheckItem key={idx} text={text} />
//       ))}
//     </ul>
//   </div>
// );

// export default InsuranceTabs;



import { useState } from "react";
import { Heart, UserRoundCheck, CheckCircle } from "lucide-react";

const InsuranceTabs = () => {
  const [activeTab, setActiveTab] = useState("health");

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-blue-600 text-center mb-10">
          Types of Health & Life Insurance
        </h2>

        <div className="max-w-5xl mx-auto">
          {/* Tab Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-6 mb-8">
            <button
              onClick={() => setActiveTab("health")}
              className={`w-full sm:w-auto text-center py-2 px-4 font-medium border-b-2 transition ${
                activeTab === "health"
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent text-gray-600 hover:text-blue-600"
              }`}
            >
              Health Insurance
            </button>
            <button
              onClick={() => setActiveTab("life")}
              className={`w-full sm:w-auto text-center py-2 px-4 font-medium border-b-2 transition ${
                activeTab === "life"
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent text-gray-600 hover:text-blue-600"
              }`}
            >
              Life Insurance
            </button>
          </div>

          {/* Tab Content */}
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm">
            {activeTab === "health" ? <HealthInsuranceContent /> : <LifeInsuranceContent />}
          </div>
        </div>
      </div>
    </section>
  );
};

const CheckItem = ({ text }) => (
  <li className="flex items-start gap-2">
    <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
    <span className="text-gray-700">{text}</span>
  </li>
);

const HealthInsuranceContent = () => (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
    <div>
      <div className="flex items-center gap-3 mb-4">
        <Heart className="h-8 w-8 text-blue-600" />
        <h3 className="text-xl sm:text-2xl font-semibold text-blue-600">Health Insurance</h3>
      </div>
      <p className="text-gray-700 mb-6 text-base sm:text-lg">
        Health insurance covers medical expenses incurred due to illness or injury. It provides financial protection
        against healthcare costs and ensures access to quality medical care.
      </p>

      <div className="space-y-6">
        <InsuranceCard
          title="Individual Health Insurance"
          desc="Designed for individuals, covering hospitalization expenses, pre and post hospitalization costs, and other medical expenses."
          points={["Customized coverage for individual needs", "No sharing of sum insured"]}
        />
        <InsuranceCard
          title="Family Floater Health Insurance"
          desc="Covers the entire family under a single policy with a shared sum insured, making it cost-effective for families."
          points={["Single premium for the entire family", "Shared sum insured among family members"]}
        />
        <InsuranceCard
          title="Critical Illness Insurance"
          desc="Provides a lump-sum benefit upon diagnosis of specified critical illnesses like cancer, heart attack, or stroke."
          points={["One-time payout regardless of treatment cost", "Covers high-cost treatments"]}
        />
      </div>
    </div>

    <div className="space-y-6">
      <InsuranceCard
        title="Senior Citizen Health Insurance"
        desc="Specially designed for individuals above 60 years, covering age-related illnesses and offering higher coverage limits."
        points={["Coverage for pre-existing conditions", "Special benefits for senior citizens"]}
      />
      <InsuranceCard
        title="Maternity Health Insurance"
        desc="Covers expenses related to childbirth, pre and post-natal care, and newborn baby coverage."
        points={["Coverage for normal and cesarean deliveries", "Pre and post-natal expenses covered"]}
      />
      <InsuranceCard
        title="Group Health Insurance"
        desc="Provided by employers to their employees, offering comprehensive coverage at lower premiums."
        points={["Cost-effective for large groups", "Often includes additional benefits"]}
      />
    </div>
  </div>
);

const LifeInsuranceContent = () => (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
    <div>
      <div className="flex items-center gap-3 mb-4">
        <UserRoundCheck className="h-8 w-8 text-blue-600" />
        <h3 className="text-xl sm:text-2xl font-semibold text-blue-600">Life Insurance</h3>
      </div>
      <p className="text-gray-700 mb-6 text-base sm:text-lg">
        Life insurance provides financial protection to your loved ones in case of your untimely demise. It ensures
        that your family can maintain their lifestyle and meet financial obligations.
      </p>

      <div className="space-y-6">
        <InsuranceCard
          title="Term Life Insurance"
          desc="Provides coverage for a specific period, offering high sum assured at affordable premiums with no maturity benefits."
          points={["Pure protection plan", "Highest coverage at lowest premium"]}
        />
        <InsuranceCard
          title="Whole Life Insurance"
          desc="Provides coverage for the entire lifetime of the insured, combining insurance protection with savings component."
          points={["Lifetime coverage", "Builds cash value over time"]}
        />
        <InsuranceCard
          title="Endowment Plans"
          desc="Combines life insurance coverage with savings, providing a lump sum amount on maturity or death, whichever is earlier."
          points={["Dual benefits of protection and savings", "Guaranteed returns"]}
        />
      </div>
    </div>

    <div className="space-y-6">
      <InsuranceCard
        title="Unit Linked Insurance Plans (ULIPs)"
        desc="Combines insurance protection with investment opportunities, allowing policyholders to invest in equity, debt, or hybrid funds."
        points={["Market-linked returns", "Flexibility to switch between funds"]}
      />
      <InsuranceCard
        title="Money-Back Plans"
        desc="Provides periodic returns during the policy term, along with life insurance coverage, offering liquidity."
        points={["Regular payouts during policy term", "Maturity benefit at the end of term"]}
      />
      <InsuranceCard
        title="Child Plans"
        desc="Designed to secure your child's future financial needs like education and marriage, even in your absence."
        points={["Premium waiver on parent's death", "Guaranteed maturity benefits"]}
      />
    </div>
  </div>
);

const InsuranceCard = ({ title, desc, points }) => (
  <div>
    <h4 className="text-lg sm:text-xl font-medium text-blue-600 mb-2">{title}</h4>
    <p className="text-gray-700 mb-2 text-sm sm:text-base">{desc}</p>
    <ul className="space-y-1">
      {points.map((text, idx) => (
        <CheckItem key={idx} text={text} />
      ))}
    </ul>
  </div>
);

export default InsuranceTabs;
