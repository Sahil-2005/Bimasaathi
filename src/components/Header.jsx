// import { Link } from "react-router-dom";
// import { useState, useRef } from "react";
// import Logo from '../assets/logo (2).png';

// export default function Header() {
//   const [isHovering, setIsHovering] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const timeoutRef = useRef(null);

//   const handleMouseEnter = () => {
//     clearTimeout(timeoutRef.current);
//     setIsHovering(true);
//   };

//   const handleMouseLeave = () => {
//     timeoutRef.current = setTimeout(() => {
//       setIsHovering(false);
//     }, 300);
//   };

//   const toggleMobileMenu = () => {
//     setMobileMenuOpen((prev) => !prev);
//   };

//   return (
//     <header className="bg-white shadow-md sticky top-0 z-50 font-sans text-[1.1rem]">
//       {/* <div className="flex items-center justify-between px-6 md:px-10 py-4 max-w-7xl mx-auto"> */}
//       <div className="flex items-center justify-between px-6 md:px-10 py-4 max-w-7xl mx-auto overflow-visible">

//         {/* Logo */}
//         <Link to="/" className="flex items-center gap-2 text-2xl font-extrabold text-blue-700 tracking-tight">
//           <img src={Logo} alt="V AND L ASSURANCE & INVESTMENT SOLUTIONS LLP" className="h-14 w-auto object-contain" />
//         </Link>

//         {/* Desktop Navigation */}
//         <nav className="hidden md:flex items-center gap-10">
//           <Link to="/" className="hover:text-blue-600 font-semibold">Home</Link>

//           <div
//             className="relative"
//             onMouseEnter={handleMouseEnter}
//             onMouseLeave={handleMouseLeave}
//           >
//             <button className="flex items-center font-semibold hover:text-blue-600 transition justify-center">
//               Products
//               <span
//                 className={`ml-1 transition-transform duration-300 ${isHovering ? "rotate-180" : "rotate-0"}`}
//               >
//                 ▼
//               </span>
//             </button>

//             {isHovering && (
//               <div className="fixed top-[85px] left-0 w-screen bg-gray-50 border-t-4 border-blue-600 shadow-2xl z-40 py-10 px-24 flex justify-between text-[1.05rem] font-medium tracking-tight">
//                 <DropdownColumn title="Life Insurance" items={["Term Plan", "Pension", "Capital Guarantee"]} />
//                 <DropdownColumn title="Health Insurance" items={["Individual Health", "Critical Illness", "Maternity"]} />
//                 <DropdownColumn title="Motor Insurance" items={["Car Insurance", "Bike Insurance", "Commercial"]} />
//                 <DropdownColumn title="General Insurance" items={["Travel Insurance", "Home Insurance", "Personal Accident"]} />
//                 <DropdownColumn title="Company" items={["About Us", "Careers", "Contact"]} />
//               </div>
//             )}
//           </div>

//           <Link to="/about" className="hover:text-blue-600 font-semibold">About</Link>
//           <Link to="/careers" className="hover:text-blue-600 font-semibold">Careers</Link>
//           <Link to="/contact" className="hover:text-blue-600 font-semibold">Contact</Link>
//         </nav>

//         {/* Become Advisor Button (Desktop) */}
//         <Link
//           to="/be-advisor"
//           className="hidden md:inline-block ml-6 bg-blue-700 text-white px-6 py-3 rounded-full text-lg font-semibold shadow hover:bg-blue-800 transition-all"
//         >
//           Become an Advisor
//         </Link>

//         {/* Animated Hamburger */}
//         <button
//           onClick={toggleMobileMenu}
//           className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1 relative z-50"
//           aria-label="Toggle Menu"
//         >
//           <span
//             className={`block h-1 w-6 bg-blue-700 rounded transition-transform duration-300 ${
//               mobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
//             }`}
//           />
//           <span
//             className={`block h-1 w-6 bg-blue-700 rounded transition-opacity duration-300 ${
//               mobileMenuOpen ? "opacity-0" : "opacity-100"
//             }`}
//           />
//           <span
//             className={`block h-1 w-6 bg-blue-700 rounded transition-transform duration-300 ${
//               mobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
//             }`}
//           />
//         </button>
//       </div>

