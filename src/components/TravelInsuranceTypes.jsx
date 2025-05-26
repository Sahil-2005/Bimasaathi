import { useState } from "react";
import { CheckCircle, Plane, Globe, Mountain } from "lucide-react";

const TravelInsuranceTypes = () => {
  const [activeTab, setActiveTab] = useState("single-trip");

  const renderTabs = () => (
    <div className="grid w-full grid-cols-1 sm:grid-cols-3 gap-2 mb-8">
      <button
        className={`py-2 px-4 text-center font-medium border ${
          activeTab === "single-trip"
            ? "bg-blue-600 text-white border-blue-600"
            : "bg-white text-blue-600 border-blue-300"
        } rounded-lg`}
        onClick={() => setActiveTab("single-trip")}
      >
        Single Trip
      </button>
      <button
        className={`py-2 px-4 text-center font-medium border ${
          activeTab === "multi-trip"
            ? "bg-blue-600 text-white border-blue-600"
            : "bg-white text-blue-600 border-blue-300"
        } rounded-lg`}
        onClick={() => setActiveTab("multi-trip")}
      >
        Multi-Trip
      </button>
      <button
        className={`py-2 px-4 text-center font-medium border ${
          activeTab === "specialized"
            ? "bg-blue-600 text-white border-blue-600"
            : "bg-white text-blue-600 border-blue-300"
        } rounded-lg`}
        onClick={() => setActiveTab("specialized")}
      >
        Specialized Coverage
      </button>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case "single-trip":
        return <SingleTrip />;
      case "multi-trip":
        return <MultiTrip />;
      case "specialized":
        return <Specialized />;
      default:
        return null;
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-blue-600 text-center mb-12">
          Types of Travel Insurance
        </h2>
        <div className="max-w-5xl mx-auto">
          {renderTabs()}
          {renderContent()}
        </div>
      </div>
    </section>
  );
};

const SectionBlock = ({ icon: Icon, title, content, items }) => (
  <div>
    <div className="flex items-center gap-3 mb-4">
      <Icon className="h-8 w-8 text-blue-600" />
      <h3 className="text-2xl font-semibold text-blue-600">{title}</h3>
    </div>
    <p className="text-gray-700 mb-6">{content}</p>
    {items}
  </div>
);

const InfoBlock = ({ title, description, points }) => (
  <div>
    <h4 className="text-xl font-medium text-blue-600 mb-2">{title}</h4>
    <p className="text-gray-700 mb-2">{description}</p>
    <ul className="space-y-1">
      {points.map((point, idx) => (
        <li key={idx} className="flex items-start gap-2">
          <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <span className="text-gray-700">{point}</span>
        </li>
      ))}
    </ul>
  </div>
);

const IdealFor = ({ items }) => (
  <div className="bg-blue-50 p-4 rounded-lg">
    <h4 className="font-medium text-blue-600 mb-2">Ideal For:</h4>
    <ul className="space-y-2">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-start gap-2">
          <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <span className="text-gray-700">{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

const SingleTrip = () => (
  <div className="bg-white p-6 rounded-lg shadow-sm">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <SectionBlock
        icon={Plane}
        title="Single Trip Insurance"
        content="Single trip insurance covers you for one specific journey, from the start date to the end date of your trip. It's ideal for travelers who take occasional trips throughout the year."
        items={
          <div className="space-y-4">
            <InfoBlock
              title="Domestic Single Trip"
              description="Covers travel within your home country, providing protection for trip cancellations, delays, and domestic medical emergencies."
              points={[
                "Lower premiums than international coverage",
                "Focus on trip protection and baggage coverage",
              ]}
            />
            <InfoBlock
              title="International Single Trip"
              description="Provides comprehensive coverage for one international journey, including medical emergencies, evacuation, and repatriation."
              points={[
                "Higher medical coverage limits",
                "Coverage for the entire duration of your trip",
              ]}
            />
          </div>
        }
      />
      <div>
        <img
          src="/placeholder.svg?height=300&width=400"
          alt="Single Trip Insurance"
          className="rounded-lg shadow-md mb-6 w-full h-auto"
        />
        <IdealFor
          items={[
            "Vacation travelers",
            "Business travelers making occasional trips",
            "Those traveling once or twice a year",
          ]}
        />
      </div>
    </div>
  </div>
);

const MultiTrip = () => (
  <div className="bg-white p-6 rounded-lg shadow-sm">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <SectionBlock
        icon={Globe}
        title="Multi-Trip Insurance"
        content="Multi-trip or annual travel insurance covers multiple journeys within a 12-month period. It's cost-effective for frequent travelers who take several trips throughout the year."
        items={
          <div className="space-y-4">
            <InfoBlock
              title="Annual Multi-Trip Domestic"
              description="Covers multiple trips within your home country over a 12-month period, with limits on the duration of each trip."
              points={[
                "Economical for frequent domestic travelers",
                "Typically limits each trip to 30-45 days",
              ]}
            />
            <InfoBlock
              title="Annual Multi-Trip International"
              description="Provides coverage for multiple international trips within a year, offering convenience and cost savings for frequent international travelers."
              points={[
                "Comprehensive international coverage",
                "Usually limits each trip to 30-90 days",
              ]}
            />
          </div>
        }
      />
      <div>
        <img
          src="/placeholder.svg?height=300&width=400"
          alt="Multi-Trip Insurance"
          className="rounded-lg shadow-md mb-6 w-full h-auto"
        />
        <IdealFor
          items={[
            "Business travelers who travel frequently",
            "Families who take multiple vacations per year",
            "Digital nomads and remote workers",
          ]}
        />
      </div>
    </div>
  </div>
);

const Specialized = () => (
  <div className="bg-white p-6 rounded-lg shadow-sm">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <SectionBlock
        icon={Mountain}
        title="Specialized Travel Insurance"
        content="Specialized travel insurance policies are designed for specific types of trips or travelers with unique needs, offering tailored coverage for particular activities or circumstances."
        items={
          <div className="space-y-4">
            <InfoBlock
              title="Adventure Travel Insurance"
              description="Designed for travelers engaging in high-risk activities like mountaineering, scuba diving, or skiing."
              points={[
                "Coverage for extreme sports and activities",
                "Higher medical and evacuation coverage",
              ]}
            />
            <InfoBlock
              title="Cruise Insurance"
              description="Specifically tailored for cruise vacations, covering unique situations like missed port departures and cabin confinement."
              points={["Cruise-specific benefits", "Medical evacuation from ships"]}
            />
          </div>
        }
      />
      <div className="space-y-4">
        <InfoBlock
          title="Senior Travel Insurance"
          description="Designed for older travelers, offering coverage for pre-existing medical conditions and higher medical benefits."
          points={[
            "Pre-existing condition coverage options",
            "Higher medical coverage limits",
          ]}
        />
        <InfoBlock
          title="Backpacker Insurance"
          description="Long-term coverage for extended trips, gap years, or backpacking adventures."
          points={["Extended duration coverage (3-18 months)", "Multiple destination coverage"]}
        />
        <InfoBlock
          title="Business Travel Insurance"
          description="Tailored for business travelers, covering work equipment, emergency replacement of colleagues, and trip interruption."
          points={["Coverage for business equipment", "Business interruption benefits"]}
        />
      </div>
    </div>
  </div>
);

export default TravelInsuranceTypes;
