import PropTypes from "prop-types";
import { BsArrowRightShort } from "react-icons/bs";
import { Link } from "react-router-dom";

const ServiceCard = ({ item: { name, desc, bgColor, textColor }, index = 0 }) => {
  return (
    <div className="py-8 px-4 lg:px-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-headingColor">{name}</h2>
      <p className="text-lg text-textColor mt-2">{desc}</p>

      <div className="flex items-center justify-between mt-6">
        <Link
          to="/doctor"
          className="flex items-center justify-center w-11 h-11 rounded-full border border-[#181A1E] transition-colors hover:bg-primaryColor hover:border-transparent"
          aria-label={`View more about ${name}`}
        >
          <BsArrowRightShort className="w-6 h-5 text-gray-600 group-hover:text-white" />
        </Link>
        <span
          className="flex items-center justify-center w-11 h-11 text-lg font-semibold"
          style={{
            backgroundColor: bgColor,
            color: textColor,
            borderRadius: "6px 0 0 6px",
          }}
        >
          {index + 1} 
        </span>
      </div>
    </div>
  );
};

ServiceCard.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    bgColor: PropTypes.string.isRequired,
    textColor: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number, 
};

export default ServiceCard;