//       {/* Animated Mobile Menu */}
//       <div
//         className={`md:hidden fixed top-0 left-0 w-full h-screen bg-white z-40 p-6 transform transition-transform duration-500 ease-in-out ${
//           mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
//         }`}
//       >
//         <nav className="flex flex-col gap-6 text-lg font-semibold mt-16">
//           <Link to="/" onClick={toggleMobileMenu} className="hover:text-blue-600">Home</Link>

//           <MobileAccordion title="Products">
//             <div className="pl-4 space-y-4 text-base font-normal text-gray-700">
//               <MobileColumn title="Life Insurance" items={["Term Plan", "Pension", "Capital Guarantee"]} />
//               <MobileColumn title="Health Insurance" items={["Individual Health", "Critical Illness", "Maternity"]} />
//               <MobileColumn title="Motor Insurance" items={["Car Insurance", "Bike Insurance", "Commercial"]} />
//               <MobileColumn title="General Insurance" items={["Travel Insurance", "Home Insurance", "Personal Accident"]} />
//               <MobileColumn title="Company" items={["About Us", "Careers", "Contact"]} />
//             </div>
//           </MobileAccordion>

//           <Link to="/about" onClick={toggleMobileMenu} className="hover:text-blue-600">About</Link>
//           <Link to="/careers" onClick={toggleMobileMenu} className="hover:text-blue-600">Careers</Link>
//           <Link to="/contact" onClick={toggleMobileMenu} className="hover:text-blue-600">Contact</Link>

//           <Link
//             to="/be-advisor"
//             onClick={toggleMobileMenu}
//             className="mt-6 bg-blue-700 text-white px-6 py-3 rounded-full text-lg font-semibold shadow hover:bg-blue-800 transition-all text-center"
//           >
//             Become an Advisor
//           </Link>
//         </nav>
//       </div>
//     </header>
//   );
// }

// function DropdownColumn({ title, items }) {
//   return (
//     <div>
//       <h4 className="text-xl font-bold text-blue-700 mb-4">{title}</h4>
//       <ul className="space-y-3 text-gray-800">
//         {items.map((item, idx) => (
//           <li key={idx} className="hover:text-blue-500 cursor-pointer">{item}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// function MobileAccordion({ title, children }) {
//   const [open, setOpen] = useState(false);

//   return (
//     <div>
//       <button
//         onClick={() => setOpen((o) => !o)}
//         className="flex justify-between items-center w-full font-semibold text-lg hover:text-blue-600"
//       >
//         {title}
//         <span
//           className={`ml-2 transition-transform duration-300 ${open ? "rotate-180" : "rotate-0"}`}
//         >
//           ▼
//         </span>
//       </button>
//       {open && <div className="mt-3">{children}</div>}
//     </div>
//   );
// }

// function MobileColumn({ title, items }) {
//   return (
//     <div>
//       <h4 className="font-bold text-blue-700 mb-2">{title}</h4>
//       <ul className="space-y-1">
//         {items.map((item, idx) => (
//           <li key={idx}>{item}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import Logo from "../assets/logo (2).png";

