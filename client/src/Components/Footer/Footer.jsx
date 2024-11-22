import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { RiLinkedinFill } from "react-icons/ri";
import { AiFillYoutube, AiFillInstagram, AiFillGithub } from "react-icons/ai";

const socialLinks = [
  {
    path: "https://www.linkedin.com/",
    icon: <RiLinkedinFill className="group-hover:text-white w-5 h-5" />,
  },
  {
    path: "https://www.youtube.com/",
    icon: <AiFillYoutube className="group-hover:text-white w-5 h-5" />,
  },
  {
    path: "https://www.instagram.com/",
    icon: <AiFillInstagram className="group-hover:text-white w-5 h-5" />,
  },
  {
    path: "https://www.github.com/",
    icon: <AiFillGithub className="group-hover:text-white w-5 h-5" />,
  },
];

const quickLinks = [
  { path: "/", name: "Home" },
  { path: "/about", name: "About Us" },
  { path: "/", name: "Services" },
  { path: "/", name: "Blog" },
];

const quickLinks2 = [
  { path: "/doctors", name: "FInd a Doctor" },
  { path: "/", name: "Request an Appointment" },
  { path: "/", name: "Find a Location" },
  { path: "/", name: "Get a Openion" },
];

const quickLinks3 = [
  { path: "/contact-us", display: "Contact Us" },
  { path: "/", display: "Privacy & Policy" },
  { path: "/", display: "Terms & Conditions" },
  { path: "/", display: "Help" },
];

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="pb-16 pt-10 ">
      <div className="max-w-7xl container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-[30px]">
          <div className="flex flex-col">
            <div className="flex items-center mb-4">
              <img src={logo} alt="VMHEALTH Logo" className="w-10 h-10" />
              <p className="text-[23px] leading-7 font-bold text-textColor ml-4">
                VMHEALTH
              </p>
            </div>
            <p className="text-[14px] leading-7 font-[400] text-textColor">
              Copyright © {year} VMHEALTH - All Rights Reserved
            </p>
            <div className="flex items-center mt-4 gap-3">
              {socialLinks.map((item, index) => (
                <a
                  href={item.path}
                  key={index}
                  className="w-9 h-9 border border-solid border-[#181A1E] rounded-full flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="mt-6 md:mt-0">
            <h2 className="text-[20px] leading-[30px] font-[700] mb-3 text-headingColor">
              VMHEALTH
            </h2>
            <ul className="mb-4">
              {quickLinks.map((item, index) => (
                <li key={index} className="mb-2">
                  <Link
                    to={item.path}
                    className="text-[16px] leading-7 text-textColor hover:text-primaryColor"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 md:mt-0">
            <h2 className="text-[20px] leading-[30px] font-[700] mb-3 text-headingColor">
              For Patients
            </h2>
            <ul className="mb-4">
              {quickLinks2.map((item, index) => (
                <li key={index} className="mb-2">
                  <Link
                    to={item.path}
                    className="text-[16px] leading-7 text-textColor hover:text-primaryColor"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 md:mt-0">
            <h2 className="text-[20px] leading-[30px] font-[700] mb-3 text-headingColor">
              Support
            </h2>
            <ul className="mb-4">
              {quickLinks3.map((item, index) => (
                <li key={index} className="mb-2">
                  <Link
                    to={item.path}
                    className="text-[16px] leading-7 text-textColor hover:text-primaryColor"
                  >
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
