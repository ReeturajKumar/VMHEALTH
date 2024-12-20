import { NavLink, Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { RiMenu3Line } from "react-icons/ri";
import { useEffect, useRef, useContext } from "react";
import { authContext } from "./../../context/AuthContext";

const navLinks = [
  {
    path: "/",
    display: "Home",
  },
  {
    path: "/doctor",
    display: "Find a Doctor",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/contact-us",
    display: "Contact Us",
  },
];

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const { user, role, token } = useContext(authContext);

  const handleStickyHeader = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky_header");
      } else {
        headerRef.current.classList.remove("sticky_header");
      }
    });
  };

  useEffect(() => {
    handleStickyHeader();

    return () => {
      window.removeEventListener("scroll", handleStickyHeader);
    };
  }, []);

  const toggleMenu = () => menuRef.current.classList.toggle("show_menu");

  return (
    <header className="header flex items-center" ref={headerRef}>
      <div className="max-w-7xl container">
        <div className="flex items-center justify-between">
          <Link to="/">
            <div>
              <img src={Logo} alt="VMHEALTH" className="h-12" />
            </div>
          </Link>
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="menu flex items-center gap-[2.7rem]">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className={(navClass) =>
                      navClass.isActive
                        ? "text-primaryColor text-[16px] leading-7 font-[500]"
                        : "text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor"
                    }
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Nav right */}

          {/* Nav right */}
          <div className="flex items-center gap-4">
            {token && user ? (
              <div>
                <Link
                  to={`${
                    role === "doctor"
                      ? "/doctors/profile/me"
                      : "/users/profile/me"
                  }`}
                >
                  <figure className="w-[35px] h-[35px] rounded-full overflow-hidden cursor-pointer border border-gray-300">
                    <img
                      src={user?.photo}
                      className="w-full h-full object-cover"
                      alt="User Profile"
                    />
                  </figure>
                </Link>
              </div>
            ) : (
              <Link to="/login">
                <button className="bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px]">
                  Login
                </button>
              </Link>
            )}

            <span className="md:hidden" onClick={toggleMenu}>
              <RiMenu3Line className="w-6 h-6 cursor-pointer" />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
