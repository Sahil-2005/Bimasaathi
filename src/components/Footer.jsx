import React from "react";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../assets/logo (2).png";

const Footer = () => {
  return (
    <footer className="bg-blue-700 text-white pt-16 pb-10 px-6 sm:px-10">
      <div className="w-full max-w-[1600px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 sm:gap-16">
        {/* Company Info */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img
            src={Logo}
            alt="V AND L ASSURANCE & INVESTMENT SOLUTIONS LLP Logo"
            // className="h-12 sm:h-16 w-auto object-contain"
            className="h-21 w-20 object-contain"
          />
          {/* <p className="text-base sm:text-lg leading-relaxed opacity-90">
            Registered with IRDAI as a Direct Insurance Broker - Life and
            General.
            <br />
            CIN: 
            <br />
            IRDAI Reg No:  | Valid till 
          </p> */}
          <Link
            to="/be-advisor"
            className="inline-block px-5 py-3 bg-white text-blue-900 text-base sm:text-lg font-semibold rounded-xl hover:bg-blue-100 transition duration-300"
          >
            Become an Advisor
          </Link>
        </motion.div>

        {/* Navigation Links */}
        <motion.div
          className="grid grid-cols-2 gap-6 text-base sm:text-lg"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 sm:space-y-3 opacity-90">
              <li>
                <Link to="/" className="hover:text-blue-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-blue-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-blue-300">
                  Careers
                </Link>
              </li>
              {/* <li>
                <Link to="/blog" className="hover:text-blue-300">
                  Blog
                </Link>
              </li> */}
            </ul>
          </div>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          className="space-y-6 sm:space-y-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
              Registered Office
            </h3>
            <p>V and L Assurance and Investment Solutions LLP. </p>
            <p className="text-base sm:text-lg opacity-90 leading-relaxed">
              323 Gold Crest Business Park,
              <br />
              Ghatkopar (West), Opp. Shreyas Cinema,
              <br />
              Mumbai - 400086
            </p>
          </div>

          <div className="text-base sm:text-lg opacity-90 space-y-1">
            <p>
              📞{" "}
              <a
                href="tel:+918433589573"
                className="hover:text-blue-300 transition"
              >
                +91 84335 89573
              </a>
            </p>
            <p>
              📞{" "}
              <a
                href="tel:+912245184253"
                className="hover:text-blue-300 transition"
              >
                +91 22451 84253
              </a>
            </p>
            <p>
              📧{" "}
              <a
                href="mailto:support@insurancecarryinfo.in"
                className="hover:text-blue-300 transition"
              >
                support@insurancecarryinfo.in
              </a>
            </p>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      {/* <div className="mt-14 border-t border-blue-600 pt-6 text-base sm:text-lg flex flex-col sm:flex-row justify-between items-center gap-4 w-full max-w-[1600px] mx-auto">
        <p>© {new Date().getFullYear()} V AND L ASSURANCE & INVESTMENT SOLUTIONS LLP. All rights reserved.</p>
        <div className="flex gap-5 text-xl">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition">
            <FaTwitter />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition">
            <FaLinkedinIn />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition">
            <FaInstagram />
          </a>
        </div>
      </div> */}

      {/* Bottom Bar */}
      <div className="mt-14 border-t border-blue-600 pt-6 text-base sm:text-lg w-full max-w-[1600px] mx-auto">
        <div className="text-center sm:text-left text-sm sm:text-base text-white mb-4 sm:mb-2">
          <p>
            <span className="font-medium text-white">Insurance Carry Info</span>{" "}
            is a digital platform of{" "}
            <span className="font-semibold text-blue-200">
              V and L Assurance and Investment Solution Pvt. Ltd.
            </span>
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm sm:text-base">
            © {new Date().getFullYear()} V AND L ASSURANCE & INVESTMENT
            SOLUTIONS LLP. All rights reserved.
          </p>
          <div className="flex gap-5 text-xl">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300 transition"
            >
              <FaTwitter />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300 transition"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300 transition"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