export default function Header() {
  const [isHovering, setIsHovering] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsHovering(false);
    }, 300);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 font-sans text-[1.1rem]">
      {/* <div className="flex items-center justify-between px-6 md:px-10 max-w-7xl mx-auto overflow-visible"> */}
      <div className="flex items-center justify-between px-4 md:px-6 max-w-7xl mx-auto overflow-visible">

        <Link to="/" className="flex flex-col items-start gap-1">
          <div className="flex items-center gap-2 text-xl md:text-2xl font-extrabold text-blue-700 tracking-tight">
            <img
              src={Logo}
              alt="V AND L ASSURANCE & INVESTMENT SOLUTIONS LLP"
              className="h-21 w-20 object-contain"
                // className="h-16 md:h-20 w-auto object-contain"

            />

            {/* ✅ Show highlighted name on all views */}
            <span className="text-blue-800 font-bold text-base md:text-lg">
              Insurance Carry Info
            </span>
          </div>

          {/* ✅ Show full company name only on mobile */}
          {/* <span className="text-xs text-gray-700 font-semibold md:hidden leading-tight">
            V AND L ASSURANCE & INVESTMENT SOLUTIONS LLP
          </span> */}

          {/* ✅ Show subtitle only on desktop */}
          {/* <span className="text-sm text-gray-500 font-medium hidden md:inline-block">
            A Sister Brand of V and L Assurance
          </span> */}
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          <Link to="/" className="hover:text-blue-600 font-semibold">
            Home
          </Link>

          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button className="flex items-center font-semibold hover:text-blue-600 transition justify-center">
              Products
              <span
                className={`ml-1 transition-transform duration-300 ${
                  isHovering ? "rotate-180" : "rotate-0"
                }`}
              >
                ▼
              </span>
            </button>

            {isHovering && (
              <div className="fixed top-[85px] left-0 w-screen bg-gray-50 border-t-4 border-blue-600 shadow-2xl z-40 py-10 px-24 flex justify-between text-[1.05rem] font-medium tracking-tight">
                <DropdownColumn
                  title="Life Insurance"
                  items={[
                    {
                      name: "Term Plan",
                      path: "/insurance/health-life-insurance",
                    },
                    {
                      name: "Pension",
                      path: "/insurance/health-life-insurance",
                    },
                    {
                      name: "Capital Guarantee",
                      path: "/insurance/health-life-insurance",
                    },
                  ]}
                />
                <DropdownColumn
                  title="Health Insurance"
                  items={[
                    {
                      name: "Individual Health",
                      path: "/insurance/health-life-insurance",
                    },
                    {
                      name: "Critical Illness",
                      path: "/insurance/health-life-insurance",
                    },
                    {
                      name: "Maternity",
                      path: "/insurance/health-life-insurance",
                    },
                  ]}
                />
                <DropdownColumn
                  title="Motor Insurance"
                  items={[
                    {
                      name: "Car Insurance",
                      path: "/insurance/motor-insurance",
                    },
                    {
                      name: "Bike Insurance",
                      path: "/insurance/motor-insurance",
                    },
                    { name: "Commercial", path: "/insurance/motor-insurance" },
                  ]}
                />
                <DropdownColumn
                  title="General Insurance"
                  items={[
                    {
                      name: "Travel Insurance",
                      path: "/insurance/travel-insurance",
                    },
                    {
                      name: "Home Insurance",
                      path: "/insurance/home-insurance",
                    },
                    {
                      name: "Personal Accident",
                      path: "/insurance/non-motor-insurance",
                    },
                  ]}
                />
                <DropdownColumn
                  title="Company"
                  items={[
                    { name: "About Us", path: "/about" },
                    { name: "Careers", path: "/careers" },
                    { name: "Contact", path: "/contact" },
                  ]}
                />
              </div>
            )}
          </div>

          <Link to="/about" className="hover:text-blue-600 font-semibold">
            About
          </Link>
          <Link to="/careers" className="hover:text-blue-600 font-semibold">
            Careers
          </Link>
          <Link to="/contact" className="hover:text-blue-600 font-semibold">
            Contact
          </Link>
        </nav>

        <Link
          to="/be-advisor"
          className="hidden md:inline-block ml-6 bg-blue-700 text-white px-6 py-3 rounded-full text-lg font-semibold shadow hover:bg-blue-800 transition-all"
        >
          Become an Saathi
        </Link>

        <button
          onClick={toggleMobileMenu}
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1 relative z-50"
          aria-label="Toggle Menu"
        >
          <span
            className={`block h-1 w-6 bg-blue-700 rounded transition-transform duration-300 ${
              mobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`block h-1 w-6 bg-blue-700 rounded transition-opacity duration-300 ${
              mobileMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-1 w-6 bg-blue-700 rounded transition-transform duration-300 ${
              mobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-screen bg-white z-40 p-6 transform transition-transform duration-500 ease-in-out ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <nav className="flex flex-col gap-6 text-lg font-semibold mt-16">
          <Link
            to="/"
            onClick={toggleMobileMenu}
            className="hover:text-blue-600"
          >
            Home
          </Link>

          <MobileAccordion title="Products">
            <div className="pl-4 space-y-4 text-base font-normal text-gray-700">
              <MobileColumn
                title="Life Insurance"
                items={[
                  {
                    name: "Term Plan",
                    path: "/insurance/health-life-insurance",
                  },
                  { name: "Pension", path: "/insurance/health-life-insurance" },
                  {
                    name: "Capital Guarantee",
                    path: "/insurance/health-life-insurance",
                  },
                ]}
                closeMenu={toggleMobileMenu}
              />
              <MobileColumn
                title="Health Insurance"
                items={[
                  {
                    name: "Individual Health",
                    path: "/insurance/health-life-insurance",
                  },
                  {
                    name: "Critical Illness",
                    path: "/insurance/health-life-insurance",
                  },
                  {
                    name: "Maternity",
                    path: "/insurance/health-life-insurance",
                  },
                ]}
                closeMenu={toggleMobileMenu}
              />
              <MobileColumn
                title="Motor Insurance"
                items={[
                  { name: "Car Insurance", path: "/insurance/motor-insurance" },
                  {
                    name: "Bike Insurance",
                    path: "/insurance/motor-insurance",
                  },
                  { name: "Commercial", path: "/insurance/motor-insurance" },
                ]}
                closeMenu={toggleMobileMenu}
              />
              <MobileColumn
                title="General Insurance"
                items={[
                  {
                    name: "Travel Insurance",
                    path: "/insurance/travel-insurance",
                  },
                  { name: "Home Insurance", path: "/insurance/home-insurance" },
                  {
                    name: "Personal Accident",
                    path: "/insurance/non-motor-insurance",
                  },
                ]}
                closeMenu={toggleMobileMenu}
              />
              <MobileColumn
                title="Company"
                items={[
                  { name: "About Us", path: "/about" },
                  { name: "Careers", path: "/careers" },
                  { name: "Contact", path: "/contact" },
                ]}
                closeMenu={toggleMobileMenu}
              />
            </div>
          </MobileAccordion>

          <Link
            to="/about"
            onClick={toggleMobileMenu}
            className="hover:text-blue-600"
          >
            About
          </Link>
          <Link
            to="/careers"
            onClick={toggleMobileMenu}
            className="hover:text-blue-600"
          >
            Careers
          </Link>
          <Link
            to="/contact"
            onClick={toggleMobileMenu}
            className="hover:text-blue-600"
          >
            Contact
          </Link>

          <Link
            to="/be-advisor"
            onClick={toggleMobileMenu}
            className="mt-6 bg-blue-700 text-white px-6 py-3 rounded-full text-lg font-semibold shadow hover:bg-blue-800 transition-all text-center"
          >
            Become an Saathi
          </Link>
        </nav>
      </div>
    </header>
  );
}

function DropdownColumn({ title, items }) {
  return (
    <div>
      <h4 className="text-xl font-bold text-blue-700 mb-4">{title}</h4>
      <ul className="space-y-3 text-gray-800">
        {items.map((item, idx) => (
          <li key={idx}>
            <Link to={item.path} className="hover:text-blue-500">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function MobileAccordion({ title, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex justify-between items-center w-full font-semibold text-lg hover:text-blue-600"
      >
        {title}
        <span
          className={`ml-2 transition-transform duration-300 ${
            open ? "rotate-180" : "rotate-0"
          }`}
        >
          ▼
        </span>
      </button>
      {open && <div className="mt-3">{children}</div>}
    </div>
  );
}

// function MobileColumn({ title, items }) {
//   return (
//     <div>
//       <h4 className="font-bold text-blue-700 mb-2">{title}</h4>
//       <ul className="space-y-1">
//         {items.map((item, idx) => (
//           <li key={idx}>
//             <Link to={item.path}>{item.name}</Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }closeMenu={toggleMobileMenu}

function MobileColumn({ title, items, closeMenu }) {
  return (
    <div>
      <h4 className="font-bold text-blue-700 mb-2">{title}</h4>
      <ul className="space-y-1">
        {items.map((item, idx) => (
          <li key={idx}>
            <Link
              to={item.path}
              onClick={closeMenu}
              className="block hover:text-blue-600"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
