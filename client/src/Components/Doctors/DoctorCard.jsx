/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom';
import { BsArrowRightShort } from 'react-icons/bs';
import StartIcon from '../../assets/Star.png';

const DoctorCard = ({ doctor }) => {
  const {
    name,
    avgRating,
    totalRating,
    specialization,
    photo,
    experiences = [],
  } = doctor;

  return (
    <div className="p-3 lg:p-6">
      {/* Doctor Image */}
      <div>
        <img
          src={photo || 'default-photo-url.jpg'} // Fallback image URL
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
          {specialization || 'General Practitioner'} {/* Fallback value */}
        </span>

        <div className="flex items-center gap-2">
          <span className="flex items-center text-sm lg:text-base font-semibold text-headingColor">
            <img
              src={StartIcon}
              alt="Rating Icon"
              className="w-4 h-4 lg:w-5 lg:h-5"
            />
            {avgRating || 0}
          </span>
          <span className="text-sm lg:text-base font-normal text-textColor">
            ({totalRating || 0})
          </span>
        </div>
      </div>

      {/* Hospital Experience */}
      <div className="mt-5 flex items-center justify-between">
        <div className="flex items-center">
          <div className="mr-12">
            <p className="text-[14px] leading-6 font-[400] text-textColor">
              {experiences.length > 0
                ? `At ${experiences[0]?.hospital}`
                : 'No hospital information'}
            </p>
          </div>

          {/* Link to Doctor Details */}
          <Link
            to={`/doctor/${doctor._id}`}
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


export default DoctorCard;
