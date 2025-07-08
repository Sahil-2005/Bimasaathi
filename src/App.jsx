// App.jsx
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Advisor from "./pages/Advisor";
import MotorInsurance from "./pages/MotorInsurance";
import NonMotorInsurance from "./pages/NonMotorInsurance";
import HealthLifeInsurance from "./pages/HealthLifeInsurance";
import Travelnsurance from "./pages/Travelnsurance";
import HomeInsurance from "./pages/HomeInsurance";
import CareersPage from "./pages/Careers";
import Footer from "./components/Footer";
import { useEffect } from "react";
import AgentRequirements from "./pages/AgentRequirement";


function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
        <Route path="/services" element={<PageWrapper><Services /></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
        <Route path="/be-advisor" element={<PageWrapper><Advisor /></PageWrapper>} />
        <Route path="/careers" element={<PageWrapper><CareersPage /></PageWrapper>} />
        <Route path="/agent-requirement" element={<PageWrapper><AgentRequirements /></PageWrapper>} />
        <Route path="/insurance/motor-insurance" element={<PageWrapper><MotorInsurance /></PageWrapper>} />
        <Route path="/insurance/non-motor-insurance" element={<PageWrapper><NonMotorInsurance /></PageWrapper>} />
        <Route path="/insurance/health-life-insurance" element={<PageWrapper><HealthLifeInsurance /></PageWrapper>} />
        <Route path="/insurance/travel-insurance" element={<PageWrapper><Travelnsurance /></PageWrapper>} />
        <Route path="/insurance/home-insurance" element={<PageWrapper><HomeInsurance /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
}



const  ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top of page on every route change
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // no UI needed
}


const PageWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};



function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <AnimatedRoutes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
