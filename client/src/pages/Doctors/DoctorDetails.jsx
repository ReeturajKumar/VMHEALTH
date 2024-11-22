import { useParams } from "react-router-dom";
import { doctors } from "../../data/Doctor";
import starIcon from '../../assets/Star.png';
import { useState } from "react";
import About from "./About";
import Feedback from "./Feedback";
import SidePanel from "./SidePanel";

const DoctorDetails = () => {
  const { id } = useParams();
  const doctor = doctors.find((doc) => doc.id === id);
  const [tab, setTab] = useState('about');

  return (
    <section className="py-10 md:py-16">
      <div className="max-w-7xl container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <div className="flex flex-col md:flex-row items-start gap-5 md:gap-8">
              <figure className="w-full max-w-[200px] mx-auto md:mx-0">
                {doctor ? (
                  <img
                    src={doctor.photo}
                    alt={doctor.name}
                    className="w-full h-auto rounded-lg"
                  />
                ) : (
                  <p>Doctor not found</p>
                )}
              </figure>
              <div className="flex-1">
                <span className="bg-[#CCF0F3] text-irisBlueColor py-1 px-3 text-xs lg:text-sm font-semibold rounded-md inline-block mb-2">
                  {doctor.specialty}
                </span>
                <h3 className="text-headingColor text-[22px] md:text-[24px] font-bold mb-1">
                  {doctor.name}
                </h3>
                <div className="flex items-center gap-2 text-sm lg:text-base text-headingColor font-semibold mb-2">
                  <img src={starIcon} alt="Rating" className="w-4 h-4" />
                  <span>{doctor.avgRating}</span>
                  <span className="text-headingColor font-normal">({doctor.totalRating})</span>
                </div>
                <p className="text-[14px] md:text-[16px] text-textColor max-w-md">
                  {doctor.about || "No additional information available."}
                </p>
              </div>
            </div>

            <div className="mt-8 border-b border-[#0066FF34]">
              <button 
                onClick={() => setTab('about')}
                className={`py-2 px-4 mr-4 text-[16px] font-semibold ${
                  tab === 'about' ? 'border-b-2 border-primaryColor text-primaryColor' : 'text-headingColor'
                }`}>
                About
              </button>
              <button 
                onClick={() => setTab('feedback')}
                className={`py-2 px-4 text-[16px] font-semibold ${
                  tab === 'feedback' ? 'border-b-2 border-primaryColor text-primaryColor' : 'text-headingColor'
                }`}>
                Feedback
              </button>
            </div>
            <div className="mt-5">
              {tab === 'about' && <About />}
              {tab === 'feedback' && <Feedback />}
            </div>
          </div>

          <div className="w-full md:w-auto">
            <SidePanel />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorDetails;
