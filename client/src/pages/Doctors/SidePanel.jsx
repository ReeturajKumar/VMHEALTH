/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
const SidePanel = ({ doctorId, ticketPrice, timeSlots }) => {
  const formatTime = (time) => {
    const [hour, minute] = time.split(":");
    const isPM = hour >= 12;
    const formattedHour = isPM ? hour - 12 || 12 : hour;
    return `${formattedHour}:${minute} ${isPM ? "PM" : "AM"}`;
  };
  
  return (
    <div className="shadow-panelShadow p-3 lg:p-5 rounded-md">
      <div className="flex items-center justify-between">
        <p className="text_para mt-0 font-semibold">Doctor Fee</p>
        <span className="text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor font-bold">
          {ticketPrice} INR
        </span>
      </div>

      <div className="mt-[30px]">
        <p className="text_para mt-0 font-semibold text-headingColor">
          Available Time Slots
        </p>
        <ul className="mt-3">
          {timeSlots?.map((item, index) => (
            <li key={index} className="flex items-center justify-between mb-2">
              <p className="text-[15px] leading-6 text-textColor font-semibold">
                {item.day.charAt(0).toUpperCase() + item.day.slice(1)} {/* Capitalize the first letter */}
              </p>
              <p className="text-[15px] leading-6 text-textColor font-semibold">
                {formatTime(item.startingTime)} - {formatTime(item.endingTime)}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <button className="btn px-2 w-full rounded-full">Book an Appointment</button>
    </div>
  );
};

export default SidePanel;
