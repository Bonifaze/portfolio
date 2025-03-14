import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const Testimonials = () => {
    return (
        <section id="testimonials" className="pt-10 pb-5">
            {/* HEADING */}
            <motion.div
                className="md:w-1/2 text-center md:text-left"
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
                    CLIENTS & TEAM
                </p>
                <LineGradient width="mx-auto w-2/4" />
                <p className="mt-8">
                    Praise for Boniface: A Talented Software Developer Driving Excellence and Innovation.
                </p>
            </motion.div>

            {/* TESTIMONIALS */}
            <div className="md:flex md:justify-between gap-8 flex-wrap pb-10">
                <motion.div
                    className="bg-[#143c64] mx-auto relative max-w-[250px] h-[350px] flex flex-col justify-end p-8 mt-16 before:absolute before:top-[-80px] before:-ml-[90px] before:left-1/2 before:content-person1 before:bg-cover before:bg-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, scale: 0.8 },
                        visible: { opacity: 1, scale: 1 },
                    }}
                >
                    <p className="font-playfair text-6xl">“</p>
                    <p className="text-center text-xl pt-2">
                        An exceptional software developer, high-quality solutions & effective communication skills.
                    </p>
                </motion.div>

                <motion.div
                    className="bg-red mx-auto relative max-w-[250px] h-[350px] flex flex-col justify-end p-8 mt-16 before:absolute before:top-[-80px] before:-ml-[90px] before:left-1/2 before:content-person2 before:bg-cover before:bg-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, scale: 0.8 },
                        visible: { opacity: 1, scale: 1 },
                    }}
                >
                    <p className="font-playfair text-6xl">“</p>
                    <p className="text-center text-xl">
                        A True Team Player - Boniface's Exceptional Teamworking Spirit Fuels Collaboration and Success.
                    </p>
                </motion.div>

                <motion.div
                    className="bg-[#143c64] mx-auto relative max-w-[250px] h-[350px] flex flex-col justify-end p-8 mt-16 before:absolute before:top-[-80px] before:-ml-[90px] before:left-1/2 before:content-person3 before:bg-cover before:bg-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, scale: 0.8 },
                        visible: { opacity: 1, scale: 1 },
                    }}
                >
                    <p className="font-playfair text-6xl">“</p>
                    <p className="text-center text-xl">
                        Networking Prowess and Leadership Abilities Propel Team Success and Foster Meaningful Connections.
                    </p>
                </motion.div>

                <motion.div
                    className="bg-[#143c64] mx-auto relative max-w-[250px] h-[350px] flex flex-col justify-end p-8 mt-16 before:absolute before:top-[-80px] before:-ml-[90px] before:left-1/2 before:content-person4 before:bg-cover before:bg-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, scale: 0.8 },
                        visible: { opacity: 1, scale: 1 },
                    }}
                >
                    <p className="font-playfair text-6xl text-grey">“</p>
                    <p className="text-center text-xl text-grey">
                        Exceptional software developer who consistently meets and surpasses project goals.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials;
