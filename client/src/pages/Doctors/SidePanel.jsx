import { useParams } from "react-router-dom";
import { doctors } from "../../data/Doctor";

const SidePanel = () => {
  const { id } = useParams();
  const doctor = doctors.find((doc) => doc.id === id);

  return (
    <div className='shadow-panelShadow p-3 lg:p-5 rounded-md'>
      <div className="flex items-center justify-between">
        <p className="text_para mt-0 font-semibold">Doctor Fee</p>
        <span className="text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor font-bold">
          {doctor?.fee} INR
        </span>
      </div>

      <div className="mt-[30px]">
        <p className="text_para mt-0 font-semibold text-headingColor">
          Available Time Slots
        </p>
        <ul className="mt-3">
          <li className="flex items-center justify-between mb-2">
            <p className="text-[15px] leading-6 text-textColor font-semibold">
              Saturday
            </p>
            <p className="text-[15px] leading-6 text-textColor font-semibold">
              04 : 00 PM - 09 : 30 PM
            </p>
          </li>
          <li className="flex items-center justify-between mb-2">
            <p className="text-[15px] leading-6 text-textColor font-semibold">
              Monday
            </p>
            <p className="text-[15px] leading-6 text-textColor font-semibold">
              04 : 00 PM - 09 : 30 PM
            </p>
          </li>
          <li className="flex items-center justify-between mb-2">
            <p className="text-[15px] leading-6 text-textColor font-semibold">
              Thursday
            </p>
            <p className="text-[15px] leading-6 text-textColor font-semibold">
              04 : 00 PM - 09 : 30 PM
            </p>
          </li>
        </ul>
      </div>
      <button className="btn px-2 w-full rounded-full">Book an Appointment</button>
    </div>
  )
}

export default SidePanel