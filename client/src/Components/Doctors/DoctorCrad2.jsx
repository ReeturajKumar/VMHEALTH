/* eslint-disable react/prop-types */


const DoctorCard = ({ doctor, selectedDate, selectedTimeSlot }) => {

  // Format the date to a human-readable format
  const formattedDate = selectedDate
    ? new Date(selectedDate).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "Invalid Date";

  const formattedTimeSlot = selectedTimeSlot || "No time selected";

  return (
    <div className="doctor-card border p-4 rounded-md">
      <img
        src={doctor.photo || "/default-doctor.jpg"} // Fallback to a default image if photo is missing
        alt={doctor.name}
        className="doctor-photo w-32 h-32 object-cover rounded-full mx-auto"
      />
      <h3 className="text-xl font-semibold mt-2">{doctor.name || "Doctor Name"}</h3>
      <p className="text-sm text-gray-600">{doctor.bio || "No bio available"}</p>
      <p className="mt-2 text-lg font-medium">Price: ${doctor.ticketPrice}</p>
      <p className="mt-2 text-sm text-gray-500">
        Appointment Date: {formattedDate}
      </p>
      <p className="mt-2 text-sm text-gray-500">
        Appointment Time: {formattedTimeSlot}
      </p>

     
    </div>
  );
};



export default DoctorCard;
