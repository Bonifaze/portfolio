import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="h-50 bg-red pt-5">
      <div className="w-5/6 mx-auto ">
        <SocialMediaIcons />
        <div className="md:flex justify-center md:justify-between text-center ">
          <p className="font-playfair font-semibold text-2xl text-yellow">
            CLINTON BONIFACE
          </p>
          <p className="font-playfair text-md text-yellow">
            ©2023 BONIFACE. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
