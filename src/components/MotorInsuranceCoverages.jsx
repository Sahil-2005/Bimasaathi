import { useState } from 'react';
import { CheckCircle } from 'lucide-react';

const AccordionItem = ({ value, title, children, isOpen, onToggle }) => (
  <div className="border-b border-gray-200">
    <button
      onClick={() => onToggle(value)}
      className="w-full text-left px-4 md:px-6 py-3 md:py-4 hover:bg-blue-50 text-blue-600 font-medium focus:outline-none"
    >
      {title}
    </button>
    {isOpen && <div className="px-4 md:px-6 pb-4">{children}</div>}
  </div>
);

const Accordion = ({ items }) => {
  const [openItem, setOpenItem] = useState(null);

  const handleToggle = (value) => {
    setOpenItem(openItem === value ? null : value);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm">
      {items.map(({ value, title, content }) => (
        <AccordionItem
          key={value}
          value={value}
          title={title}
          isOpen={openItem === value}
          onToggle={handleToggle}
        >
          {content}
        </AccordionItem>
      ))}
    </div>
  );
};

export default function MotorInsuranceCoverages() {
  const coverageItems = [
    {
      value: 'liability',
      title: 'Liability Coverage',
      content: (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className="md:col-span-2">
            <p className="text-gray-700 mb-3 text-sm md:text-base">
              Liability coverage protects you if you're legally responsible for a car accident that injures another person or damages their property.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                <span className="text-gray-700 text-sm md:text-base">Bodily injury liability: Covers medical expenses, lost wages, and legal fees</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                <span className="text-gray-700 text-sm md:text-base">Property damage liability: Covers repair or replacement of others' property</span>
              </li>
            </ul>
          </div>
          {/* <div className="flex justify-center items-start">
            <img src="/placeholder.svg" alt="Liability Coverage" className="w-full max-w-[200px] h-auto rounded-lg" />
          </div> */}
        </div>
      ),
    },
    {
      value: 'collision',
      title: 'Collision Coverage',
      content: (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className="md:col-span-2">
            <p className="text-gray-700 mb-3 text-sm md:text-base">
              Collision coverage pays for damage to your vehicle when you hit another vehicle or object, regardless of who is at fault.
            </p>
            <ul className="space-y-2">
              {[
                'Repairs to your vehicle after an accident',
                'Replacement if your vehicle is totaled',
                'Coverage for single-car accidents like rollovers',
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                  <span className="text-gray-700 text-sm md:text-base">{text}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* <div className="flex justify-center items-start">
            <img src="/placeholder.svg" alt="Collision Coverage" className="w-full max-w-[200px] h-auto rounded-lg" />
          </div> */}
        </div>
      ),
    },
    {
      value: 'comprehensive',
      title: 'Comprehensive Coverage',
      content: (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className="md:col-span-2">
            <p className="text-gray-700 mb-3 text-sm md:text-base">
              Comprehensive coverage pays for damage to your vehicle from events other than collisions.
            </p>
            <ul className="space-y-2">
              {[
                'Theft or attempted theft',
                'Vandalism and riots',
                'Fire damage',
                'Natural disasters (floods, earthquakes, hail)',
                'Falling objects',
                'Animal collisions',
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                  <span className="text-gray-700 text-sm md:text-base">{text}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* <div className="flex justify-center items-start">
            <img src="/placeholder.svg" alt="Comprehensive Coverage" className="w-full max-w-[200px] h-auto rounded-lg" />
          </div> */}
        </div>
      ),
    },
    {
      value: 'personal',
      title: 'Personal Injury Protection (PIP)',
      content: (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className="md:col-span-2">
            <p className="text-gray-700 mb-3 text-sm md:text-base">
              Personal Injury Protection covers medical expenses for you and your passengers regardless of who caused the accident.
            </p>
            <ul className="space-y-2">
              {[
                'Medical expenses',
                'Lost wages',
                'Rehabilitation costs',
                'Funeral expenses',
                'Replacement services (like childcare)',
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                  <span className="text-gray-700 text-sm md:text-base">{text}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* <div className="flex justify-center items-start">
            <img src="/placeholder.svg" alt="Personal Injury Protection" className="w-full max-w-[200px] h-auto rounded-lg" />
          </div> */}
        </div>
      ),
    },
    {
      value: 'uninsured',
      title: 'Uninsured/Underinsured Motorist Coverage',
      content: (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className="md:col-span-2">
            <p className="text-gray-700 mb-3 text-sm md:text-base">
              This coverage protects you if you're in an accident with a driver who has insufficient or no insurance.
            </p>
            <ul className="space-y-2">
              {[
                'Medical expenses',
                'Lost wages',
                'Pain and suffering',
                'Property damage (in some states)',
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                  <span className="text-gray-700 text-sm md:text-base">{text}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* <div className="flex justify-center items-start">
            <img src="/placeholder.svg" alt="Uninsured Motorist Coverage" className="w-full max-w-[200px] h-auto rounded-lg" />
          </div> */}
        </div>
      ),
    },
    {
      value: 'addon',
      title: 'Add-on Coverages',
      content: (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className="md:col-span-2">
            <p className="text-gray-700 mb-3 text-sm md:text-base">
              These are optional coverages you can add to your policy for additional protection.
            </p>
            <ul className="space-y-2">
              {[
                'Roadside assistance',
                'Rental car reimbursement',
                'Gap insurance',
                'New car replacement',
                'Custom parts and equipment coverage',
                'Mechanical breakdown insurance',
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                  <span className="text-gray-700 text-sm md:text-base">{text}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* <div className="flex justify-center items-start">
            <img src="/placeholder.svg" alt="Add-on Coverages" className="w-full max-w-[200px] h-auto rounded-lg" />
          </div> */}
        </div>
      ),
    },
  ];

  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-600 text-center mb-10 md:mb-12">Types of Coverages in Motor Insurance</h2>
        <div className="max-w-4xl mx-auto">
          <Accordion items={coverageItems} />
        </div>
      </div>
    </section>
  );
}
