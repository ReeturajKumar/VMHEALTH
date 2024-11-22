import StartIcon from '../../assets/Star.png';
import { Link } from 'react-router-dom';
import { BsArrowRightShort } from 'react-icons/bs';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
const DoctorCard = ({ doctor }) => {
  // eslint-disable-next-line react/prop-types
  const { id, name, avgRating, totalRating, specialty, photo,} = doctor;

  return (
    <div className="p-3 lg:p-6 ">
      {/* Doctor Image */}
      <div>
        <img
          src={photo}
          alt={name}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Doctor Name */}
      <h2 className="mt-4 text-lg lg:text-2xl font-bold text-headingColor">
        {name}
      </h2>

      {/* Specialty and Ratings */}
      <div className="mt-3 flex items-center justify-between">
        <span className="bg-[#CCF0F3] text-irisBlueColor py-1 px-3 text-xs lg:text-sm font-semibold rounded-md">
          {specialty}
        </span>

        <div className="flex items-center gap-2">
          <span className="flex items-center text-sm lg:text-base font-semibold text-headingColor">
            <img src={StartIcon} alt="Rating Icon" className="w-4 h-4 lg:w-5 lg:h-5" />
            {avgRating}
          </span>
          <span className="text-sm lg:text-base font-normal text-textColor">
            ({totalRating})
          </span>
        </div>
      </div>

      {/* Total Patients and Hospital Inline with Arrow */}
      <div className="mt-5 flex items-center justify-between">
        <div className="flex items-center">
          {/* <div className="mr-12">
            <h3 className="text-base lg:text-lg font-semibold text-headingColor">
              {totalPatients} Total Patients
            </h3>
          </div> */}

          {/* Inline Arrow Icon Link */}
          <Link
            to={`/doctors/${id}`}
            className="flex items-end text-primaryColor hover:text-primaryHover"
          >
            <span className="flex text-sm font-semibold lg:text-base lg:leading-6">
              More Details
            </span>
            <BsArrowRightShort className="ml-1 w-6 h-6" />
          </Link>
        </div>
      </div>
    </div>
  );
};


DoctorCard.propTypes = {
  doctor: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    avgRating: PropTypes.number.isRequired,
    totalRating: PropTypes.number.isRequired,
    specialty: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
  }).isRequired,
};

export default DoctorCard;
