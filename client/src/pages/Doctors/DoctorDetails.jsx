/* eslint-disable no-unused-vars */
import { useState } from "react";
import starIcon from "../../assets/Star.png";
import Feedback from "./Feedback";
import SidePanel from "./SidePanel";
import doctorImg from "../../assets/doctor-img01.png";
import DoctorAbout from "./DoctorAbout";
import useFetchData from "./../../hooks/useFetchData";
import Loader from "../../Components/Loader/Loading";
import Error from "../../Components/Error/Error";
import { BASE_URL } from "../../config";
import { useParams } from "react-router-dom";

const DoctorDetails = () => {
  const [tab, setTab] = useState("about");
  const { id } = useParams();
  const {
    data: doctor,
    loading,
    error,
  } = useFetchData(`${BASE_URL}/doctors/${id}`);


  const {
  name,
  qualifications,
  experiences,
  timeSlots,
  reviews,
  bio,
  about,
  averageRating,
  totalRating,
  specialization,
  photo,
  ticketPrice,
  } = doctor;


  return (
    <section className="py-10 md:py-16">
      <div className="max-w-7xl container mx-auto px-4 md:px-6 lg:px-8">
        {loading && <Loader />}
        {error && <Error />}

        {!loading && !error && (
          <div className="grid md:grid-cols-3 gap-[50px]">
            <div className="md:col-span-2">
              <div className="flex items-center gap-5">
                <figure className="max-w-[200px] max-h-[200px]">
                  <img src={photo} alt="" />
                </figure>
                <div className="flex-1">
                  <span className="bg-[#CCF0F3] text-irisBlueColor py-1 px-6 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded">
                    {specialization}
                  </span>
                  <h3 className="text-headingColor text-[22px] md:text-[24px] font-bold mb-1">
                    {name}
                  </h3>
                  <div className="flex items-center gap-[6px]">
                    <span className="flex items-center gap-[6px] text-[14px] leading-5 lg:text-[16px] lg:leading-7 text-textColor font-semibold">
                      <img src={starIcon} alt="Rating" className="w-4 h-4" />{" "}
                      {averageRating}
                    </span>
                    <span className=" text-[14px] leading-5 lg:text-[16px] lg:leading-7 text-textColor font-semibold">
                      ({totalRating})
                    </span>
                    <span className="text-headingColor font-normal"></span>
                  </div>
                  <p className=" text__para text-[14px] leading-6 md:text-[15px] lg:max-w-[390px]">
                   {bio}
                  </p>
                </div>
              </div>

              <div className="mt-[50px] border-b border-solid border-[#0066FF34]">
                <button
                  onClick={() => setTab("about")}
                  className={` ${
                    tab === "about"
                      ? "border-b-2 border-primaryColor text-primaryColor"
                      : "text-headingColor"
                  } py-2 px-5 mr-5 text-[16px] leading-7 font-semibold`}
                >
                  About
                </button>
                <button
                  onClick={() => setTab("feedback")}
                  className={` ${
                    tab === "feedback"
                      ? "border-b-2 border-primaryColor text-primaryColor"
                      : "text-headingColor"
                  } py-2 px-4 text-[16px] font-semibold`}
                >
                  Feedback
                </button>
              </div>
              <div className="mt-[50px]">
                {tab === "about" && <DoctorAbout name={name} about={about} qualifications={qualifications} experiences={experiences} />}
                {tab === "feedback" && <Feedback reviews={reviews} totalRating={totalRating} />}
              </div>
            </div>

            <div className="w-full md:w-auto">
              <SidePanel  doctorId= {doctor._id} ticketPrice={ticketPrice} timeSlots={timeSlots}/>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default DoctorDetails;
