import Error from "../../Components/Error/Error";
import Loading from "../../Components/Loader/Loading";
import { BASE_URL } from "../../config";
import useFetchData from "../../hooks/useFetchData";
import DoctorCard from "../../Components/Doctors/DoctorCard";

const MyBookings = () => {
  const {
    data: appointments,
    loading,
    error,
  } = useFetchData(`${BASE_URL}/users/appointments/my-appointments`);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error errMessage={error} />;
  }

  return (
    <div>
      {/* Check if there are no appointments */}
      {appointments?.length === 0 ? (
        <h2 className="mt-7 text-center leading-7 text-2xl font-semibold text-textColor">
          You have no bookings
        </h2>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {appointments.map((doctor) => (
            <DoctorCard doctor={doctor} key={doctor.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MyBookings;
