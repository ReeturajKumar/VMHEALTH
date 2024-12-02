import { BiMenu } from "react-icons/bi";
import { useContext, useState, useEffect, useRef } from "react";
import { authContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Tabs = ({ tab, setTab }) => {
  const { dispatch } = useContext(authContext);
  const navigate = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Create a ref to track the menu container
  const menuRef = useRef(null);
  const menuButtonRef = useRef(null); // Ref for the menu button

  const handlelogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/login");
  };

  // Toggle the mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when clicking outside
  useEffect(() => {
    // Function to handle clicks outside the menu or menu button
    const handleClickOutside = (event) => {
      if (
        menuRef.current && !menuRef.current.contains(event.target) && 
        menuButtonRef.current && !menuButtonRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false); // Close the menu if the click is outside
      }
    };

    // Add event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative">
      {/* Menu icon for small screens */}
      <span
        ref={menuButtonRef} // Attach ref to the menu button
        className="lg:hidden block p-3 cursor-pointer"
        onClick={toggleMenu} // Toggle the menu when clicked
      >
        <BiMenu className="w-6 h-6" />
      </span>

      {/* Mobile Sidebar (Visible when isMenuOpen is true) */}
      <div
        ref={menuRef} // Attach the ref to the menu container
        className={`lg:hidden fixed top-0 left-0 w-64 h-full bg-white shadow-md transition-transform duration-300 ${
          isMenuOpen ? "transform translate-x-0" : "transform -translate-x-full"
        } z-10`} // Apply sliding animation
      >
        <div className="flex flex-col p-6">
          <button
            onClick={() => setTab("overview")}
            className={`${
              tab === "overview" ? "bg-indigo-100 text-primaryColor" : "bg-transparent text-headingColor"
            } w-full btn py-3 rounded-md text-lg`}
          >
            Overview
          </button>
          <button
            onClick={() => setTab("appointments")}
            className={`${
              tab === "appointments" ? "bg-indigo-100 text-primaryColor" : "bg-transparent text-headingColor"
            } w-full btn py-3 rounded-md text-lg`}
          >
            Appointments
          </button>
          <button
            onClick={() => setTab("settings")}
            className={`${
              tab === "settings" ? "bg-indigo-100 text-primaryColor" : "bg-transparent text-headingColor"
            } w-full btn py-3 rounded-md text-lg`}
          >
            Profile
          </button>

          {/* Logout and Delete Account Buttons */}
          <div className="mt-12 w-full">
            <button
              onClick={handlelogout}
              className="w-full bg-[#181A1E] p-3 text-lg rounded-md text-white"
            >
              Logout
            </button>
            <button className="w-full bg-red-600 mt-4 p-3 text-lg rounded-md text-white">
              Delete Account
            </button>
          </div>
        </div>
      </div>

      {/* Sidebar for Large Screens */}
      <div className="hidden lg:flex flex-col p-6 bg-white shadow-md items-center h-auto rounded-md">
        <button
          onClick={() => setTab("overview")}
          className={`${
            tab === "overview" ? "bg-indigo-100 text-primaryColor" : "bg-transparent text-headingColor"
          } w-full btn py-3 rounded-md text-lg`}
        >
          Overview
        </button>
        <button
          onClick={() => setTab("appointments")}
          className={`${
            tab === "appointments" ? "bg-indigo-100 text-primaryColor" : "bg-transparent text-headingColor"
          } w-full btn py-3 rounded-md text-lg`}
        >
          Appointments
        </button>
        <button
          onClick={() => setTab("settings")}
          className={`${
            tab === "settings" ? "bg-indigo-100 text-primaryColor" : "bg-transparent text-headingColor"
          } w-full btn py-3 rounded-md text-lg`}
        >
          Profile
        </button>

        {/* Logout and Delete Account Buttons */}
        <div className="mt-20 w-full">
          <button
            onClick={handlelogout}
            className="w-full bg-[#181A1E] p-3 text-lg rounded-md text-white"
          >
            Logout
          </button>
          <button className="w-full bg-red-600 mt-4 p-3 text-lg rounded-md text-white">
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
