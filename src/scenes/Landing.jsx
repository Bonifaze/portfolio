import SocialMediaIcons from "../components/SocialMediaIcons";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import TypeWriterEffect from "react-typewriter-effect";

const Landing = ({ setSelectedPage }) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  // const handleDownloadCV = () => {
  //   // Logic for downloading the CV file
  //   // Replace this with the actual download implementation
  //   console.log("Download CV clicked");
  // };

  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center  md:h-full gap-16 py-10"
    >
      {/* IMAGE SECTION */}
      <div className="md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-32">
        {isAboveMediumScreens ? (
          <div
            className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 before:rounded-t-[400px]
            before:w-full before:max-w-[400px] before:h-full  before:border-2  before:border-blue before:z-[-1] md:before:max-w-[500px] "
          >
            {/* IMAGE ON LARG SCREEN */}
            <img
              alt="profile"
              className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[300px] md:max-w-[500px]"
              src="assets/me2.png"
            />
          </div>
        ) : (
          // IMAGE ON SMALL device
          <img
            alt="profile"
            className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[300px] md:max-w-[500px]"
            src="assets/me2.png"
          />
        )}
      </div>

      {/* MAIN TEXT */}
      <div className="z-30 basis-2/5 mt-12 md:mt-32">
        {/* HEADINGS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="text-4xl font-playfair z-10 text-center md:text-start text-white">
            CLINTON {""}
            <span
              className="xs:relative xs:text-deep-blue xs:font-semibold z-20 xs:before:content-brush
              before:absolute before:-left-[25px] before:-top-[70px] before:z-[-1]"
            >
              BONIFACE
            </span>
            <span className="xs:relative xs:font-semibold z-20 text-yellow">
              <TypeWriterEffect 
                textStyle={{
                  fontFamily: "Red Hat Display",
                  color: "",
                }}
                multiText={[
                  "I'm a Software Developer",
                  "I'm a Data Analyst",
                  "I'm an Editor",
                ]}
                multiTextDelay={1000}
                typeSpeed={80}
                backSpeed={100}
                loop // Set loop to true to make the typewriter effect loop
              />
            </span>
          </p>

          <p className="mt-10 mb-7 text-2xl text-center md:text-start">
            Looking for a skilled developer to join your team? With experience across multiple industries and a keen
            eye for detail, Clinton delivers high-quality solutions on time and within budget. Clinton collaborates
            effectively and stays up-to-date with the latest trends. Choose a skilled developer for your next project
            and experience the difference.
          </p>
        </motion.div>

        {/* CALL TO ACTIONS */}
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <a
            href="/assets/cv.pdf" // Replace with the actual path to your CV file
            target="_blank"
            rel="noopener noreferrer"
            download
            className="bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold
              hover:bg-blue hover:text-white transition duration-500"
          >
            Download CV
          </a>
          <AnchorLink
            className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            <div className="bg-deep-blue hover:text-red transition duration-500 w-full h-full flex items-center justify-center  font-playfair px-10">
              Let's talk.
            </div>
          </AnchorLink>
        </motion.div>

        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaIcons />
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;
