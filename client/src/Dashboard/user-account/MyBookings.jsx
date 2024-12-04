import DoctorCard2 from "../../Components/Doctors/DoctorCrad2";
import Error from "../../Components/Error/Error";
import Loading from "../../Components/Loader/Loading";
import { BASE_URL } from "../../config";
import useFetchData from "../../hooks/useFetchData";

const MyBookings = () => {
  const {
    data: appointments,
    loading,
    error,
  } = useFetchData(`${BASE_URL}/users/appointments/my-appointments`);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loading />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Error errMessage={error} />
      </div>
    );
  }

  return (
    <div className="py-6 px-4">
      {/* Check if there are no appointments */}
      {appointments?.length === 0 ? (
        <h2 className="mt-7 text-center text-2xl font-semibold text-textColor">
          You have no bookings
        </h2>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {appointments.map((appointment) => (
            <div
              key={appointment.doctor._id}
              className="doctor-card-wrapper cursor-pointer "
            >
              <DoctorCard2
                doctor={appointment.doctor}
                selectedDate={appointment.selectedDate}
                selectedTimeSlot={appointment.selectedTimeSlot}
              />
              <button
                className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md cursor-pointer"
                onClick={() => window.location.href = `/doctor/${appointment.doctor._id}`}
              >
                More Details
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyBookings;
