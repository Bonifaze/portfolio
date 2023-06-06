import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
// import { Typed } from 'react-typed';

const Testimonials = () => {
    // const testimonialStyles = 'mx-auto relative max-w-[400px] h-[350] flex flex-col justify-end p-16 mt-48 before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2';

    return (
        <section id="testimonials" className="pt-10 pb-5">
            {/* HEADING */}
      <motion.div
        className="md:w-1/3 text-center md:text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <p className="font-playfair font-semibold text-4xl mb-5 text-red">
          TESTIMONIALS
        </p>
        <LineGradient width="mx-auto w-2/4" />
        <p className="mt-8">
        Praise for Boniface: A Talented Software Developer Driving Excellence and Innovation.
        </p>
      </motion.div>

{/* TESTIMONIALS */}
<div className="md:flex md:justify-between gap-8">
        <motion.div
          className={"bg-blue mx-auto relative max-w-[400px] h-[100] flex flex-col justify-end p-10 mt-48 before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2  before:content-person1"}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1},
          }}
        >
          <p className="font-playfair text-6xl">“</p>
          <p className="text-center text-xl">
           
          Boniface is an exceptional software developer, known for their expertise, high-quality solutions, and effective communication, making them an invaluable asset to any project.
          </p>
        </motion.div>

        <motion.div
          className={'bg-red mx-auto relative max-w-[400px] h-[350] flex flex-col justify-end p-16 mt-48 before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 before:content-person2'}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1},
          }}
        >
          <p className="font-playfair text-6xl">“</p>
          <p className="text-center text-xl">
         A True Team Player - Boniface's Exceptional Teamworking Spirit Fuels Collaboration and Success.
          </p>
        </motion.div>

        <motion.div
          className={'bg-yellow mx-auto relative max-w-[400px] h-[350] flex flex-col justify-end p-16 mt-48 before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 before:content-person3'}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1},
          }}
        >
          <p className="font-playfair text-6xl">“</p>
          <p className="text-center text-xl">
          Boniface's Networking Prowess and Leadership Abilities Propel Team Success and Foster Meaningful Connections.
          </p>
        </motion.div>



        <motion.div
          className={'bg-white mx-auto relative max-w-[400px] h-[350] flex flex-col justify-end p-16 mt-48 before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 before:content-person4'}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1},
          }}
        >
          <p className="font-playfair text-6xl text-black">“</p>
          <p className="text-center text-xl text-black">
          Boniface's Networking Prowess and Leadership Abilities Propel Team Success and Foster Meaningful Connections.
          </p>
        </motion.div>



        
      </div>
        </section>
    )
};

export default Testimonials;
