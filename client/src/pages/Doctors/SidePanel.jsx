/* eslint-disable react/prop-types */
import { useState } from "react";
import { toast } from "react-toastify";
import { BASE_URL, token } from "../../config";

const SidePanel = ({ doctorId, ticketPrice, timeSlots }) => {
  // State to store selected date and time slot
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("");

  const bookingHandler = async () => {
    try {
      if (!selectedDate || !selectedTimeSlot) {
        throw new Error("Please select a date and time slot before booking.");
      }

      const res = await fetch(`${BASE_URL}/bookings/checkout-session/${doctorId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          selectedDate,
          selectedTimeSlot,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || "Something went wrong. Please try again.");
      }

      if (data.url) {
        window.location.href = data.url;
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

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
          Select Date
        </p>
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="mt-3 p-2 border rounded-md w-full"
        />
      </div>

      <div className="mt-[30px]">
        <p className="text_para mt-0 font-semibold text-headingColor">
          Select Time Slot
        </p>
        <ul className="mt-3">
          {timeSlots?.map((item, index) => (
            <li key={index} className="flex items-center justify-between mb-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="timeSlot"
                  value={`${formatTime(item.startingTime)} - ${formatTime(item.endingTime)}`}
                  onChange={(e) => setSelectedTimeSlot(e.target.value)}
                  className="mr-2"
                />
                {item.day.charAt(0).toUpperCase() + item.day.slice(1)}:{" "}
                {formatTime(item.startingTime)} - {formatTime(item.endingTime)}
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-5">
        <button onClick={bookingHandler} className="btn px-2 w-full rounded-full">
          Book an Appointment
        </button>
      </div>

      {/* Display selected date and time */}
      <div className="mt-5 text-center">
        {selectedDate && selectedTimeSlot && (
          <p className="text_para font-semibold">
           Date: {selectedDate} | Time: {selectedTimeSlot}
          </p>
        )}
      </div>
    </div>
  );
};

export default SidePanel;
