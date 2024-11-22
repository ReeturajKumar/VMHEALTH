import { useParams } from "react-router-dom";
import { doctors } from "../../data/Doctor";
import { formateDate } from "../../utils/formateDate";

const About = () => {
  // Get the doctor ID from the route parameters
  const { id } = useParams();
  // Find the specific doctor by id
  const doctor = doctors.find((doc) => doc.id === id);

  // If no doctor is found, show a fallback message
  if (!doctor) {
    return <p>Doctor not found</p>;
  }

  return (
    <>
    <div className="mt-10">

      <span className="text-irisBlueColor font-bold text-[24px] leading-9">
        {doctor.name}
      </span>
      <p className="text_para">
        {doctor.about2}
      </p>
    </div>
      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">Education</h3>
        <ul className="pt-4 md:p-5">
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                {formateDate(doctor.education1)} - {formateDate(doctor.education2)}
              </span>
              <p className="text-[15px] leading-6 font-medium text-textColor">PhD in {doctor.subject}</p>
            </div>
            <p className="text-[14px] leading-5 font-medium text-textColor">{doctor.hospital}</p>
          </li>

          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                {formateDate(doctor.education3)} - {formateDate(doctor.education4)}
              </span>
              <p className="text-[15px] leading-6 font-medium text-textColor">PhD in {doctor.medicalSchool}</p>
            </div>
            <p className="text-[14px] leading-5 font-medium text-textColor">Mohakhali, Dhaka, Bangladesh</p>
          </li>
        </ul>
      </div>

      <div className="mt-10">
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">Experience</h3>
        <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
          <li className="p-4 rounded bg-[#fff9ea]">
            <span className="text-secondaryColor text-[15px] leading-6 font-semibold">
              {formateDate(doctor.experience1)} - {formateDate(doctor.experience2)}
            </span>
            <p className="text-[16px] leading-6 font-medium text-textColor">Sr. {doctor.subject}</p>
            <p className="text-[14px] leading-5 font-medium text-textColor">At {doctor.hospital2}</p>
          </li>

          <li className="p-4 rounded bg-[#fff9ea]">
            <span className="text-secondaryColor text-[15px] leading-6 font-semibold">
              {formateDate(doctor.experience3)} - {formateDate(doctor.experience4)}
            </span>
            <p className="text-[16px] leading-6 font-medium text-textColor">Sr. {doctor.subject}</p>
            <p className="text-[14px] leading-5 font-medium text-textColor">At {doctor.hospital3}</p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default About;
