import { motion } from "framer-motion";
import HeroSlider from "../components/HeroSlider";
import Testimonials from "../components/Testimonials";
import Partners from "../components/Partners";
import Contact from "./Contact";
import Connected from "../components/Connected";
import Intro from "../components/Intro";
import FeatureCards from "../components/FeatureCards";


const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2 } }
};

export default function Home() {
  return (
    <>
      <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <HeroSlider />
      </motion.div>

      <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <Intro />
      </motion.div>

      <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <Connected />
      </motion.div>

      <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <FeatureCards />
      </motion.div>

      <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <Testimonials />
      </motion.div>


      <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <Partners />
      </motion.div>

      <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <Contact />
      </motion.div>

    </>
  );
}
