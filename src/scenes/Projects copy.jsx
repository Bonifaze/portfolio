import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, description }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500 bg-grey z-30 flex flex-col justify-center items-center text-center p-8 text-white`;

  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div
      variants={projectVariant}
      className="relative group rounded-lg overflow-hidden shadow-lg"
    >
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-4 text-lg">{description}</p>
      </div>
      <img
        src={`../assets/${projectTitle}.png`}
        alt={projectTitle}
        className="w-full h-full object-cover"
      />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-20 pb-40 px-6 md:px-16 bg-light-gray">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <p className="font-playfair font-semibold text-4xl text-gray-800">
          <span className="text-red">PRO</span>JECTS
        </p>
        <div className="flex justify-center mt-2">
          <LineGradient width="w-2/3" />
        </div>
        <p className="mt-10 text-lg text-gray-600">
          Building the digital future, one line of code at a time. Proud of the
          seamless software solutions created with passion, precision, and
          innovation.
        </p>
      </motion.div>

      {/* PROJECTS GRID */}
      <motion.div
        className="grid sm:grid-cols-2 md:grid-cols-3 gap-12"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Row 1: Categories */}
        <motion.div
          className="flex justify-center text-center items-center p-8 bg-red-600 rounded-lg text-white text-xl font-semibold shadow-xl"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          BEAUTIFUL USER INTERFACES
        </motion.div>
        <motion.div
          className="flex justify-center text-center items-center p-8 bg-blue-600 rounded-lg text-white text-xl font-semibold shadow-xl"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          SMOOTH USER EXPERIENCE
        </motion.div>

        {/* Row 2: Projects */}
        <motion.div
          variants={projectVariant}
          className="flex justify-center"
        >
          <Project title="Project 1" description="Data Dashboard" />
        </motion.div>
        <motion.div
          variants={projectVariant}
          className="flex justify-center"
        >
          <Project title="Project 2" description="Veritas University Portal" />
        </motion.div>
        <motion.div
          variants={projectVariant}
          className="flex justify-center"
        >
          <Project title="Project 3" description="Portfolio Website" />
        </motion.div>
        <motion.div
          variants={projectVariant}
          className="flex justify-center"
        >
          <Project title="Project 4" description="Blog & News WebApp" />
        </motion.div>
        <motion.div
          variants={projectVariant}
          className="flex justify-center"
        >
          <Project title="Project 5" description="E-commerce Site" />
        </motion.div>
        <motion.div
          variants={projectVariant}
          className="flex justify-center"
        >
          <Project title="Project 6" description="Concert Booker Site" />
        </motion.div>
        <motion.div
          variants={projectVariant}
          className="flex justify-center"
        >
          <Project title="Project 7" description="Food Delivery Website" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
